import { create } from 'zustand';
import { FirebaseROIService, FirebaseAnalyticsService } from '../services/firebaseService';

const useFirebaseCalculatorStore = create((set, get) => ({
  // Selected modules
  selectedModules: [],
  setSelectedModules: (modules) => set({ selectedModules: modules }),

  // Current step
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),

  // Form data for each module
  formData: {
    m365: {},
    github: {},
    powerPlatform: {},
    dynamics365: {},
    security: {},
    company: {}
  },
  updateFormData: (module, data) => set((state) => ({
    formData: {
      ...state.formData,
      [module]: { ...state.formData[module], ...data }
    }
  })),

  // Results
  results: null,
  setResults: (results) => set({ results }),

  // Progress
  totalSteps: 0,
  setTotalSteps: (total) => set({ totalSteps: total }),

  // Calculation history
  calculationHistory: [],
  setCalculationHistory: (history) => set({ calculationHistory: history }),

  // Loading state
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),

  // Reset store
  reset: () => set({
    selectedModules: [],
    currentStep: 0,
    formData: {
      m365: {},
      github: {},
      powerPlatform: {},
      dynamics365: {},
      security: {},
      company: {}
    },
    results: null,
    totalSteps: 0
  }),

  // Calculate ROI with Firebase integration
  calculateROI: async () => {
    const { formData, selectedModules } = get();
    set({ isLoading: true });

    try {
      const results = {};
      let totalTimeSaved = 0;
      let totalCostSaved = 0;

      selectedModules.forEach(module => {
        const data = formData[module];
        let timeSaved = 0;
        let costSaved = 0;
        let score = 0;

        switch (module) {
          case 'm365':
            timeSaved = calculateM365Savings(data);
            costSaved = timeSaved * (data.avgHourlyRate || 50);
            score = Math.min(100, (timeSaved / 1000) * 100);
            break;
          case 'github':
            timeSaved = calculateGitHubSavings(data);
            costSaved = timeSaved * (data.avgHourlyRate || 75);
            score = Math.min(100, (timeSaved / 800) * 100);
            break;
          case 'powerPlatform':
            timeSaved = calculatePowerPlatformSavings(data);
            costSaved = timeSaved * (data.avgHourlyRate || 60);
            score = Math.min(100, (timeSaved / 600) * 100);
            break;
          case 'dynamics365':
            timeSaved = calculateDynamics365Savings(data);
            costSaved = timeSaved * (data.avgHourlyRate || 65);
            score = Math.min(100, (timeSaved / 700) * 100);
            break;
          case 'security':
            timeSaved = calculateSecuritySavings(data);
            costSaved = timeSaved * (data.avgHourlyRate || 80);
            score = Math.min(100, (timeSaved / 500) * 100);
            break;
        }

        results[module] = { timeSaved, costSaved, score };
        totalTimeSaved += timeSaved;
        totalCostSaved += costSaved;
      });

      const overallScore = Math.min(100, (totalTimeSaved / (selectedModules.length * 600)) * 100);
      const badge = getBadge(overallScore);

      const finalResults = {
        ...results,
        total: {
          timeSaved: totalTimeSaved,
          costSaved: totalCostSaved,
          score: overallScore,
          badge
        }
      };

      // Save to Firebase
      await FirebaseROIService.saveCalculation(formData, finalResults, selectedModules);

      // Track the calculation
      await FirebaseAnalyticsService.trackROICalculation(selectedModules, finalResults);

      set({ results: finalResults });
      return finalResults;
    } catch (error) {
      console.error('Error calculating ROI:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  // Load calculation history
  loadCalculationHistory: async () => {
    try {
      const sessionId = FirebaseAnalyticsService.getOrCreateSessionId();
      const history = await FirebaseROIService.getCalculationHistory(sessionId);
      set({ calculationHistory: history });
      return history;
    } catch (error) {
      console.error('Error loading calculation history:', error);
      return [];
    }
  }
}));

// Calculation functions (same as before but with Firebase integration)
const calculateM365Savings = (data) => {
  const { employees = 0, emailsPerDay = 0, meetingsPerWeek = 0, documentsPerWeek = 0, presentationsPerMonth = 0 } = data;
  return Math.round(
    employees * (
      (emailsPerDay * 5 * 52 * 0.1) + // Email time savings (10% efficiency gain)
      (meetingsPerWeek * 52 * 0.5) + // Meeting prep savings
      (documentsPerWeek * 52 * 2) + // Document creation savings
      (presentationsPerMonth * 12 * 3) // Presentation savings
    )
  );
};

const calculateGitHubSavings = (data) => {
  const { developers = 0, codeReviewsPerWeek = 0, bugsPerMonth = 0, featuresPerMonth = 0 } = data;
  return Math.round(
    developers * (
      (codeReviewsPerWeek * 52 * 1.5) + // Code review time savings
      (bugsPerMonth * 12 * 2) + // Bug fixing savings
      (featuresPerMonth * 12 * 4) // Feature development savings
    )
  );
};

const calculatePowerPlatformSavings = (data) => {
  const { businessUsers = 0, appsPerMonth = 0, flowsPerMonth = 0, reportsPerWeek = 0 } = data;
  return Math.round(
    businessUsers * (
      (appsPerMonth * 12 * 8) + // App development savings
      (flowsPerMonth * 12 * 4) + // Flow creation savings
      (reportsPerWeek * 52 * 2) // Report generation savings
    )
  );
};

const calculateDynamics365Savings = (data) => {
  const { salesReps = 0, leadsPerWeek = 0, customerInteractions = 0, reportsPerMonth = 0 } = data;
  return Math.round(
    salesReps * (
      (leadsPerWeek * 52 * 0.5) + // Lead processing savings
      (customerInteractions * 52 * 0.25) + // Customer interaction savings
      (reportsPerMonth * 12 * 1.5) // Report generation savings
    )
  );
};

const calculateSecuritySavings = (data) => {
  const { securityAnalysts = 0, incidentsPerMonth = 0, threatsPerWeek = 0, complianceChecks = 0 } = data;
  return Math.round(
    securityAnalysts * (
      (incidentsPerMonth * 12 * 3) + // Incident response savings
      (threatsPerWeek * 52 * 1) + // Threat analysis savings
      (complianceChecks * 12 * 2) // Compliance check savings
    )
  );
};

const getBadge = (score) => {
  if (score >= 80) return 'Platinum';
  if (score >= 60) return 'Gold';
  if (score >= 40) return 'Silver';
  return 'Bronze';
};

export default useFirebaseCalculatorStore;