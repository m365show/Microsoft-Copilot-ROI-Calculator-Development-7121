import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/Layout/Header';
import FloatingROIButton from './components/Layout/FloatingROIButton';
import AnalyticsTracker from './components/Analytics/AnalyticsTracker';
import FirebaseAnalyticsTracker from './components/Analytics/FirebaseAnalyticsTracker';

// Pages
import HomePage from './pages/HomePage';
import Microsoft365CopilotPage from './pages/Microsoft365CopilotPage';
import GitHubCopilotPage from './pages/GitHubCopilotPage';
import PowerPlatformCopilotPage from './pages/PowerPlatformCopilotPage';
import Dynamics365CopilotPage from './pages/Dynamics365CopilotPage';
import SecurityCopilotPage from './pages/SecurityCopilotPage';
import StatsPage from './pages/StatsPage';
import FirebaseStatsPage from './pages/FirebaseStatsPage';
import CalculatorApp from './components/Calculator/CalculatorApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dual Analytics Tracking */}
      <AnalyticsTracker />
      <FirebaseAnalyticsTracker />
      
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
            <Route path="/firebase-stats" element={<FirebaseStatsPage />} />
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
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs">🔥</span>
                  <span className="text-xs text-orange-600 font-medium">Firebase Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">📊</span>
                  <span className="text-xs text-blue-600 font-medium">Supabase Analytics</span>
                </div>
              </div>
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
                  <Link 
                    to="/calculator" 
                    className="text-gray-600 hover:text-microsoft-blue transition-colors"
                  >
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/stats" 
                    className="text-gray-600 hover:text-microsoft-blue transition-colors font-medium"
                  >
                    📊 Community Stats
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/firebase-stats" 
                    className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                  >
                    🔥 Firebase Analytics
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/microsoft-365-copilot" 
                    className="text-gray-600 hover:text-microsoft-blue transition-colors"
                  >
                    M365 Copilot
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/github-copilot" 
                    className="text-gray-600 hover:text-microsoft-blue transition-colors"
                  >
                    GitHub Copilot
                  </Link>
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
                  <Link 
                    to="/power-platform-copilot" 
                    className="text-gray-600 hover:text-microsoft-blue transition-colors"
                  >
                    Power Platform
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/dynamics-365-copilot" 
                    className="text-gray-600 hover:text-microsoft-blue transition-colors"
                  >
                    Dynamics 365
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/security-copilot" 
                    className="text-gray-600 hover:text-microsoft-blue transition-colors"
                  >
                    Security Copilot
                  </Link>
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
            <div className="mt-2 text-xs text-gray-400">
              🔥 Firebase Integration • 📊 Supabase Analytics • ⚡ Real-time Insights
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;