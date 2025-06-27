import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import useCalculatorStore from '../../store/calculatorStore';

const { FiBuilding, FiMapPin, FiUsers, FiDollarSign } = FiIcons;

const CompanyInfo = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useCalculatorStore();
  const [data, setData] = useState(formData.company);

  const handleInputChange = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    updateFormData('company', newData);
  };

  const handleNext = () => {
    if (!data.companyName || !data.industry || !data.companySize || !data.location) {
      alert('Please fill in all required fields (Company Name, Industry, Company Size, and Location)');
      return;
    }
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="bg-microsoft-blue p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiBuilding} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Company Information
          </h2>
          <p className="text-gray-600">
            Tell us about your organization to personalize your ROI calculation
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <div className="relative">
              <SafeIcon icon={FiBuilding} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={data.companyName || ''}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-microsoft-blue focus:border-transparent"
                placeholder="Enter your company name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry *
            </label>
            <select
              value={data.industry || ''}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-microsoft-blue focus:border-transparent"
              required
            >
              <option value="">Select your industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Financial Services</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="education">Education</option>
              <option value="government">Government</option>
              <option value="consulting">Consulting</option>
              <option value="construction">Construction</option>
              <option value="media">Media & Entertainment</option>
              <option value="nonprofit">Non-Profit</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size *
            </label>
            <div className="relative">
              <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={data.companySize || ''}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-microsoft-blue focus:border-transparent"
                required
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1,000 employees</option>
                <option value="1001-5000">1,001-5,000 employees</option>
                <option value="5000+">5,000+ employees</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <div className="relative">
              <SafeIcon icon={FiMapPin} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={data.location || ''}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-microsoft-blue focus:border-transparent"
                placeholder="e.g., New York, USA"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Hourly Rate (USD)
            </label>
            <div className="relative">
              <SafeIcon icon={FiDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={data.avgHourlyRate || ''}
                onChange={(e) => handleInputChange('avgHourlyRate', parseFloat(e.target.value) || 0)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-microsoft-blue focus:border-transparent"
                placeholder="50"
                min="0"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Used to calculate cost savings (default: $50/hour)
            </p>
          </div>
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
            className={`
              px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200
              ${data.companyName && data.industry && data.companySize && data.location
                ? 'bg-microsoft-blue hover:bg-blue-600'
                : 'bg-gray-300 cursor-not-allowed'
              }
            `}
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyInfo;