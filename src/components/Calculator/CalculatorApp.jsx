import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Layout/Header';
import ProgressBar from '../Layout/ProgressBar';
import ModuleSelection from '../Steps/ModuleSelection';
import CompanyInfo from '../Steps/CompanyInfo';
import M365Survey from '../Steps/M365Survey';
import GitHubSurvey from '../Steps/GitHubSurvey';
import PowerPlatformSurvey from '../Steps/PowerPlatformSurvey';
import Dynamics365Survey from '../Steps/Dynamics365Survey';
import SecuritySurvey from '../Steps/SecuritySurvey';
import ResultsDashboard from '../Results/ResultsDashboard';
import EmbedInfo from '../EmbedInfo';
import useCalculatorStore from '../../store/calculatorStore';
import SEOHead from '../SEO/SEOHead';

const stepComponents = {
  m365: M365Survey,
  github: GitHubSurvey,
  powerPlatform: PowerPlatformSurvey,
  dynamics365: Dynamics365Survey,
  security: SecuritySurvey
};

function CalculatorApp() {
  const { currentStep, setCurrentStep, selectedModules, totalSteps, reset } = useCalculatorStore();
  const [showEmbed, setShowEmbed] = useState(false);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleRestart = () => {
    reset();
    setShowEmbed(false);
  };

  const renderCurrentStep = () => {
    // Module selection (Step 0)
    if (currentStep === 0) {
      return <ModuleSelection onNext={handleNext} />;
    }

    // Company info (Step 1)
    if (currentStep === 1) {
      return <CompanyInfo onNext={handleNext} onBack={handleBack} />;
    }

    // Module surveys (Steps 2 to selectedModules.length + 1)
    if (currentStep >= 2 && currentStep <= selectedModules.length + 1) {
      const moduleIndex = currentStep - 2;
      const moduleId = selectedModules[moduleIndex];
      const StepComponent = stepComponents[moduleId];
      
      return (
        <StepComponent
          key={moduleId}
          onNext={handleNext}
          onBack={handleBack}
        />
      );
    }

    // Results (Final step)
    if (currentStep === selectedModules.length + 2) {
      return <ResultsDashboard onRestart={handleRestart} />;
    }

    return null;
  };

  // Calculate total steps: Module Selection (1) + Company Info (1) + Selected Modules + Results (1)
  const calculatedTotalSteps = selectedModules.length > 0 ? selectedModules.length + 3 : 1;
  const isCompleted = currentStep === selectedModules.length + 2;
  const showProgress = selectedModules.length > 0 && !isCompleted;

  return (
    <>
      <SEOHead 
        title="Microsoft Copilot ROI Calculator - Start Your Analysis"
        description="Calculate your organization's ROI with Microsoft Copilot tools. Interactive calculator for M365, GitHub, Power Platform, Dynamics 365, and Security Copilot."
        keywords="Microsoft Copilot ROI Calculator, AI productivity calculator, business ROI analysis"
        canonical="https://copilot-roi-calculator.com/calculator"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {showProgress && (
            <div className="max-w-2xl mx-auto mb-8">
              <ProgressBar 
                current={currentStep + 1} 
                total={calculatedTotalSteps} 
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="min-h-96"
            >
              {renderCurrentStep()}
            </motion.div>
          </AnimatePresence>

          {isCompleted && (
            <>
              <EmbedInfo />
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowEmbed(!showEmbed)}
                  className="text-microsoft-blue hover:text-blue-600 text-sm font-medium"
                >
                  {showEmbed ? 'Hide' : 'Show'} Embed Information
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CalculatorApp;