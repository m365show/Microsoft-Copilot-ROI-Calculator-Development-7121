import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import QuestionnaireModal from './QuestionnaireModal';

const { FiClipboard, FiTrendingUp, FiUsers } = FiIcons;

const QuestionnaireButton = ({ moduleData, variant = 'primary', size = 'default' }) => {
  const [showModal, setShowModal] = useState(false);
  const [completionData, setCompletionData] = useState(null);

  const handleComplete = (data) => {
    setCompletionData(data);
    // You can add additional logic here, like triggering analytics
    console.log('Questionnaire completed:', data);
  };

  const buttonSizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const buttonVariants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
    accent: `bg-${moduleData.color} text-white hover:opacity-90`
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowModal(true)}
        className={`
          ${buttonSizes[size]} 
          ${buttonVariants[variant]}
          rounded-lg font-semibold transition-all duration-200 
          inline-flex items-center justify-center space-x-2 
          shadow-lg hover:shadow-xl
        `}
      >
        <SafeIcon icon={FiClipboard} className="w-4 h-4" />
        <span>Quick Assessment</span>
        {moduleData.estimatedTime && (
          <span className="text-xs opacity-75">({moduleData.estimatedTime})</span>
        )}
      </motion.button>

      {completionData && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-start space-x-3">
            <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-green-900">Assessment Complete!</h4>
              <p className="text-green-800 text-sm">
                Based on your responses, you could potentially save{' '}
                <strong>
                  {completionData.benchmarkData?.avg_hours_saved_weekly || '5-10'} hours per week
                </strong>{' '}
                with {moduleData.title}.
              </p>
              <button
                onClick={() => setCompletionData(null)}
                className="text-green-600 text-sm hover:text-green-700 mt-1"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <QuestionnaireModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        moduleData={moduleData}
        onComplete={handleComplete}
      />
    </>
  );
};

export default QuestionnaireButton;