import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import QuestionnaireButton from '../components/Questionnaire/QuestionnaireButton';
import { getModuleData } from '../data/questionnaireData';

const { FiTrendingUp, FiTarget, FiUsers, FiMessageCircle, FiBarChart, FiArrowRight, FiCheckCircle, FiClock, FiDollarSign, FiPhone, FiMail } = FiIcons;

const Dynamics365CopilotPage = () => {
  const moduleData = getModuleData('dynamics365');

  const features = [
    {
      icon: FiTarget,
      title: 'Intelligent Lead Scoring',
      description: 'AI-powered lead qualification and prioritization based on historical data and behavioral patterns.',
      benefits: ['Automated lead scoring', 'Predictive analytics', 'Sales forecasting', 'Opportunity insights']
    },
    {
      icon: FiMessageCircle,
      title: 'Smart Customer Insights',
      description: 'Generate comprehensive customer profiles and recommendations using AI analysis.',
      benefits: ['Customer sentiment analysis', 'Next best action suggestions', 'Personalized recommendations', 'Relationship mapping']
    },
    {
      icon: FiBarChart,
      title: 'Automated Reporting',
      description: 'Create detailed sales and performance reports with natural language queries.',
      benefits: ['Voice-activated reporting', 'Automated data visualization', 'Performance dashboards', 'Trend analysis']
    },
    {
      icon: FiPhone,
      title: 'Call Intelligence',
      description: 'AI-powered call analysis with conversation insights and follow-up recommendations.',
      benefits: ['Call transcription', 'Sentiment analysis', 'Talk-time ratios', 'Action item extraction']
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Sales Organization',
      scenario: '200 sales reps and managers',
      timeSaved: '5,200 hours/year',
      costSaved: '$338,000/year',
      roi: '281%',
      details: 'Automated lead scoring, customer insights, and sales forecasting'
    },
    {
      title: 'Customer Service Center',
      scenario: '100 service agents',
      timeSaved: '3,600 hours/year',
      costSaved: '$180,000/year',
      roi: '300%',
      details: 'Case routing automation, knowledge base integration, and resolution tracking'
    },
    {
      title: 'Field Service Operations',
      scenario: '50 field technicians',
      timeSaved: '1,800 hours/year',
      costSaved: '$135,000/year',
      roi: '350%',
      details: 'Predictive maintenance, scheduling optimization, and inventory management'
    }
  ];

  const businessImpact = [
    { metric: 'Sales Productivity', improvement: '25%', description: 'Increase in sales rep efficiency' },
    { metric: 'Lead Conversion', improvement: '30%', description: 'Higher qualified lead conversion rates' },
    { metric: 'Customer Satisfaction', improvement: '20%', description: 'Improved service response times' },
    { metric: 'Forecast Accuracy', improvement: '40%', description: 'Better predictive analytics' }
  ];

  const pricingInfo = {
    sales: 50,
    service: 45,
    marketing: 40,
    features: [
      'AI-powered lead scoring and insights',
      'Advanced customer analytics',
      'Predictive sales forecasting',
      'Automated workflow optimization',
      'Real-time performance dashboards',
      'Integration with Office 365'
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dynamics 365 Copilot",
    "description": "AI-powered CRM and ERP solution that enhances sales, service, and marketing processes with intelligent insights and automation.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "offers": {
      "@type": "Offer",
      "price": "50",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "50",
        "priceCurrency": "USD",
        "unitText": "per user per month"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "12000"
    },
    "creator": {
      "@type": "Organization",
      "name": "Microsoft"
    }
  };

  return (
    <>
      <SEOHead 
        title="Dynamics 365 Copilot ROI Calculator - CRM & ERP AI Productivity"
        description="Calculate ROI for Dynamics 365 Copilot. Discover how AI-powered CRM and ERP can increase sales productivity by 25% and improve customer satisfaction. Get detailed analysis."
        keywords="Dynamics 365 Copilot ROI, CRM AI, ERP automation, sales productivity, customer service AI, business intelligence, Microsoft Dynamics ROI"
        canonical="https://copilot-roi-calculator.com/dynamics-365-copilot"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Dynamics 365 Copilot</h1>
                    <p className="text-green-600 font-semibold">Starting at $40/user/month</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  AI-Powered CRM & ERP for Smarter Business Operations
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Dynamics 365 Copilot transforms your sales, service, and marketing operations with intelligent insights, 
                  automated processes, and predictive analytics. Increase sales productivity by 25% and improve customer 
                  satisfaction with AI-driven recommendations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">25%</div>
                    <div className="text-sm text-gray-600">Sales Productivity Boost</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$4,200</div>
                    <div className="text-sm text-gray-600">Avg. Annual Savings/User</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    to="/calculator?product=dynamics365"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Calculate Dynamics 365 ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                  
                  <a
                    href="https://m365.show"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-green-500 text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors text-center"
                  >
                    Learn More at M365 Show
                  </a>
                </div>

                {/* Questionnaire Button */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Sales & CRM Assessment</h3>
                  <p className="text-green-800 text-sm mb-3">
                    Get insights on how Dynamics 365 Copilot can enhance your sales processes and customer relationships.
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
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { icon: FiTarget, label: 'Sales', color: 'bg-blue-500', description: 'Lead scoring & forecasting' },
                      { icon: FiUsers, label: 'Service', color: 'bg-green-500', description: 'Customer support AI' },
                      { icon: FiMail, label: 'Marketing', color: 'bg-purple-500', description: 'Campaign optimization' },
                      { icon: FiBarChart, label: 'Analytics', color: 'bg-orange-500', description: 'Business intelligence' }
                    ].map((module, index) => (
                      <motion.div
                        key={module.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50"
                      >
                        <div className={`${module.color} rounded-lg p-3`}>
                          <SafeIcon icon={module.icon} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{module.label}</div>
                          <div className="text-sm text-gray-600">{module.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
                    <SafeIcon icon={FiTrendingUp} className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">AI Copilot Integration</div>
                    <div className="text-xs opacity-90">Intelligent business insights</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-12 bg-green-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {businessImpact.map((impact, index) => (
                <motion.div
                  key={impact.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2">{impact.improvement}</div>
                  <div className="font-semibold mb-1">{impact.metric}</div>
                  <div className="text-sm opacity-90">{impact.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI-Powered Business Intelligence
              </h2>
              <p className="text-xl text-gray-600">
                Transform your customer relationships with intelligent automation
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
                    <div className="bg-green-500 p-3 rounded-lg flex-shrink-0">
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
                Enterprise Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real results from organizations using Dynamics 365 Copilot
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
                      <span className="font-semibold text-green-600">{useCase.timeSaved}</span>
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

        {/* CTA Section */}
        <section className="py-20 bg-green-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Business Operations Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of organizations improving sales performance and customer satisfaction with Dynamics 365 Copilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator?product=dynamics365"
                className="bg-white text-green-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Calculate Your ROI</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <a
                href="https://m365.show"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-500 transition-colors"
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

export default Dynamics365CopilotPage;