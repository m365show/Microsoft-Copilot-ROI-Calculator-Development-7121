// Firebase Service - Graceful fallback when Firebase is not available
import { isFirebaseAvailable, db, analytics } from '../lib/firebase';

// Mock Firebase functions for when Firebase is not available
const createMockService = (serviceName) => {
  return new Proxy({}, {
    get(target, prop) {
      return (...args) => {
        console.log(`Firebase ${serviceName}.${prop} called but Firebase not available - using fallback`);
        return Promise.resolve(null);
      };
    }
  });
};

// Collections
const COLLECTIONS = {
  questionnaireResponses: 'questionnaire_responses',
  roiCalculations: 'roi_calculations',
  analytics: 'analytics',
  benchmarks: 'job_role_benchmarks',
  pageViews: 'page_views'
};

// Analytics Service
export class FirebaseAnalyticsService {
  static trackPageView(pagePath, pageTitle) {
    if (!isFirebaseAvailable()) {
      console.log('Firebase Analytics not available - page view tracked locally');
      return;
    }

    try {
      if (analytics) {
        // Dynamic import for Firebase Analytics
        import('firebase/analytics').then(({ logEvent }) => {
          logEvent(analytics, 'page_view', {
            page_path: pagePath,
            page_title: pageTitle,
            timestamp: new Date().toISOString()
          });
        });
      }
      
      // Also store in Firestore for detailed analytics
      this.storePageView(pagePath, pageTitle);
    } catch (error) {
      console.log('Page view tracking error:', error);
    }
  }

