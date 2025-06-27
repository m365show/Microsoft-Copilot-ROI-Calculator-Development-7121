import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import QuestionnaireButton from '../components/Questionnaire/QuestionnaireButton';
import { getModuleData } from '../data/questionnaireData';

const { FiZap, FiSmartphone, FiRefreshCw, FiBarChart, FiArrowRight, FiCheckCircle, FiClock, FiDollarSign, FiTrendingUp, FiMessageSquare } = FiIcons;

const PowerPlatformCopilotPage = () => {
  const moduleData = getModuleData('powerPlatform');

  const features = [
    {
      icon: FiSmartphone,
      title: 'Power Apps AI Builder',
      description: 'Create sophisticated business applications with natural language commands and AI assistance.',
      benefits: ['Drag-and-drop interface', 'Natural language app building', 'Pre-built templates', 'Cross-platform deployment']
    },
    {
      icon: FiRefreshCw,
      title: 'Power Automate Intelligence',
      description: 'Build complex workflows and automations using conversational AI and smart suggestions.',
      benefits: ['Workflow automation', 'Process mining insights', 'RPA capabilities', 'Cloud and desktop flows']
    },
    {
      icon: FiBarChart,
      title: 'Power BI Smart Insights',
      description: 'Generate reports and dashboards with AI-powered data analysis and visualization.',
      benefits: ['Natural language queries', 'Smart visualizations', 'Automated insights', 'Real-time analytics']
    },
    {
      icon: FiMessageSquare,
      title: 'Power Virtual Agents',
      description: 'Build intelligent chatbots and virtual agents without coding expertise.',
      benefits: ['No-code bot building', 'Natural language processing', 'Multi-channel deployment', 'Advanced analytics']
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Organization',
      scenario: '200 business users across departments',
      timeSaved: '4,800 hours/year',
      costSaved: '$288,000/year',
      roi: '500%',
      details: 'Patient intake apps, appointment automation, and compliance reporting'
    },
    {
      title: 'Manufacturing Company',
      scenario: '75 operations and quality staff',
      timeSaved: '2,400 hours/year',
      costSaved: '$144,000/year',
      roi: '400%',
      details: 'Quality control apps, maintenance workflows, and production dashboards'
    },
    {
      title: 'Financial Services',
      scenario: '150 analysts and managers',
      timeSaved: '3,600 hours/year',
      costSaved: '$270,000/year',
      roi: '450%',
      details: 'Risk assessment tools, compliance automation, and client reporting'
    }
  ];

  const capabilities = [
    { name: 'App Development Time', reduction: '60%', description: 'Faster application creation' },
    { name: 'Workflow Automation', reduction: '70%', description: 'Process automation efficiency' },
    { name: 'Report Generation', reduction: '50%', description: 'Faster business insights' },
    { name: 'Chatbot Development', reduction: '80%', description: 'No-code bot creation' }
  ];

  const pricingInfo = {
    monthly: 20,
    annual: 240,
    features: [
      'AI-powered app development',
      'Advanced workflow automation',
      'Smart data visualization',
      'Natural language processing',
      'Pre-built connectors (600+)',
      'Enterprise-grade security'
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Power Platform Copilot",
    "description": "AI-powered low-code platform for building apps, automating workflows, and analyzing data with natural language commands and intelligent assistance.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "offers": {
      "@type": "Offer",
      "price": "20",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "20",
        "priceCurrency": "USD",
        "unitText": "per user per month"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "8500"
    },
    "creator": {
      "@type": "Organization",
      "name": "Microsoft"
    }
  };

  return (
    <>
      <SEOHead 
        title="Power Platform Copilot ROI Calculator - Low-Code Development Savings"
        description="Calculate ROI for Power Platform Copilot. Discover how AI-powered low-code development can reduce app creation time by 60% and automate business processes. Get detailed analysis."
        keywords="Power Platform Copilot ROI, low-code development, Power Apps, Power Automate, Power BI, business process automation, no-code solutions, workflow automation"
        canonical="https://copilot-roi-calculator.com/power-platform-copilot"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <SafeIcon icon={FiZap} className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Power Platform Copilot</h1>
                    <p className="text-purple-600 font-semibold">$20/user/month</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Build Apps, Automate Processes, Analyze Data with AI
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Power Platform Copilot revolutionizes low-code development by enabling anyone to create sophisticated 
                  business applications, automate complex workflows, and generate insights using natural language 
                  commands and AI assistance.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-purple-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">60%</div>
                    <div className="text-sm text-gray-600">Faster App Development</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$3,840</div>
                    <div className="text-sm text-gray-600">Avg. Annual Savings/User</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    to="/calculator?product=powerPlatform"
                    className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Calculate Power Platform ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                  
                  <a
                    href="https://m365.show"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors text-center"
                  >
                    Learn More at M365 Show
                  </a>
                </div>

                {/* Questionnaire Button */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">Business Process Assessment</h3>
                  <p className="text-purple-800 text-sm mb-3">
                    Discover how Power Platform can transform your business processes with our personalized assessment.
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
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: FiSmartphone, label: 'Power Apps', color: 'bg-purple-500', description: 'Build apps with AI' },
                      { icon: FiRefreshCw, label: 'Power Automate', color: 'bg-blue-500', description: 'Automate workflows' },
                      { icon: FiBarChart, label: 'Power BI', color: 'bg-yellow-500', description: 'Smart analytics' },
                      { icon: FiMessageSquare, label: 'Virtual Agents', color: 'bg-green-500', description: 'AI chatbots' }
                    ].map((app, index) => (
                      <motion.div
                        key={app.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${app.color} rounded-lg p-4 text-white text-center`}
                      >
                        <SafeIcon icon={app.icon} className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold text-sm">{app.label}</div>
                        <div className="text-xs opacity-90 mt-1">{app.description}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 text-white">
                    <SafeIcon icon={FiZap} className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">AI Copilot Integration</div>
                    <div className="text-xs opacity-90">Natural language commands</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-12 bg-purple-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2">{capability.reduction}</div>
                  <div className="font-semibold mb-1">{capability.name}</div>
                  <div className="text-sm opacity-90">{capability.description}</div>
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
                Comprehensive Low-Code Platform
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to digitize and automate your business processes
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
                    <div className="bg-purple-500 p-3 rounded-lg flex-shrink-0">
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
                Industry Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See how organizations are transforming with Power Platform
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
                      <span className="font-semibold text-purple-600">{useCase.timeSaved}</span>
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

        {/* Business Impact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transform Your Business Operations
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Power Platform Copilot enables citizen developers to create enterprise-grade solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FiSmartphone,
                  title: 'App Development',
                  stat: '60% Faster',
                  description: 'Create custom business apps without traditional coding',
                  examples: ['Employee onboarding', 'Expense tracking', 'Inventory management', 'Customer portals']
                },
                {
                  icon: FiRefreshCw,
                  title: 'Process Automation',
                  stat: '70% Efficiency',
                  description: 'Automate repetitive tasks and complex workflows',
                  examples: ['Approval processes', 'Data synchronization', 'Email notifications', 'Document routing']
                },
                {
                  icon: FiBarChart,
                  title: 'Data Insights',
                  stat: '50% Faster Reports',
                  description: 'Generate actionable insights from your business data',
                  examples: ['Sales dashboards', 'Performance metrics', 'Compliance reporting', 'Trend analysis']
                }
              ].map((impact, index) => (
                <motion.div
                  key={impact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <SafeIcon icon={impact.icon} className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{impact.title}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-3">{impact.stat}</div>
                  <p className="text-gray-600 mb-4">{impact.description}</p>
                  <div className="space-y-2">
                    {impact.examples.map((example, idx) => (
                      <div key={idx} className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Affordable Low-Code Platform
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise capabilities at a fraction of traditional development costs
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Power Platform Copilot</h3>
                  <div className="text-4xl font-bold mb-2">
                    ${pricingInfo.monthly}
                    <span className="text-lg font-normal">/user/month</span>
                  </div>
                  <div className="text-purple-100 mb-6">
                    or ${pricingInfo.annual}/user/year
                  </div>
                  
                  <Link
                    to="/calculator?product=powerPlatform"
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Calculate Your ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Platform Includes:</h4>
                  <div className="space-y-3">
                    {pricingInfo.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="text-purple-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of organizations building better business solutions with Power Platform Copilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator?product=powerPlatform"
                className="bg-white text-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Calculate Your Savings</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <a
                href="https://m365.show"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-500 transition-colors"
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

export default PowerPlatformCopilotPage;