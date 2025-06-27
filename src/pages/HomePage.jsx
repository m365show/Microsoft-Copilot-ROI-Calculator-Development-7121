import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import InteractiveCopilots from '../components/Home/InteractiveCopilots';

const { FiArrowRight, FiTarget, FiClock, FiDollarSign, FiCheckCircle } = FiIcons;

const HomePage = () => {
  const stats = [
    { label: 'Organizations Analyzed', value: '1,000+', icon: FiTarget },
    { label: 'Hours Saved Annually', value: '125K+', icon: FiClock },
    { label: 'Cost Savings Calculated', value: '$8.7M+', icon: FiDollarSign },
    { label: 'ROI Reports Generated', value: '1,247+', icon: FiCheckCircle }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Microsoft Copilot ROI Calculator",
    "description": "Calculate your organization's ROI with Microsoft Copilot tools. Get detailed reports showing time savings, cost reductions, and productivity gains across M365, GitHub, Power Platform, Dynamics 365, and Security Copilot.",
    "url": "https://copilot-roi-calculator.com/",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "M365 Show",
      "url": "https://m365.show",
      "founder": {
        "@type": "Person",
        "name": "Mirko Colemberg",
        "url": "https://www.linkedin.com/in/m365-summit/"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    },
    "featureList": [
      "Microsoft 365 Copilot ROI Analysis",
      "GitHub Copilot Productivity Calculation",
      "Power Platform Cost Savings Assessment",
      "Dynamics 365 Efficiency Metrics",
      "Security Copilot Value Analysis",
      "Detailed PDF and PowerPoint Reports",
      "Interactive ROI Dashboard"
    ]
  };

  return (
    <>
      <SEOHead 
        title="Microsoft Copilot ROI Calculator - Calculate Your AI Productivity Savings"
        description="Calculate your organization's ROI with Microsoft Copilot tools. Get detailed reports showing time savings, cost reductions, and productivity gains across M365, GitHub, Power Platform, Dynamics 365, and Security Copilot."
        keywords="Microsoft Copilot ROI Calculator, AI Productivity Tools, M365 Copilot, GitHub Copilot, Power Platform Copilot, Dynamics 365, Security Copilot, Business ROI Analysis, Cost Savings Calculator"
        canonical="https://copilot-roi-calculator.com/"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Calculate Your{' '}
                <span className="text-microsoft-blue">Microsoft Copilot</span>{' '}
                ROI
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                Discover how much time and money your organization can save with Microsoft Copilot tools. 
                Get detailed ROI analysis across M365, GitHub, Power Platform, Dynamics 365, and Security Copilot.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link
                  to="/calculator"
                  className="bg-microsoft-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Start ROI Calculator</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/stats"
                  className="border-2 border-microsoft-blue text-microsoft-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-microsoft-blue hover:text-white transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>📊 View Community Stats</span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md mb-2 inline-block">
                      <SafeIcon icon={stat.icon} className="w-8 h-8 text-microsoft-blue mx-auto" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Copilots Section */}
        <InteractiveCopilots />

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Simple steps to calculate your ROI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Select Products',
                  description: 'Choose which Microsoft Copilot products your organization uses or plans to use.'
                },
                {
                  step: '2',
                  title: 'Input Data',
                  description: 'Provide information about your organization size, workflows, and current productivity metrics.'
                },
                {
                  step: '3',
                  title: 'Get Results',
                  description: 'Receive detailed ROI analysis with time savings, cost reductions, and implementation recommendations.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-microsoft-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Insights */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Insights</h2>
              <p className="text-xl text-gray-600">Real data from thousands of assessments</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 rounded-xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-microsoft-blue mb-2">68%</div>
                <div className="text-gray-800 font-semibold mb-2">Email Management</div>
                <div className="text-gray-600 text-sm">Top productivity challenge identified</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-green-50 rounded-xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">$4,200</div>
                <div className="text-gray-800 font-semibold mb-2">Average ROI</div>
                <div className="text-gray-600 text-sm">Annual savings per user</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-purple-50 rounded-xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">8.5</div>
                <div className="text-gray-800 font-semibold mb-2">Hours Saved</div>
                <div className="text-gray-600 text-sm">Average weekly time savings</div>
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/stats"
                className="text-microsoft-blue hover:text-blue-600 font-semibold inline-flex items-center space-x-2"
              >
                <span>View detailed community statistics</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-microsoft-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Calculate Your ROI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that have discovered their potential savings with Microsoft Copilot tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator"
                className="bg-white text-microsoft-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your ROI Analysis</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              
              <a
                href="https://m365.show"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-microsoft-blue transition-colors"
              >
                Learn More at M365 Show
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;