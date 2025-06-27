import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import QuestionnaireButton from '../components/Questionnaire/QuestionnaireButton';
import { getModuleData } from '../data/questionnaireData';

const { FiUsers, FiMail, FiFileText, FiVideo, FiPresentation, FiArrowRight, FiCheckCircle, FiClock, FiDollarSign, FiTrendingUp, FiBarChart } = FiIcons;

const Microsoft365CopilotPage = () => {
  const moduleData = getModuleData('m365');

  const features = [
    {
      icon: FiMail,
      title: 'Smart Email Management',
      description: 'Copilot helps you draft, summarize, and manage emails 30% faster with AI-powered suggestions.',
      benefits: ['Auto-draft responses', 'Email summarization', 'Priority inbox management', 'Meeting scheduling assistance']
    },
    {
      icon: FiFileText,
      title: 'Document Creation & Editing',
      description: 'Create professional documents, reports, and content with AI assistance in Word.',
      benefits: ['Content generation', 'Writing suggestions', 'Format optimization', 'Research integration']
    },
    {
      icon: FiPresentation,
      title: 'PowerPoint Enhancement',
      description: 'Build compelling presentations with AI-generated content, designs, and speaker notes.',
      benefits: ['Slide generation', 'Design suggestions', 'Content optimization', 'Speaker notes creation']
    },
    {
      icon: FiBarChart,
      title: 'Excel Data Analysis',
      description: 'Analyze data, create formulas, and generate insights with natural language commands.',
      benefits: ['Formula assistance', 'Data visualization', 'Trend analysis', 'Report automation']
    },
    {
      icon: FiVideo,
      title: 'Teams Collaboration',
      description: 'Enhance meetings with real-time transcription, summaries, and action item tracking.',
      benefits: ['Meeting summaries', 'Action item extraction', 'Real-time transcription', 'Follow-up automation']
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Sales Team',
      scenario: '500 employees using M365 daily',
      timeSaved: '2,600 hours/year',
      costSaved: '$130,000/year',
      roi: '361%',
      details: 'Automated proposal generation, email management, and meeting summaries'
    },
    {
      title: 'Marketing Department',
      scenario: '50 marketing professionals',
      timeSaved: '1,200 hours/year',
      costSaved: '$75,000/year',
      roi: '416%',
      details: 'Content creation, campaign planning, and performance reporting'
    },
    {
      title: 'Legal Firm',
      scenario: '25 lawyers and paralegals',
      timeSaved: '800 hours/year',
      costSaved: '$120,000/year',
      roi: '1,233%',
      details: 'Document review, contract analysis, and legal research'
    }
  ];

  const pricingInfo = {
    monthly: 30,
    annual: 360,
    features: [
      'AI-powered assistance across all M365 apps',
      'Real-time collaboration enhancement',
      'Advanced data analysis capabilities',
      'Meeting intelligence and summaries',
      'Enterprise-grade security and compliance',
      '24/7 Microsoft support'
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Microsoft 365 Copilot",
    "description": "AI-powered productivity tool that transforms how you work in Word, Excel, PowerPoint, Outlook, and Teams with intelligent assistance and automation.",
    "brand": {
      "@type": "Brand",
      "name": "Microsoft"
    },
    "offers": {
      "@type": "Offer",
      "price": "30",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "30",
        "priceCurrency": "USD",
        "unitText": "per user per month"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "15000"
    },
    "applicationCategory": "ProductivitySoftware"
  };

  return (
    <>
      <SEOHead 
        title="Microsoft 365 Copilot ROI Calculator - Calculate M365 AI Productivity Savings"
        description="Calculate ROI for Microsoft 365 Copilot. Discover how AI-powered assistance in Word, Excel, PowerPoint, Outlook, and Teams can save your organization time and money. Get detailed analysis and reports."
        keywords="Microsoft 365 Copilot, M365 Copilot ROI, Office 365 AI, Word Copilot, Excel Copilot, PowerPoint AI, Teams Copilot, Outlook AI assistant, productivity calculator"
        canonical="https://copilot-roi-calculator.com/microsoft-365-copilot"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Microsoft 365 Copilot</h1>
                    <p className="text-blue-600 font-semibold">$30/user/month</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Transform Productivity Across Your Entire M365 Suite
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Microsoft 365 Copilot integrates seamlessly with Word, Excel, PowerPoint, Outlook, and Teams, 
                  providing AI-powered assistance that can increase productivity by up to 30% while reducing 
                  time spent on routine tasks.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-blue-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">30%</div>
                    <div className="text-sm text-gray-600">Faster Task Completion</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$2,600</div>
                    <div className="text-sm text-gray-600">Avg. Annual Savings/User</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    to="/calculator?product=m365"
                    className="bg-microsoft-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Calculate M365 ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                  
                  <a
                    href="https://m365.show"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-microsoft-blue text-microsoft-blue px-6 py-3 rounded-lg font-semibold hover:bg-microsoft-blue hover:text-white transition-colors text-center"
                  >
                    Learn More at M365 Show
                  </a>
                </div>

                {/* Questionnaire Button */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Get Personalized Insights</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    Take our quick assessment to see how M365 Copilot could impact your specific role and workflow.
                  </p>
                  <QuestionnaireButton 
                    moduleData={moduleData} 
                    variant="secondary" 
                    size="default"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: FiMail, label: 'Outlook', color: 'bg-blue-500' },
                      { icon: FiFileText, label: 'Word', color: 'bg-blue-600' },
                      { icon: FiBarChart, label: 'Excel', color: 'bg-green-600' },
                      { icon: FiPresentation, label: 'PowerPoint', color: 'bg-orange-500' }
                    ].map((app, index) => (
                      <motion.div
                        key={app.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${app.color} rounded-lg p-6 text-white text-center`}
                      >
                        <SafeIcon icon={app.icon} className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold">{app.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <SafeIcon icon={FiVideo} className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">+ Microsoft Teams</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Features & Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Discover how M365 Copilot enhances every aspect of your daily workflow
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                      <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real-World ROI Examples
              </h2>
              <p className="text-xl text-gray-600">
                See how organizations like yours are saving time and money
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.scenario}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Time Saved</span>
                      <span className="font-semibold text-blue-600">{useCase.timeSaved}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cost Saved</span>
                      <span className="font-semibold text-green-600">{useCase.costSaved}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">ROI</span>
                      <span className="font-bold text-lg text-gray-900">{useCase.roi}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 border-t pt-4">{useCase.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pricing & Investment
              </h2>
              <p className="text-xl text-gray-600">
                Transparent pricing with exceptional value
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Microsoft 365 Copilot</h3>
                  <div className="text-4xl font-bold mb-2">
                    ${pricingInfo.monthly}
                    <span className="text-lg font-normal">/user/month</span>
                  </div>
                  <div className="text-blue-100 mb-6">
                    or ${pricingInfo.annual}/user/year
                  </div>
                  
                  <Link
                    to="/calculator?product=m365"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Calculate Your ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                  <div className="space-y-3">
                    {pricingInfo.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-microsoft-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Calculate Your M365 Copilot ROI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of organizations that have discovered significant productivity gains with Microsoft 365 Copilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator?product=m365"
                className="bg-white text-microsoft-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start ROI Calculator</span>
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

export default Microsoft365CopilotPage;