import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import useCalculatorStore from '../../store/calculatorStore';

const { FiCode, FiUsers, FiGitPullRequest, FiBug, FiZap } = FiIcons;

const GitHubSurvey = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useCalculatorStore();
  const [data, setData] = useState(formData.github);

  const handleInputChange = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    updateFormData('github', newData);
  };

  const handleNext = () => {
    if (!data.developers || !data.codeReviewsPerWeek || !data.bugsPerMonth || !data.featuresPerMonth) {
      alert('Please fill in all required fields to get accurate ROI calculations');
      return;
    }
    onNext();
  };

  const questions = [
    {
      id: 'developers',
      label: 'Number of developers using GitHub Copilot',
      icon: FiUsers,
      type: 'number',
      placeholder: '20',
      description: 'Active developers with Copilot licenses',
      required: true
    },
    {
      id: 'codeReviewsPerWeek',
      label: 'Code reviews per developer per week',
      icon: FiGitPullRequest,
      type: 'number',
      placeholder: '5',
      description: 'Pull requests reviewed including feedback',
      required: true
    },
    {
      id: 'bugsPerMonth',
      label: 'Bugs fixed per developer per month',
      icon: FiBug,
      type: 'number',
      placeholder: '8',
      description: 'Bug tickets resolved and tested',
      required: true
    },
    {
      id: 'featuresPerMonth',
      label: 'New features developed per developer per month',
      icon: FiZap,
      type: 'number',
      placeholder: '3',
      description: 'Complete feature implementations',
      required: true
    },
    {
      id: 'avgHourlyRate',
      label: 'Average developer hourly rate (USD)',
      icon: FiCode,
      type: 'number',
      placeholder: '75',
      description: 'Used for cost savings calculation (optional - defaults to $75)',
      required: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="bg-gray-800 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiCode} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            GitHub Copilot Development
          </h2>
          <p className="text-gray-600">
            Tell us about your development workflow and productivity
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {question.label} {question.required && <span className="text-red-500">*</span>}
              </label>
              <div className="relative">
                <SafeIcon icon={question.icon} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={question.type}
                  value={data[question.id] || ''}
                  onChange={(e) => handleInputChange(
                    question.id,
                    question.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value
                  )}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder={question.placeholder}
                  min={question.type === 'number' ? '0' : undefined}
                  required={question.required}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {question.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubSurvey;