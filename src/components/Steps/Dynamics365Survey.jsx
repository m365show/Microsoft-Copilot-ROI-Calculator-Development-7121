import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import useCalculatorStore from '../../store/calculatorStore';

const { FiTrendingUp, FiUsers, FiTarget, FiMessageCircle, FiBarChart3 } = FiIcons;

const Dynamics365Survey = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useCalculatorStore();
  const [data, setData] = useState(formData.dynamics365);

  const handleInputChange = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    updateFormData('dynamics365', newData);
  };

  const handleNext = () => {
    if (!data.salesReps || !data.leadsPerWeek || !data.customerInteractions || !data.reportsPerMonth) {
      alert('Please fill in all required fields to get accurate ROI calculations');
      return;
    }
    onNext();
  };

  const questions = [
    {
      id: 'salesReps',
      label: 'Number of Dynamics 365 users',
      icon: FiUsers,
      type: 'number',
      placeholder: '30',
      description: 'Sales reps, customer service agents, and other CRM users',
      required: true
    },
    {
      id: 'leadsPerWeek',
      label: 'Leads processed per user per week',
      icon: FiTarget,
      type: 'number',
      placeholder: '20',
      description: 'New leads qualified and entered into system',
      required: true
    },
    {
      id: 'customerInteractions',
      label: 'Customer interactions per user per week',
      icon: FiMessageCircle,
      type: 'number',
      placeholder: '25',
      description: 'Calls, emails, meetings logged in CRM',
      required: true
    },
    {
      id: 'reportsPerMonth',
      label: 'Reports generated per user per month',
      icon: FiBarChart3,
      type: 'number',
      placeholder: '4',
      description: 'Sales reports, dashboards, and analytics',
      required: true
    },
    {
      id: 'avgHourlyRate',
      label: 'Average user hourly rate (USD)',
      icon: FiTrendingUp,
      type: 'number',
      placeholder: '65',
      description: 'Used for cost savings calculation (optional - defaults to $65)',
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
          <div className="bg-green-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dynamics 365 Copilot
          </h2>
          <p className="text-gray-600">
            Tell us about your CRM and business process usage
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
            className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Dynamics365Survey;