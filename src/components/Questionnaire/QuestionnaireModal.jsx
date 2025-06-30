import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { FirebaseQuestionnaireService, FirebaseAnalyticsService } from '../../services/firebaseService';

const { FiX, FiChevronRight, FiChevronLeft, FiCheck, FiStar, FiTrendingUp, FiUsers, FiClock, FiTarget } = FiIcons;

const QuestionnaireModal = ({ isOpen, onClose, moduleData, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [benchmarkData, setBenchmarkData] = useState(null);
  const [similarUsers, setSimilarUsers] = useState([]);
  const [industryBenchmarks, setIndustryBenchmarks] = useState(null);
  const [aiSuggestions, setAiSuggestions] = useState({});
  const [completionData, setCompletionData] = useState(null);

  // Enhanced data fetching for better insights
  useEffect(() => {
    if (isOpen && responses.jobTitle) {
      fetchEnhancedBenchmarks();
      generateAISuggestions();
    }
  }, [responses.jobTitle, responses.experience, responses.teamSize, isOpen]);

  const fetchEnhancedBenchmarks = async () => {
    try {
      // Get job role benchmarks
      const benchmarks = await FirebaseQuestionnaireService.getBenchmarks(
        responses.jobTitle,
        moduleData.moduleId
      );

      // Get similar user responses for peer comparison
      const peers = await FirebaseQuestionnaireService.getSimilarUsers(
        responses.jobTitle,
        moduleData.moduleId,
        10
      );

      setBenchmarkData(benchmarks);
      setSimilarUsers(peers || []);
    } catch (error) {
      console.log('Error fetching benchmarks:', error);
    }
  };

  const generateAISuggestions = () => {
    const suggestions = {};

    // AI-powered suggestions based on job role and experience
    if (responses.jobTitle && responses.experience) {
      const experienceLevel = responses.experience.split('-')[0];
      const isExperienced = parseInt(experienceLevel) > 5;

      switch (moduleData.moduleId) {
        case 'm365':
          suggestions.emailVolume = isExperienced ? '51-100' : '21-50';
          suggestions.meetingsPerWeek = responses.teamSize > 10 ? 15 : 8;
          suggestions.timeOnAdmin = isExperienced ? 3 : 6;
          break;
        case 'github':
          suggestions.codingHoursPerDay = isExperienced ? '7-8 hours' : '5-6 hours';
          suggestions.codeReviewsPerWeek = Math.min(responses.teamSize || 5, 10);
          suggestions.bugsPerMonth = isExperienced ? 15 : 25;
          break;
        case 'powerPlatform':
          suggestions.automationExperience = isExperienced ? 'Advanced' : 'Intermediate';
          suggestions.appsPerMonth = responses.teamSize > 20 ? 3 : 1;
          break;
        case 'dynamics365':
          suggestions.leadsPerWeek = responses.jobTitle.includes('Manager') ? 50 : 25;
          suggestions.customerInteractions = isExperienced ? 40 : 25;
          break;
        case 'security':
          suggestions.alertsPerDay = responses.teamSize > 15 ? '51-100' : '11-25';
          suggestions.incidentsPerMonth = isExperienced ? 20 : 35;
          break;
      }
    }

    setAiSuggestions(suggestions);
  };

  const questions = {
    profile: [
      {
        id: 'jobTitle',
        type: 'select',
        question: 'What is your primary job role?',
        options: moduleData.jobRoles,
        required: true
      },
      {
        id: 'experience',
        type: 'select',
        question: 'How many years of experience do you have?',
        options: ['0-2 years', '3-5 years', '6-10 years', '11-15 years', '15+ years'],
        required: true
      },
      {
        id: 'teamSize',
        type: 'number',
        question: 'How many people are in your team?',
        min: 1,
        max: 1000,
        required: true
      },
      {
        id: 'industry',
        type: 'select',
        question: 'What industry do you work in?',
        options: ['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government', 'Other'],
        required: true
      }
    ],
    usage: moduleData.questions,
    satisfaction: [
      {
        id: 'currentPainPoints',
        type: 'multiselect',
        question: 'What are your biggest productivity challenges?',
        options: moduleData.painPoints,
        required: true
      },
      {
        id: 'willingnessToAdopt',
        type: 'scale',
        question: 'How likely are you to adopt AI tools to improve productivity?',
        scale: 10,
        labels: ['Not likely', 'Very likely'],
        required: true
      },
      {
        id: 'expectedImpact',
        type: 'scale',
        question: 'How much time savings do you expect from AI assistance?',
        scale: 5,
        labels: ['No savings', 'Significant savings'],
        required: true
      },
      {
        id: 'currentToolUsage',
        type: 'scale',
        question: 'How often do you use automation tools in your current workflow?',
        scale: 5,
        labels: ['Never', 'Daily'],
        required: true
      }
    ]
  };

  const allQuestions = [
    ...questions.profile,
    ...questions.usage,
    ...questions.satisfaction
  ];

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const applySuggestion = (questionId, suggestedValue) => {
    handleResponse(questionId, suggestedValue);
  };

  const handleNext = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculatePersonalizedROI = (responses) => {
    let estimatedHoursSaved = 0;
    let confidenceScore = 0.7; // Base confidence

    switch (moduleData.moduleId) {
      case 'm365':
        const emailVolume = responses.emailVolume || '21-50';
        const emailCount = parseInt(emailVolume.split('-')[0]) || 25;
        estimatedHoursSaved = (emailCount * 0.1 * 5 * 52) + // Email savings
          (responses.meetingsPerWeek * 0.5 * 52) + // Meeting prep
          (responses.documentsPerWeek * 1.5 * 52); // Document creation
        break;
      case 'github':
        const codingHours = responses.codingHoursPerDay || '5-6 hours';
        const hoursPerDay = parseInt(codingHours.split('-')[0]) || 5;
        estimatedHoursSaved = (hoursPerDay * 0.3 * 5 * 52) + // 30% coding efficiency
          (responses.codeReviewsPerWeek * 0.5 * 52) + // Review time
          (responses.bugsPerMonth * 1.2 * 12); // Bug fixing
        break;
      case 'powerPlatform':
        estimatedHoursSaved = (responses.appsPerMonth * 20 * 12) + // App development
          (responses.workflowsToAutomate * 8) + // Workflow automation
          (responses.reportingFrequency === 'Daily' ? 260 : 52); // Reporting
        break;
      case 'dynamics365':
        estimatedHoursSaved = (responses.leadsPerWeek * 0.3 * 52) + // Lead processing
          (responses.customerInteractions * 0.2 * 52) + // CRM efficiency
          (responses.reportingTasks?.length * 4 * 12); // Reporting
        break;
      case 'security':
        const alertsDaily = responses.alertsPerDay || '11-25';
        const alertCount = parseInt(alertsDaily.split('-')[0]) || 15;
        estimatedHoursSaved = (alertCount * 0.4 * 365) + // Alert analysis
          (responses.incidentsPerMonth * 2 * 12) + // Incident response
          (responses.complianceReporting * 10 * 12); // Compliance
        break;
    }

    // Adjust confidence based on user profile
    if (responses.experience && responses.experience.includes('15+')) confidenceScore += 0.1;
    if (responses.currentToolUsage >= 4) confidenceScore += 0.1;
    if (responses.teamSize > 50) confidenceScore += 0.05;

    return {
      estimatedHoursSaved: Math.round(estimatedHoursSaved),
      confidenceScore: Math.min(confidenceScore, 0.95),
      costSaved: Math.round(estimatedHoursSaved * (moduleData.avgHourlyRate || 60)),
      weeklyHoursSaved: Math.round(estimatedHoursSaved / 52)
    };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Calculate personalized ROI
      const personalizedROI = calculatePersonalizedROI(responses);

      // Save response to Firebase
      await FirebaseQuestionnaireService.saveResponse(
        moduleData.moduleId,
        responses,
        personalizedROI
      );

      // Track completion
      await FirebaseAnalyticsService.trackQuestionnaireCompletion(
        moduleData.moduleId,
        responses,
        personalizedROI
      );

      // Prepare completion data
      const completionResult = {
        responses,
        personalizedROI,
        benchmarkData,
        similarUsers,
        moduleData,
        insights: generateInsights(responses, personalizedROI)
      };

      setCompletionData(completionResult);

      // Auto-close after showing results briefly
      setTimeout(() => {
        onComplete(completionResult);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error saving assessment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateInsights = (responses, roi) => {
    const insights = [];

    // Performance insights
    if (roi.weeklyHoursSaved > 10) {
      insights.push({
        type: 'success',
        title: 'High Impact Potential',
        message: `You could save ${roi.weeklyHoursSaved} hours per week - that's ${Math.round(roi.weeklyHoursSaved / 40 * 100)}% of a work week!`
      });
    }

    // Comparison insights
    if (benchmarkData && roi.weeklyHoursSaved > benchmarkData.avg_hours_saved_weekly) {
      insights.push({
        type: 'info',
        title: 'Above Average Impact',
        message: `Your potential savings are ${Math.round(((roi.weeklyHoursSaved - benchmarkData.avg_hours_saved_weekly) / benchmarkData.avg_hours_saved_weekly) * 100)}% higher than similar professionals.`
      });
    }

    // Recommendation insights
    if (responses.currentToolUsage < 3) {
      insights.push({
        type: 'tip',
        title: 'Quick Start Tip',
        message: 'Start with simple automation tasks to build confidence before tackling complex workflows.'
      });
    }

    return insights;
  };

  const renderQuestion = (question) => {
    const value = responses[question.id];
    const suggestion = aiSuggestions[question.id];

    switch (question.type) {
      case 'select':
        return (
          <div>
            <select
              value={value || ''}
              onChange={(e) => handleResponse(question.id, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required={question.required}
            >
              <option value="">Select an option...</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            {suggestion && !value && (
              <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-800">
                    💡 AI Suggestion: <strong>{suggestion}</strong>
                  </span>
                  <button
                    onClick={() => applySuggestion(question.id, suggestion)}
                    className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'multiselect':
        return (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={(value || []).includes(option)}
                  onChange={(e) => {
                    const newValue = value || [];
                    if (e.target.checked) {
                      handleResponse(question.id, [...newValue, option]);
                    } else {
                      handleResponse(question.id, newValue.filter(v => v !== option));
                    }
                  }}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case 'number':
        return (
          <div>
            <input
              type="number"
              value={value || ''}
              onChange={(e) => handleResponse(question.id, parseInt(e.target.value))}
              min={question.min}
              max={question.max}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number..."
              required={question.required}
            />
            {suggestion && !value && (
              <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-800">
                    💡 AI Suggestion: <strong>{suggestion}</strong>
                  </span>
                  <button
                    onClick={() => applySuggestion(question.id, suggestion)}
                    className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'scale':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{question.labels[0]}</span>
              <span className="text-sm text-gray-600">{question.labels[1]}</span>
            </div>
            <div className="flex space-x-2">
              {Array.from({ length: question.scale }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handleResponse(question.id, num)}
                  className={`w-12 h-12 rounded-full border-2 font-semibold transition-all ${
                    value === num
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            {suggestion && !value && (
              <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-800">
                    💡 AI Suggestion: <strong>{suggestion}/10</strong>
                  </span>
                  <button
                    onClick={() => applySuggestion(question.id, suggestion)}
                    className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'text':
        return (
          <textarea
            value={value || ''}
            onChange={(e) => handleResponse(question.id, e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Please provide details..."
            required={question.required}
          />
        );

      default:
        return null;
    }
  };

  const currentQuestion = allQuestions[currentStep];
  const isLastQuestion = currentStep === allQuestions.length - 1;
  const canProceed = currentQuestion?.required ? responses[currentQuestion.id] : true;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{moduleData.title} Assessment</h2>
                <p className="opacity-90">Firebase-powered personalized ROI analysis</p>
              </div>
              {!completionData && (
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>
              )}
            </div>
            {/* Progress bar */}
            {!completionData && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Question {currentStep + 1} of {allQuestions.length}</span>
                  <span>{Math.round(((currentStep + 1) / allQuestions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / allQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {completionData ? (
              // Completion Results
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6"
              >
                <div className="bg-green-50 rounded-lg p-6">
                  <SafeIcon icon={FiCheck} className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Assessment Complete!</h3>
                  <p className="text-green-800">Your personalized ROI analysis is ready</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <SafeIcon icon={FiClock} className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900">{completionData.personalizedROI.weeklyHoursSaved}</div>
                    <div className="text-sm text-blue-700">Hours saved/week</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900">${completionData.personalizedROI.costSaved.toLocaleString()}</div>
                    <div className="text-sm text-green-700">Annual savings</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <SafeIcon icon={FiTarget} className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900">{Math.round(completionData.personalizedROI.confidenceScore * 100)}%</div>
                    <div className="text-sm text-purple-700">Confidence</div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  Automatically closing and saving your results...
                </div>
              </motion.div>
            ) : (
              // Question Interface
              <>
                {/* Enhanced benchmark insights */}
                {benchmarkData && responses.jobTitle && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <SafeIcon icon={FiStar} className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Insights for {responses.jobTitle}s</h4>
                        <p className="text-blue-800 text-sm">
                          Similar professionals save <strong>{benchmarkData.avg_hours_saved_weekly} hours/week</strong> with {moduleData.title} (satisfaction: {benchmarkData.median_satisfaction_score}/10)
                        </p>
                        {similarUsers.length > 0 && (
                          <div className="mt-2 flex items-center space-x-2">
                            <SafeIcon icon={FiUsers} className="w-4 h-4 text-purple-600" />
                            <span className="text-xs text-purple-700">
                              Based on {similarUsers.length} similar professionals
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Question */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {currentQuestion.question}
                  </h3>
                  {renderQuestion(currentQuestion)}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      currentStep === 0
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <SafeIcon icon={FiChevronLeft} className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {isLastQuestion ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed || isSubmitting}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                        canProceed && !isSubmitting
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <SafeIcon icon={FiCheck} className="w-4 h-4" />
                      <span>{isSubmitting ? 'Analyzing & Saving...' : 'Complete Assessment'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                        canProceed
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <span>Next</span>
                      <SafeIcon icon={FiChevronRight} className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionnaireModal;