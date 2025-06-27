import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import supabase from '../../lib/supabase';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location]);

  const trackPageView = async () => {
    try {
      const sessionId = getOrCreateSessionId();
      
      await supabase
        .from('analytics_pageviews_2024')
        .insert([{
          page_path: location.pathname,
          page_title: document.title,
          session_id: sessionId,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          referrer: document.referrer || null
        }]);
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
    
    await supabase
      .from('analytics_events_2024')
      .insert([{
        event_name: eventName,
        properties: properties,
        session_id: sessionId,
        page_path: window.location.pathname,
        timestamp: new Date().toISOString()
      }]);
  } catch (error) {
    console.log('Event tracking error:', error);
  }
};

export const trackROICalculation = async (modules, results) => {
  try {
    await trackEvent('roi_calculation_completed', {
      modules_selected: modules,
      total_cost_saved: results.total.costSaved,
      total_time_saved: results.total.timeSaved,
      roi_score: results.total.score,
      badge_earned: results.total.badge
    });
  } catch (error) {
    console.log('ROI tracking error:', error);
  }
};

export const trackQuestionnaireCompletion = async (moduleId, responses, results) => {
  try {
    await trackEvent('questionnaire_completed', {
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
};

export default AnalyticsTracker;