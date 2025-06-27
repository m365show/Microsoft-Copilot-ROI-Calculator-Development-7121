import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import useCalculatorStore from '../../store/calculatorStore';

const { FiUsers, FiMail, FiVideo, FiFileText, FiPresentation } = FiIcons;

const M365Survey = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useCalculatorStore();
  const [data, setData] = useState(formData.m365);

  const handleInputChange = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    updateFormData('m365', newData);
  };

  const handleNext = () => {
    if (!data.employees || !data.emailsPerDay || !data.meetingsPerWeek || !data.documentsPerWeek || !data.presentationsPerMonth) {
      alert('Please fill in all fields to get accurate ROI calculations');
      return;
    }
    onNext();
  };

  const questions = [
    {
      id: 'employees',
      label: 'Number of Microsoft 365 users',
      icon: FiUsers,
      type: 'number',
      placeholder: '100',
      description: 'Total users with M365 licenses',
      required: true
    },
    {
      id: 'emailsPerDay',
      label: 'Average emails processed per user per day',
      icon: FiMail,
      type: 'number',
      placeholder: '25',
      description: 'Including reading, writing, and organizing emails',
      required: true
    },
    {
      id: 'meetingsPerWeek',
      label: 'Average meetings per user per week',
      icon: FiVideo,
      type: 'number',
      placeholder: '8',
      description: 'Teams meetings requiring preparation or follow-up',
      required: true
    },
    {
      id: 'documentsPerWeek',
      label: 'Documents created/edited per user per week',
      icon: FiFileText,
      type: 'number',
      placeholder: '5',
      description: 'Word docs, Excel files, collaborative documents',
      required: true
    },
    {
      id: 'presentationsPerMonth',
      label: 'Presentations created per user per month',
      icon: FiPresentation,
      type: 'number',
      placeholder: '2',
      description: 'PowerPoint presentations and slide decks',
      required: true
    },
    {
      id: 'avgHourlyRate',
      label: 'Average user hourly rate (USD)',
      icon: FiUsers,
      type: 'number',
      placeholder: '50',
      description: 'Used for cost savings calculation (optional - defaults to $50)',
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
          <div className="bg-blue-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Microsoft 365 Copilot Usage
          </h2>
          <p className="text-gray-600">
            Help us understand your M365 productivity patterns
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default M365Survey;