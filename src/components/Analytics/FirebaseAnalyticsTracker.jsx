import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FirebaseAnalyticsService } from '../../services/firebaseService';

const FirebaseAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    FirebaseAnalyticsService.trackPageView(location.pathname, document.title);
  }, [location]);

  return null; // This component doesn't render anything
};

// Helper functions for tracking specific events
export const trackEvent = (eventName, properties = {}) => {
  FirebaseAnalyticsService.trackEvent(eventName, properties);
};

export const trackROICalculation = (modules, results) => {
  FirebaseAnalyticsService.trackROICalculation(modules, results);
};

export const trackQuestionnaireCompletion = (moduleId, responses, results) => {
  FirebaseAnalyticsService.trackQuestionnaireCompletion(moduleId, responses, results);
};

export default FirebaseAnalyticsTracker;