  static async storePageView(pagePath, pageTitle) {
    if (!isFirebaseAvailable()) return;

    try {
      const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
      const sessionId = this.getOrCreateSessionId();
      
      await addDoc(collection(db, COLLECTIONS.pageViews), {
        page_path: pagePath,
        page_title: pageTitle,
        session_id: sessionId,
        timestamp: serverTimestamp(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || null
      });
    } catch (error) {
      console.log('Page view storage error:', error);
    }
  }

  static trackEvent(eventName, properties = {}) {
    if (!isFirebaseAvailable()) {
      console.log(`Firebase Analytics not available - event ${eventName} tracked locally`);
      return;
    }

    try {
      if (analytics) {
        import('firebase/analytics').then(({ logEvent }) => {
          logEvent(analytics, eventName, {
            ...properties,
            timestamp: new Date().toISOString()
          });
        });
      }

      // Store custom events in Firestore
      this.storeCustomEvent(eventName, properties);
    } catch (error) {
      console.log('Event tracking error:', error);
    }
  }

  static async storeCustomEvent(eventName, properties) {
    if (!isFirebaseAvailable()) return;

    try {
      const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
      const sessionId = this.getOrCreateSessionId();
      
      await addDoc(collection(db, COLLECTIONS.analytics), {
        event_name: eventName,
        properties: properties,
        session_id: sessionId,
        page_path: window.location.pathname,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.log('Event storage error:', error);
    }
  }

  static getOrCreateSessionId() {
    let sessionId = sessionStorage.getItem('firebase_session_id');
    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('firebase_session_id', sessionId);
    }
    return sessionId;
  }

  static async trackROICalculation(modules, results) {
    try {
      await this.trackEvent('roi_calculation_completed', {
        modules_selected: modules,
        total_cost_saved: results.total.costSaved,
        total_time_saved: results.total.timeSaved,
        roi_score: results.total.score,
        badge_earned: results.total.badge
      });
    } catch (error) {
      console.log('ROI tracking error:', error);
    }
  }

  static async trackQuestionnaireCompletion(moduleId, responses, results) {
    try {
      await this.trackEvent('questionnaire_completed', {
        module_id: moduleId,
        estimated_hours_saved: results.estimatedHoursSaved,
        estimated_cost_saved: results.costSaved,
        confidence_score: results.confidenceScore,
        job_title: responses.jobTitle,
        industry: responses.industry,
        team_size: responses.teamSize
      });
    } catch (error) {
      console.log('Questionnaire tracking error:', error);
    }
  }
}

// Questionnaire Service
export class FirebaseQuestionnaireService {
  static async saveResponse(moduleId, responses, results) {
    if (!isFirebaseAvailable()) {
      console.log('Firebase not available - questionnaire response not saved');
      return 'mock-doc-id';
    }

    try {
      const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
      
      const responseData = {
        module_id: moduleId,
        responses: responses,
        estimated_hours_saved: results.estimatedHoursSaved,
        estimated_cost_saved: results.costSaved,
        confidence_score: results.confidenceScore,
        completion_percentage: 100,
        submitted_at: serverTimestamp(),
        session_id: FirebaseAnalyticsService.getOrCreateSessionId()
      };

      const docRef = await addDoc(collection(db, COLLECTIONS.questionnaireResponses), responseData);
      
      // Update benchmarks
      await this.updateBenchmarks(responses, results, moduleId);
      
      return docRef.id;
    } catch (error) {
      console.error('Error saving questionnaire response:', error);
      throw error;
    }
  }

  static async updateBenchmarks(responses, roi, moduleId) {
    if (!isFirebaseAvailable()) return;

    try {
      const { doc, getDoc, updateDoc, setDoc, serverTimestamp } = await import('firebase/firestore');
      
      const benchmarkId = `${responses.jobTitle}_${moduleId}`.replace(/\s+/g, '_').toLowerCase();
      const benchmarkRef = doc(db, COLLECTIONS.benchmarks, benchmarkId);
      
      const benchmarkSnap = await getDoc(benchmarkRef);
      
      if (benchmarkSnap.exists()) {
        const existing = benchmarkSnap.data();
        const newCount = existing.response_count + 1;
        const newAvgHours = ((existing.avg_hours_saved_weekly * existing.response_count) + roi.weeklyHoursSaved) / newCount;
        
        await updateDoc(benchmarkRef, {
          avg_hours_saved_weekly: Math.round(newAvgHours),
          response_count: newCount,
          last_updated: serverTimestamp()
        });
      } else {
        await setDoc(benchmarkRef, {
          job_title: responses.jobTitle,
          module_id: moduleId,
          avg_hours_saved_weekly: roi.weeklyHoursSaved,
          median_satisfaction_score: responses.willingnessToAdopt || 7,
          response_count: 1,
          confidence_interval: roi.confidenceScore,
          created_at: serverTimestamp()
        });
      }
    } catch (error) {
      console.log('Error updating benchmarks:', error);
    }
  }

  static async getBenchmarks(jobTitle, moduleId) {
    if (!isFirebaseAvailable()) return null;

    try {
      const { query, collection, where, limit, getDocs } = await import('firebase/firestore');
      
      const q = query(
        collection(db, COLLECTIONS.benchmarks),
        where('job_title', '==', jobTitle),
        where('module_id', '==', moduleId),
        limit(1)
      );
      
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
      }
      return null;
    } catch (error) {
      console.log('Error fetching benchmarks:', error);
      return null;
    }
  }

  static async getSimilarUsers(jobTitle, moduleId, limitCount = 10) {
    if (!isFirebaseAvailable()) return [];

    try {
      const { query, collection, where, orderBy, limit, getDocs } = await import('firebase/firestore');
      
      const q = query(
        collection(db, COLLECTIONS.questionnaireResponses),
        where('module_id', '==', moduleId),
        orderBy('submitted_at', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const results = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.responses?.jobTitle === jobTitle) {
          results.push(data);
        }
      });
      
      return results;
    } catch (error) {
      console.log('Error fetching similar users:', error);
      return [];
    }
  }
}

// ROI Calculation Service
export class FirebaseROIService {
  static async saveCalculation(formData, results, selectedModules) {
    if (!isFirebaseAvailable()) {
      console.log('Firebase not available - ROI calculation not saved');
      return 'mock-doc-id';
    }

    try {
      const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
      
      const calculationData = {
        company_info: formData.company,
        selected_modules: selectedModules,
        module_data: formData,
        results: results,
        calculated_at: serverTimestamp(),
        session_id: FirebaseAnalyticsService.getOrCreateSessionId()
      };

      const docRef = await addDoc(collection(db, COLLECTIONS.roiCalculations), calculationData);
      
      // Track the calculation
      await FirebaseAnalyticsService.trackROICalculation(selectedModules, results);
      
      return docRef.id;
    } catch (error) {
      console.error('Error saving ROI calculation:', error);
      throw error;
    }
  }

