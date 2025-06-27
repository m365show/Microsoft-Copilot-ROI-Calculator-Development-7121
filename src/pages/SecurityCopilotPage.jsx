import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import QuestionnaireButton from '../components/Questionnaire/QuestionnaireButton';
import { getModuleData } from '../data/questionnaireData';

const { FiShield, FiAlertTriangle, FiEye, FiLock, FiArrowRight, FiCheckCircle, FiClock, FiDollarSign, FiTrendingUp, FiActivity } = FiIcons;

const SecurityCopilotPage = () => {
  const moduleData = getModuleData('security');

  const features = [
    {
      icon: FiAlertTriangle,
      title: 'Threat Intelligence & Analysis',
      description: 'AI-powered threat detection and analysis that processes millions of signals to identify sophisticated attacks.',
      benefits: ['Real-time threat detection', 'Advanced persistent threat hunting', 'Behavioral analytics', 'Zero-day protection']
    },
    {
      icon: FiActivity,
      title: 'Incident Response Automation',
      description: 'Accelerate incident response with AI-guided playbooks and automated remediation workflows.',
      benefits: ['Automated incident triage', 'Guided response workflows', 'Threat containment', 'Evidence collection']
    },
    {
      icon: FiEye,
      title: 'Security Monitoring & Analytics',
      description: 'Continuous monitoring with AI-enhanced analytics for comprehensive security visibility.',
      benefits: ['24/7 security monitoring', 'Anomaly detection', 'Risk assessment', 'Compliance reporting']
    },
    {
      icon: FiLock,
      title: 'Vulnerability Management',
      description: 'Proactive vulnerability assessment and prioritization based on threat intelligence.',
      benefits: ['Automated vulnerability scanning', 'Risk-based prioritization', 'Patch management', 'Security posture assessment']
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Security Operations',
      scenario: '15 security analysts and SOC team',
      timeSaved: '3,900 hours/year',
      costSaved: '$312,000/year',
      roi: '1,300%',
      details: 'Automated threat hunting, incident response, and security monitoring'
    },
    {
      title: 'Financial Services',
      scenario: '8 cybersecurity specialists',
      timeSaved: '2,080 hours/year',
      costSaved: '$208,000/year',
      roi: '1,083%',
      details: 'Fraud detection, compliance monitoring, and risk assessment automation'
    },
    {
      title: 'Healthcare Organization',
      scenario: '5 security professionals',
      timeSaved: '1,300 hours/year',
      costSaved: '$130,000/year',
      roi: '1,083%',
      details: 'Patient data protection, HIPAA compliance, and medical device security'
    }
  ];

  const threatCapabilities = [
    { name: 'Threat Detection Speed', improvement: '60%', description: 'Faster identification of security threats' },
    { name: 'Incident Response Time', improvement: '50%', description: 'Reduced mean time to resolution' },
    { name: 'False Positive Reduction', improvement: '70%', description: 'More accurate threat intelligence' },
    { name: 'Security Analyst Efficiency', improvement: '40%', description: 'Enhanced productivity through automation' }
  ];

  const securityDomains = [
    {
      icon: FiShield,
      title: 'Identity & Access',
      description: 'Protect user identities and access',
      features: ['Multi-factor authentication', 'Privileged access management', 'Identity governance', 'Zero trust architecture']
    },
    {
      icon: FiEye,
      title: 'Threat Protection',
      description: 'Advanced threat detection and response',
      features: ['Advanced threat analytics', 'Behavioral analysis', 'Machine learning detection', 'Threat intelligence']
    },
    {
      icon: FiLock,
      title: 'Information Protection',
      description: 'Safeguard sensitive data and documents',
      features: ['Data classification', 'Encryption management', 'Data loss prevention', 'Rights management']
    }
  ];

  const pricingInfo = {
    monthly: 4,
    annual: 48,
    features: [
      'AI-powered threat detection and analysis',
      'Automated incident response workflows',
      'Advanced security analytics',
      'Threat intelligence integration',
      'Compliance and risk assessment',
      '24/7 security monitoring'
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Microsoft Security Copilot",
    "description": "AI-powered cybersecurity platform that enhances threat detection, incident response, and security operations with advanced machine learning and automation.",
    "applicationCategory": "SecuritySoftware",
    "operatingSystem": "Cloud-based",
    "offers": {
      "@type": "Offer",
      "price": "4",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "4",
        "priceCurrency": "USD",
        "unitText": "per user per month"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5500"
    },
    "creator": {
      "@type": "Organization",
      "name": "Microsoft"
    }
  };

  return (
    <>
      <SEOHead 
        title="Security Copilot ROI Calculator - Cybersecurity AI Savings"
        description="Calculate ROI for Microsoft Security Copilot. Discover how AI-powered cybersecurity can reduce threat detection time by 60% and improve incident response. Get detailed analysis."
        keywords="Security Copilot ROI, cybersecurity AI, threat detection, incident response automation, SOC efficiency, security analytics, Microsoft Security"
        canonical="https://copilot-roi-calculator.com/security-copilot"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Security Copilot</h1>
                    <p className="text-red-600 font-semibold">$4/user/month</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  AI-Powered Cybersecurity for Modern Threats
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Microsoft Security Copilot transforms cybersecurity operations with AI-driven threat detection, 
                  automated incident response, and intelligent security analytics. Reduce threat detection time by 60% 
                  and enhance your security posture with machine learning-powered insights.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-red-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">60%</div>
                    <div className="text-sm text-gray-600">Faster Threat Detection</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$6,240</div>
                    <div className="text-sm text-gray-600">Avg. Annual Savings/Analyst</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    to="/calculator?product=security"
                    className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Calculate Security ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                  
                  <a
                    href="https://m365.show"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors text-center"
                  >
                    Learn More at M365 Show
                  </a>
                </div>

                {/* Questionnaire Button */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">Security Operations Assessment</h3>
                  <p className="text-red-800 text-sm mb-3">
                    Evaluate how Security Copilot can enhance your threat detection and incident response capabilities.
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
                <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 text-green-400 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 ml-4">Security Dashboard</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-red-400">🚨 THREAT DETECTED</div>
                    <div className="text-yellow-300">Source: 192.168.1.100</div>
                    <div className="text-blue-300">Type: Advanced Persistent Threat</div>
                    <div className="text-gray-300">Risk Level: HIGH</div>
                    <div className="text-green-400">✅ Auto-containment initiated</div>
                    <div className="text-green-400">✅ Evidence collected</div>
                    <div className="text-green-400">✅ Stakeholders notified</div>
                    <div className="mt-4 text-gray-400"># AI Response Time: 2.3 seconds</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AI Powered
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Threat Capabilities */}
        <section className="py-12 bg-red-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {threatCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2">{capability.improvement}</div>
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
                Advanced Cybersecurity Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive protection powered by artificial intelligence
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
                    <div className="bg-red-500 p-3 rounded-lg flex-shrink-0">
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

        {/* Security Domains */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Security Coverage
              </h2>
              <p className="text-xl text-gray-600">
                Protect your organization across all security domains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityDomains.map((domain, index) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 text-center shadow-lg"
                >
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <SafeIcon icon={domain.icon} className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{domain.title}</h3>
                  <p className="text-gray-600 mb-6">{domain.description}</p>
                  <div className="space-y-3">
                    {domain.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real-World Security ROI
              </h2>
              <p className="text-xl text-gray-600">
                See how organizations are strengthening their security posture
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.scenario}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Time Saved</span>
                      <span className="font-semibold text-red-600">{useCase.timeSaved}</span>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Security at Scale
              </h2>
              <p className="text-xl text-gray-600">
                Affordable protection with maximum ROI
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Microsoft Security Copilot</h3>
                  <div className="text-4xl font-bold mb-2">
                    ${pricingInfo.monthly}
                    <span className="text-lg font-normal">/user/month</span>
                  </div>
                  <div className="text-red-100 mb-6">
                    or ${pricingInfo.annual}/user/year
                  </div>
                  
                  <Link
                    to="/calculator?product=security"
                    className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Calculate Security ROI</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Security Features:</h4>
                  <div className="space-y-3">
                    {pricingInfo.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="text-red-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Strengthen Your Security Posture Today
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Join organizations worldwide that trust Microsoft Security Copilot to protect their digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator?product=security"
                className="bg-white text-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Calculate Your Security ROI</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <a
                href="https://m365.show"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-500 transition-colors"
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

export default SecurityCopilotPage;