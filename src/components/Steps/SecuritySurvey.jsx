import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import useCalculatorStore from '../../store/calculatorStore';

const { FiShield, FiUsers, FiAlertTriangle, FiEye, FiCheckCircle } = FiIcons;

const SecuritySurvey = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useCalculatorStore();
  const [data, setData] = useState(formData.security);

  const handleInputChange = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    updateFormData('security', newData);
  };

  const handleNext = () => {
    if (!data.securityAnalysts || !data.incidentsPerMonth || !data.threatsPerWeek || !data.complianceChecks) {
      alert('Please fill in all required fields to get accurate ROI calculations');
      return;
    }
    onNext();
  };

  const questions = [
    {
      id: 'securityAnalysts',
      label: 'Number of security analysts',
      icon: FiUsers,
      type: 'number',
      placeholder: '5',
      description: 'Security professionals using Copilot for Security',
      required: true
    },
    {
      id: 'incidentsPerMonth',
      label: 'Security incidents handled per analyst per month',
      icon: FiAlertTriangle,
      type: 'number',
      placeholder: '15',
      description: 'Security incidents investigated and resolved',
      required: true
    },
    {
      id: 'threatsPerWeek',
      label: 'Threats analyzed per analyst per week',
      icon: FiEye,
      type: 'number',
      placeholder: '10',
      description: 'Threat intelligence and analysis tasks',
      required: true
    },
    {
      id: 'complianceChecks',
      label: 'Compliance checks per analyst per month',
      icon: FiCheckCircle,
      type: 'number',
      placeholder: '8',
      description: 'Regulatory compliance and audit tasks',
      required: true
    },
    {
      id: 'avgHourlyRate',
      label: 'Average security analyst hourly rate (USD)',
      icon: FiShield,
      type: 'number',
      placeholder: '80',
      description: 'Used for cost savings calculation (optional - defaults to $80)',
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
          <div className="bg-red-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Security Copilot
          </h2>
          <p className="text-gray-600">
            Help us understand your security operations and workload
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
            className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SecuritySurvey;