import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FirebaseAnalyticsService } from '../../services/firebaseService';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location]);

  const trackPageView = async () => {
    try {
      const sessionId = getOrCreateSessionId();
      
      // Track with Firebase
      FirebaseAnalyticsService.trackPageView(location.pathname, document.title);
      
      console.log('Page view tracked:', {
        page_path: location.pathname,
        page_title: document.title,
        session_id: sessionId,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.log('Analytics tracking error:', error);
    }
  };

  const getOrCreateSessionId = () => {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  };

  return null; // This component doesn't render anything
};

// Helper functions for tracking specific events
export const trackEvent = async (eventName, properties = {}) => {
  try {
    const sessionId = sessionStorage.getItem('analytics_session_id') || 'unknown';
    
    // Track with Firebase
    await FirebaseAnalyticsService.trackEvent(eventName, {
      ...properties,
      session_id: sessionId,
      page_path: window.location.pathname,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.log('Event tracking error:', error);
  }
};

export const trackROICalculation = async (modules, results) => {
  try {
    await FirebaseAnalyticsService.trackROICalculation(modules, results);
  } catch (error) {
    console.log('ROI tracking error:', error);
  }
};

export const trackQuestionnaireCompletion = async (moduleId, responses, results) => {
  try {
    await FirebaseAnalyticsService.trackQuestionnaireCompletion(moduleId, responses, results);
  } catch (error) {
    console.log('Questionnaire tracking error:', error);
  }
};

export default AnalyticsTracker;