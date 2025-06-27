import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/Layout/Header';
import FloatingROIButton from './components/Layout/FloatingROIButton';
import AnalyticsTracker from './components/Analytics/AnalyticsTracker';

// Pages
import HomePage from './pages/HomePage';
import Microsoft365CopilotPage from './pages/Microsoft365CopilotPage';
import GitHubCopilotPage from './pages/GitHubCopilotPage';
import PowerPlatformCopilotPage from './pages/PowerPlatformCopilotPage';
import Dynamics365CopilotPage from './pages/Dynamics365CopilotPage';
import SecurityCopilotPage from './pages/SecurityCopilotPage';
import StatsPage from './pages/StatsPage';
import CalculatorApp from './components/Calculator/CalculatorApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnalyticsTracker />
      <Header />
      <FloatingROIButton />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/microsoft-365-copilot" element={<Microsoft365CopilotPage />} />
            <Route path="/github-copilot" element={<GitHubCopilotPage />} />
            <Route path="/power-platform-copilot" element={<PowerPlatformCopilotPage />} />
            <Route path="/dynamics-365-copilot" element={<Dynamics365CopilotPage />} />
            <Route path="/security-copilot" element={<SecurityCopilotPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/calculator" element={<CalculatorApp />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Microsoft Copilot ROI Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Powered by Data. Driven by Results.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Join 1,000+ businesses improving ROI with our Copilots.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/m365-summit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-microsoft-blue hover:text-blue-600 transition-colors"
                >
                  👨‍💻 Follow Mirko
                </a>
                <a
                  href="https://www.linkedin.com/school/m365-show/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-microsoft-blue hover:text-blue-600 transition-colors"
                >
                  🏢 Follow M365 Show
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/calculator" className="text-gray-600 hover:text-microsoft-blue transition-colors">
                    ROI Calculator
                  </a>
                </li>
                <li>
                  <a href="/stats" className="text-gray-600 hover:text-microsoft-blue transition-colors font-medium">
                    📊 Community Stats
                  </a>
                </li>
                <li>
                  <a href="/microsoft-365-copilot" className="text-gray-600 hover:text-microsoft-blue transition-colors">
                    M365 Copilot
                  </a>
                </li>
                <li>
                  <a href="/github-copilot" className="text-gray-600 hover:text-microsoft-blue transition-colors">
                    GitHub Copilot
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://m365.show"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-microsoft-blue transition-colors"
                  >
                    M365 Show
                  </a>
                </li>
                <li>
                  <a href="/power-platform-copilot" className="text-gray-600 hover:text-microsoft-blue transition-colors">
                    Power Platform
                  </a>
                </li>
                <li>
                  <a href="/dynamics-365-copilot" className="text-gray-600 hover:text-microsoft-blue transition-colors">
                    Dynamics 365
                  </a>
                </li>
                <li>
                  <a href="/security-copilot" className="text-gray-600 hover:text-microsoft-blue transition-colors">
                    Security Copilot
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              Microsoft Copilot ROI Calculator - Built with ❤️ for productivity
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Helping organizations worldwide discover their AI potential
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;