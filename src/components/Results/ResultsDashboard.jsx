import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import useCalculatorStore from '../../store/calculatorStore';
import ShareButtons from './ShareButtons';
import DownloadButtons from './DownloadButtons';
import ROIChart from './ROIChart';
import Badge from './Badge';

const { FiClock, FiDollarSign, FiTrendingUp, FiAward } = FiIcons;

const ResultsDashboard = ({ onRestart }) => {
  const { results, calculateROI, formData } = useCalculatorStore();

  useEffect(() => {
    if (!results) {
      calculateROI();
    }
  }, [results, calculateROI]);

  if (!results) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-microsoft-blue"></div>
      </div>
    );
  }

  const { total } = results;
  const companyName = formData.company?.companyName || 'Your Organization';

  // Format currency without decimals
  const formatCurrency = (amount) => {
    return Math.floor(amount).toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      {/* Social Share Section - Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            🎉 Share Your Amazing ROI Results!
          </h3>
          <p className="text-gray-600">
            Let your network know how much {companyName} could save with Microsoft Copilot
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Share on Social Media</h4>
            <ShareButtons 
              companyName={companyName} 
              costSaved={total.costSaved} 
              badge={total.badge} 
            />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow the Creators</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/m365-summit/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>👨‍💻</span>
                <span>Follow Mirko Colemberg</span>
              </a>
              <a
                href="https://www.linkedin.com/school/m365-show/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>🏢</span>
                <span>Follow M365 Show</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Microsoft Copilot ROI Results
        </h1>
        <p className="text-xl text-gray-600">
          {companyName} could save significant time and money with Microsoft Copilot
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiClock} className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {total.timeSaved.toLocaleString()}
          </h3>
          <p className="text-gray-600">Hours Saved Annually</p>
          <div className="mt-2 text-xs text-gray-500">
            <p>{Math.floor(total.timeSaved / 12).toLocaleString()} hours/month</p>
            <p>{(total.timeSaved / 365).toFixed(1)} hours/day</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ${formatCurrency(total.costSaved)}
          </h3>
          <p className="text-gray-600">Cost Savings Annually</p>
          <div className="mt-2 text-xs text-gray-500">
            <p>${formatCurrency(total.costSaved / 12)}/month</p>
            <p>${formatCurrency(total.costSaved / 365)}/day</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {Math.round(total.score)}
          </h3>
          <p className="text-gray-600">ROI Score</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <SafeIcon icon={FiAward} className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {total.badge}
          </h3>
          <p className="text-gray-600">Efficiency Badge</p>
        </motion.div>
      </div>

      {/* Charts and Detailed Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            ROI Breakdown by Product
          </h3>
          <ROIChart results={results} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Your Copilot Efficiency Badge
          </h3>
          <Badge badge={total.badge} score={total.score} />
        </motion.div>
      </div>

      {/* Download Reports Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get Your Detailed Reports
          </h3>
          <p className="text-gray-600">
            Download comprehensive PDF and PowerPoint reports with detailed analysis, 
            license costs, time savings breakdowns, and implementation recommendations
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <DownloadButtons results={results} formData={formData} />
        </div>
      </motion.div>

      {/* Restart Button */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className="px-8 py-3 border-2 border-microsoft-blue text-microsoft-blue rounded-lg hover:bg-microsoft-blue hover:text-white transition-colors font-semibold"
        >
          Calculate Another ROI
        </button>
      </div>
    </motion.div>
  );
};

export default ResultsDashboard;