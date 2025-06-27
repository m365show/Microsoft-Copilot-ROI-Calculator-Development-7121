import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import QuestionnaireButton from '../components/Questionnaire/QuestionnaireButton';
import { getModuleData } from '../data/questionnaireData';

const { FiCode, FiGitPullRequest, FiBug, FiZap, FiArrowRight, FiCheckCircle, FiClock, FiDollarSign, FiTrendingUp, FiUsers } = FiIcons;

const GitHubCopilotPage = () => {
  const moduleData = getModuleData('github');

  const features = [
    {
      icon: FiCode,
      title: 'AI Code Completion',
      description: 'Get intelligent code suggestions as you type, with support for dozens of programming languages.',
      benefits: ['Multi-language support', 'Context-aware suggestions', 'Function completion', 'Variable naming assistance']
    },
    {
      icon: FiZap,
      title: 'Faster Development',
      description: 'Accelerate coding with AI that understands your codebase and suggests relevant implementations.',
      benefits: ['55% faster coding', 'Reduced boilerplate', 'Pattern recognition', 'Code optimization']
    },
    {
      icon: FiBug,
      title: 'Bug Detection & Fixing',
      description: 'Identify potential issues and get suggestions for fixes before they become problems.',
      benefits: ['Early bug detection', 'Fix suggestions', 'Code quality improvement', 'Security vulnerability detection']
    },
    {
      icon: FiGitPullRequest,
      title: 'Code Review Assistant',
      description: 'Streamline code reviews with AI-powered analysis and improvement suggestions.',
      benefits: ['Automated code analysis', 'Style consistency', 'Performance optimizations', 'Documentation suggestions']
    }
  ];

  const programmingLanguages = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++', 'Go', 'Rust', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Scala', 'R', 'Julia', 'MATLAB'
  ];

  const useCases = [
    {
      title: 'Software Development Team',
      scenario: '25 developers using GitHub Copilot',
      timeSaved: '2,340 hours/year',
      costSaved: '$175,500/year',
      roi: '585%',
      details: 'Faster feature development, reduced debugging time, and improved code quality'
    },
    {
      title: 'Startup Engineering',
      scenario: '8 full-stack developers',
      timeSaved: '1,248 hours/year',
      costSaved: '$93,600/year',
      roi: '975%',
      details: 'Rapid prototyping, reduced time-to-market, and enhanced productivity'
    },
    {
      title: 'Enterprise Development',
      scenario: '100 developers across multiple teams',
      timeSaved: '9,360 hours/year',
      costSaved: '$702,000/year',
      roi: '585%',
      details: 'Standardized coding practices, faster onboarding, and improved maintainability'
    }
  ];

  const pricingInfo = {
    individual: 10,
    business: 19,
    enterprise: 39,
    features: [
      'AI-powered code completions',
      'Multi-language support (70+ languages)',
      'Context-aware suggestions',
      'Code explanation and documentation',
      'Security vulnerability detection',
      'Integration with popular IDEs'
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GitHub Copilot",
    "description": "AI-powered code completion tool that helps developers write code faster with intelligent suggestions and completions across multiple programming languages.",
    "applicationCategory": "DeveloperTool",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "10",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "10",
        "priceCurrency": "USD",
        "unitText": "per user per month"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "25000"
    },
    "creator": {
      "@type": "Organization",
      "name": "GitHub"
    }
  };

  return (
    <>
      <SEOHead 
        title="GitHub Copilot ROI Calculator - Calculate Developer Productivity Savings"
        description="Calculate ROI for GitHub Copilot. Discover how AI-powered code completion can boost developer productivity by 55% and reduce development costs. Get detailed analysis and reports."
        keywords="GitHub Copilot ROI, AI code completion, developer productivity, coding assistant, programming efficiency, software development ROI, code generation AI"
        canonical="https://copilot-roi-calculator.com/github-copilot"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <SafeIcon icon={FiCode} className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">GitHub Copilot</h1>
                    <p className="text-gray-600 font-semibold">Starting at $10/developer/month</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Your AI Pair Programmer for Faster, Better Code
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  GitHub Copilot uses advanced AI to suggest code completions, entire functions, and even complex algorithms. 
                  Developers report 55% faster coding and significantly improved productivity across all programming languages.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-gray-800 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">55%</div>
                    <div className="text-sm text-gray-600">Faster Coding</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$7,020</div>
                    <div className="text-sm text-gray-600">Avg. Annual Savings/Developer</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    to="/calculator?product=github"
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Calculate GitHub Copilot ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                  
                  <a
                    href="https://m365.show"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors text-center"
                  >
                    Learn More at M365 Show
                  </a>
                </div>

                {/* Questionnaire Button */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Developer Assessment</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Get personalized productivity insights based on your coding habits and development workflow.
                  </p>
                  <QuestionnaireButton 
                    moduleData={moduleData} 
                    variant="primary" 
                    size="default"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-green-400 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 ml-4">main.py</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-400"># GitHub Copilot suggests:</div>
                    <div className="text-blue-300">def <span className="text-yellow-300">calculate_roi</span>(<span className="text-red-300">investment, savings</span>):</div>
                    <div className="pl-4 text-gray-300">"""Calculate ROI percentage"""</div>
                    <div className="pl-4">roi = ((savings - investment) / investment) * 100</div>
                    <div className="pl-4 text-purple-300">return <span className="text-yellow-300">round</span>(roi, 2)</div>
                    <div className="mt-4 text-gray-400"># AI-generated in seconds ✨</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AI Generated
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programming Languages */}
        <section className="py-12 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">Supports 70+ Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {programmingLanguages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Features for Developers
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to code faster and more efficiently
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
                    <div className="bg-gray-800 p-3 rounded-lg flex-shrink-0">
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
                Real Development Team Results
              </h2>
              <p className="text-xl text-gray-600">
                See how development teams are accelerating their productivity
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
                      <span className="font-semibold text-gray-800">{useCase.timeSaved}</span>
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Flexible Pricing Options
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your development team
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Individual',
                  price: pricingInfo.individual,
                  description: 'Perfect for individual developers',
                  features: ['AI code completions', 'Multi-language support', 'IDE integrations', 'Community support']
                },
                {
                  name: 'Business',
                  price: pricingInfo.business,
                  description: 'For professional development teams',
                  features: ['Everything in Individual', 'Organization management', 'Usage analytics', 'Priority support'],
                  featured: true
                },
                {
                  name: 'Enterprise',
                  price: pricingInfo.enterprise,
                  description: 'For large organizations',
                  features: ['Everything in Business', 'Advanced security', 'Compliance features', 'Dedicated support']
                }
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-8 ${
                    plan.featured 
                      ? 'bg-gray-800 text-white border-2 border-gray-800' 
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    ${plan.price}
                    <span className="text-lg font-normal">/user/month</span>
                  </div>
                  <p className={`mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <SafeIcon 
                          icon={FiCheckCircle} 
                          className={`w-5 h-5 flex-shrink-0 ${
                            plan.featured ? 'text-green-400' : 'text-green-500'
                          }`} 
                        />
                        <span className={plan.featured ? 'text-gray-300' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/calculator?product=github"
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2 ${
                      plan.featured 
                        ? 'bg-white text-gray-800 hover:bg-gray-100' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <span>Calculate ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of developers who are coding 55% faster with GitHub Copilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator?product=github"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Calculate Your Savings</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <a
                href="https://m365.show"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
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

export default GitHubCopilotPage;