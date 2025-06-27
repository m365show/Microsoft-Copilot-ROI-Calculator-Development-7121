import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const progress = total > 0 ? (current / total) * 100 : 0;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <motion.div
        className="bg-microsoft-blue h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Step {current} of {total}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;