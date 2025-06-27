import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import useCalculatorStore from '../../store/calculatorStore';

const { FiUsers, FiCode, FiZap, FiTrendingUp, FiShield, FiArrowRight } = FiIcons;

const modules = [
  {
    id: 'm365',
    name: 'Microsoft 365 Copilot',
    description: 'Boost productivity in Word, Excel, PowerPoint, Outlook, and Teams',
    icon: FiUsers,
    color: 'bg-blue-500'
  },
  {
    id: 'github',
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and development assistance',
    icon: FiCode,
    color: 'bg-gray-800'
  },
  {
    id: 'powerPlatform',
    name: 'Power Platform Copilot',
    description: 'Build apps, automate workflows, and analyze data faster',
    icon: FiZap,
    color: 'bg-purple-500'
  },
  {
    id: 'dynamics365',
    name: 'Dynamics 365 Copilot',
    description: 'Enhance CRM and ERP processes with AI insights',
    icon: FiTrendingUp,
    color: 'bg-green-500'
  },
  {
    id: 'security',
    name: 'Security Copilot',
    description: 'Accelerate threat detection and response',
    icon: FiShield,
    color: 'bg-red-500'
  }
];

const ModuleSelection = ({ onNext }) => {
  const { selectedModules, setSelectedModules } = useCalculatorStore();
  const [localSelection, setLocalSelection] = useState(selectedModules);

  const handleModuleToggle = (moduleId) => {
    setLocalSelection(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleNext = () => {
    if (localSelection.length === 0) return;
    
    setSelectedModules(localSelection);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Select Microsoft Copilot Products
        </h2>
        <p className="text-gray-600 text-lg">
          Choose the Copilot products your organization uses or plans to use
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {modules.map((module) => (
          <motion.div
            key={module.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200
              ${localSelection.includes(module.id)
                ? 'border-microsoft-blue bg-blue-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-gray-300'
              }
            `}
            onClick={() => handleModuleToggle(module.id)}
          >
            <div className="flex items-start space-x-4">
              <div className={`${module.color} p-3 rounded-lg`}>
                <SafeIcon icon={module.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {module.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {module.description}
                </p>
              </div>
            </div>
            
            {localSelection.includes(module.id) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4 w-6 h-6 bg-microsoft-blue rounded-full flex items-center justify-center"
              >
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 text-white rotate-45" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleNext}
          disabled={localSelection.length === 0}
          className={`
            px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200
            ${localSelection.length > 0
              ? 'bg-microsoft-blue hover:bg-blue-600 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 cursor-not-allowed'
            }
          `}
        >
          Continue with {localSelection.length} Product{localSelection.length !== 1 ? 's' : ''}
        </button>
      </div>
    </motion.div>
  );
};

export default ModuleSelection;