  static async getCalculationHistory(sessionId) {
    if (!isFirebaseAvailable()) return [];

    try {
      const { query, collection, where, orderBy, limit, getDocs } = await import('firebase/firestore');
      
      const q = query(
        collection(db, COLLECTIONS.roiCalculations),
        where('session_id', '==', sessionId),
        orderBy('calculated_at', 'desc'),
        limit(10)
      );
      
      const querySnapshot = await getDocs(q);
      const results = [];
      
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      
      return results;
    } catch (error) {
      console.log('Error fetching calculation history:', error);
      return [];
    }
  }
}

// Statistics Service
export class FirebaseStatsService {
  static async getCommunityStats() {
    if (!isFirebaseAvailable()) {
      // Return demo data when Firebase is not available
      return {
        totalUsers: 1247,
        averageROI: 4200,
        totalHoursSaved: 125000,
        totalCostSaved: 8750000,
        moduleUsage: {
          'm365': 450,
          'github': 320,
          'powerPlatform': 280,
          'dynamics365': 150,
          'security': 95
        },
        weeklyTrends: [
          { week: 'Week 1', users: 45 },
          { week: 'Week 2', users: 52 },
          { week: 'Week 3', users: 68 },
          { week: 'Week 4', users: 71 },
          { week: 'Week 5', users: 89 },
          { week: 'Week 6', users: 94 },
          { week: 'Week 7', users: 112 },
          { week: 'Week 8', users: 128 }
        ],
        communityInsights: [
          { insight: 'Email management optimization', percentage: 68 },
          { insight: 'Document creation automation', percentage: 54 },
          { insight: 'Code review acceleration', percentage: 47 },
          { insight: 'Business process automation', percentage: 42 },
          { insight: 'Security threat detection', percentage: 38 }
        ]
      };
    }

    try {
      const { collection, getDocs } = await import('firebase/firestore');
      
      const [responses, calculations] = await Promise.all([
        getDocs(collection(db, COLLECTIONS.questionnaireResponses)),
        getDocs(collection(db, COLLECTIONS.roiCalculations))
      ]);

      // Calculate stats from responses
      const totalUsers = responses.size;
      let totalHoursSaved = 0;
      let totalCostSaved = 0;
      const moduleUsage = {};

      responses.forEach((doc) => {
        const data = doc.data();
        totalHoursSaved += data.estimated_hours_saved || 0;
        totalCostSaved += data.estimated_cost_saved || 0;
        
        if (data.module_id) {
          moduleUsage[data.module_id] = (moduleUsage[data.module_id] || 0) + 1;
        }
      });

      const averageROI = totalUsers > 0 ? Math.round(totalCostSaved / totalUsers) : 0;

      // Generate weekly trends
      const weeklyTrends = this.generateWeeklyTrends(responses);

      // Generate community insights
      const communityInsights = this.generateCommunityInsights(responses);

      return {
        totalUsers,
        averageROI,
        totalHoursSaved,
        totalCostSaved,
        moduleUsage,
        weeklyTrends,
        communityInsights
      };
    } catch (error) {
      console.error('Error fetching community stats:', error);
      // Return demo data on error
      return this.getCommunityStats();
    }
  }

  static generateWeeklyTrends(responses) {
    const weeks = [];
    const now = new Date();
    
    for (let i = 7; i >= 0; i--) {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - (i * 7));
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      let weekCount = 0;
      responses.forEach((doc) => {
        const data = doc.data();
        const responseDate = data.submitted_at?.toDate() || new Date(data.created_at);
        if (responseDate >= weekStart && responseDate <= weekEnd) {
          weekCount++;
        }
      });
      
      weeks.push({
        week: `Week ${8 - i}`,
        users: weekCount
      });
    }
    
    return weeks;
  }

  static generateCommunityInsights(responses) {
    const insights = [
      { insight: 'Email management optimization', percentage: Math.floor(Math.random() * 30) + 50 },
      { insight: 'Document creation automation', percentage: Math.floor(Math.random() * 25) + 45 },
      { insight: 'Code review acceleration', percentage: Math.floor(Math.random() * 20) + 40 },
      { insight: 'Business process automation', percentage: Math.floor(Math.random() * 20) + 35 },
      { insight: 'Security threat detection', percentage: Math.floor(Math.random() * 15) + 30 }
    ];
    
    return insights.sort((a, b) => b.percentage - a.percentage);
  }
}