import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiAward } = FiIcons;

const Badge = ({ badge, score }) => {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Platinum': return 'from-gray-300 to-gray-100';
      case 'Gold': return 'from-yellow-400 to-yellow-200';
      case 'Silver': return 'from-gray-400 to-gray-200';
      default: return 'from-amber-600 to-amber-400';
    }
  };

  const getBadgeIcon = (badge) => {
    return badge === 'Platinum' ? '💎' : 
           badge === 'Gold' ? '🥇' : 
           badge === 'Silver' ? '🥈' : '🥉';
  };

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className={`w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br ${getBadgeColor(badge)} shadow-2xl flex items-center justify-center relative`}
      >
        <div className="text-center">
          <div className="text-6xl mb-2">
            {getBadgeIcon(badge)}
          </div>
          <div className="text-xl font-bold text-gray-800">
            {badge}
          </div>
          <div className="text-sm text-gray-600">
            Efficiency Badge
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-2 border-dashed border-gray-400 rounded-full opacity-30"
        />
      </motion.div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <SafeIcon icon={FiAward} className="w-5 h-5 text-gray-600" />
          <span className="font-semibold text-gray-700">ROI Score</span>
        </div>
        <div className="text-3xl font-bold text-gray-900">
          {Math.round(score)}/100
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ delay: 1, duration: 1 }}
            className="bg-microsoft-blue h-2 rounded-full"
          />
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>
          Your organization shows <strong>{badge.toLowerCase()}</strong> level efficiency 
          potential with Microsoft Copilot tools.
        </p>
      </div>
    </div>
  );
};

export default Badge;