import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiCode, FiZap, FiTrendingUp, FiShield, FiArrowRight, FiCheckCircle, FiClock, FiDollarSign } = FiIcons;

const InteractiveCopilots = () => {
  const [selectedCopilot, setSelectedCopilot] = useState(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const copilots = [
    {
      id: 'm365',
      name: 'Microsoft 365 Copilot',
      description: 'Transform productivity in Word, Excel, PowerPoint, Outlook, and Teams with AI-powered assistance.',
      icon: FiUsers,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      link: '/microsoft-365-copilot',
      benefits: ['30% faster document creation', 'Smart email management', 'Automated meeting summaries'],
      price: '$30/user/month',
      savings: '$2,600/year',
      timeReduction: '8 hours/week',
      bestFor: ['Knowledge workers', 'Managers', 'Sales teams', 'Consultants'],
      features: ['Email drafting', 'Document generation', 'Meeting insights', 'Data analysis']
    },
    {
      id: 'github',
      name: 'GitHub Copilot',
      description: 'Accelerate software development with AI code suggestions and completions.',
      icon: FiCode,
      color: 'bg-gray-800',
      gradient: 'from-gray-700 to-gray-800',
      link: '/github-copilot',
      benefits: ['55% faster coding', 'Reduced debugging time', 'Smart code reviews'],
      price: '$10/user/month',
      savings: '$7,020/year',
      timeReduction: '12 hours/week',
      bestFor: ['Developers', 'DevOps engineers', 'Technical leads', 'Startups'],
      features: ['Code completion', 'Bug detection', 'Documentation', 'Code reviews']
    },
    {
      id: 'powerPlatform',
      name: 'Power Platform Copilot',
      description: 'Build apps, automate workflows, and analyze data with natural language commands.',
      icon: FiZap,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      link: '/power-platform-copilot',
      benefits: ['60% faster app development', 'Natural language automation', 'Smart data insights'],
      price: '$20/user/month',
      savings: '$3,840/year',
      timeReduction: '6 hours/week',
      bestFor: ['Business analysts', 'Citizen developers', 'Operations teams', 'IT departments'],
      features: ['App building', 'Workflow automation', 'Data visualization', 'Chatbot creation']
    },
    {
      id: 'dynamics365',
      name: 'Dynamics 365 Copilot',
      description: 'Enhance CRM and ERP processes with intelligent business insights and automation.',
      icon: FiTrendingUp,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      link: '/dynamics-365-copilot',
      benefits: ['Smarter lead qualification', 'Automated customer insights', 'Predictive analytics'],
      price: '$50/user/month',
      savings: '$4,200/year',
      timeReduction: '5 hours/week',
      bestFor: ['Sales teams', 'Customer service', 'Marketing', 'Field service'],
      features: ['Lead scoring', 'Customer insights', 'Sales forecasting', 'Service automation']
    },
    {
      id: 'security',
      name: 'Security Copilot',
      description: 'Strengthen cybersecurity with AI-powered threat detection and response.',
      icon: FiShield,
      color: 'bg-red-500',
      gradient: 'from-red-500 to-red-600',
      link: '/security-copilot',
      benefits: ['60% faster threat analysis', 'Automated incident response', 'Enhanced security posture'],
      price: '$4/user/month',
      savings: '$6,240/year',
      timeReduction: '10 hours/week',
      bestFor: ['Security analysts', 'SOC teams', 'IT security', 'Compliance officers'],
      features: ['Threat detection', 'Incident response', 'Risk assessment', 'Compliance monitoring']
    }
  ];

  const quizQuestions = [
    {
      question: "What's your primary role?",
      options: [
        { text: "Business/Knowledge Worker", points: { m365: 3, powerPlatform: 2, dynamics365: 1 } },
        { text: "Software Developer", points: { github: 3, powerPlatform: 1 } },
        { text: "Sales/Marketing", points: { dynamics365: 3, m365: 2, powerPlatform: 1 } },
        { text: "Security Professional", points: { security: 3, m365: 1 } },
        { text: "IT/Operations", points: { powerPlatform: 2, security: 2, m365: 2 } }
      ]
    },
    {
      question: "What's your biggest productivity challenge?",
      options: [
        { text: "Email and document management", points: { m365: 3, powerPlatform: 1 } },
        { text: "Slow software development", points: { github: 3, powerPlatform: 1 } },
        { text: "Manual business processes", points: { powerPlatform: 3, dynamics365: 2 } },
        { text: "Customer relationship management", points: { dynamics365: 3, m365: 1 } },
        { text: "Security threats and compliance", points: { security: 3 } }
      ]
    },
    {
      question: "What's your team size?",
      options: [
        { text: "1-10 people", points: { github: 2, m365: 2, security: 1 } },
        { text: "11-50 people", points: { m365: 2, powerPlatform: 2, dynamics365: 2 } },
        { text: "51-200 people", points: { m365: 3, powerPlatform: 2, dynamics365: 2, security: 2 } },
        { text: "200+ people", points: { m365: 3, dynamics365: 3, security: 3, powerPlatform: 2 } }
      ]
    }
  ];

  const handleQuizAnswer = (answer) => {
    const newAnswers = { ...quizAnswers, [quizStep]: answer };
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate result
      const scores = {};
      Object.values(newAnswers).forEach(answer => {
        Object.entries(answer.points).forEach(([copilot, points]) => {
          scores[copilot] = (scores[copilot] || 0) + points;
        });
      });

      const recommendedCopilot = Object.entries(scores).reduce((a, b) => 
        scores[a[0]] > scores[b[0]] ? a : b
      )[0];

      setQuizResult(copilots.find(c => c.id === recommendedCopilot));
      setQuizStep(0);
      setQuizAnswers({});
    }
  };

  const resetQuiz = () => {
    setShowQuiz(false);
    setQuizStep(0);
    setQuizAnswers({});
    setQuizResult(null);
  };

  const CopilotModal = ({ copilot, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`bg-gradient-to-r ${copilot.gradient} text-white p-6`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <SafeIcon icon={copilot.icon} className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{copilot.name}</h2>
                  <p className="text-blue-100">{copilot.price}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <SafeIcon icon={FiUsers} className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-600 mb-6">{copilot.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">Annual Savings</span>
                </div>
                <div className="text-2xl font-bold text-green-900">{copilot.savings}</div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <SafeIcon icon={FiClock} className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">Time Saved</span>
                </div>
                <div className="text-2xl font-bold text-blue-900">{copilot.timeReduction}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
              <div className="space-y-2">
                {copilot.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Best For</h3>
              <div className="flex flex-wrap gap-2">
                {copilot.bestFor.map((role, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Link
                to={copilot.link}
                className="flex-1 bg-microsoft-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center"
              >
                Learn More
              </Link>
              <Link
                to="/calculator"
                className="flex-1 border-2 border-microsoft-blue text-microsoft-blue py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Calculate ROI
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Microsoft Copilot Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore how each Microsoft Copilot product can transform your organization's productivity and efficiency.
          </p>
          
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-microsoft-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center space-x-2"
          >
            <span>🧠 Which Copilot is right for you?</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {copilots.map((copilot, index) => (
            <motion.div
              key={copilot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedCopilot(copilot)}
            >
              <div className={`bg-gradient-to-r ${copilot.gradient} p-6 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <SafeIcon icon={copilot.icon} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{copilot.name}</h3>
                    <p className="text-blue-100 font-semibold">{copilot.price}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">{copilot.savings}</div>
                    <div className="text-xs opacity-90">Annual savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{copilot.timeReduction}</div>
                    <div className="text-xs opacity-90">Time saved</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{copilot.description}</p>
                
                <div className="space-y-2 mb-6">
                  {copilot.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Link
                    to={copilot.link}
                    className="flex-1 bg-gray-100 text-gray-800 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/calculator"
                    className="flex-1 bg-microsoft-blue text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Calculate ROI
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quiz Modal */}
        <AnimatePresence>
          {showQuiz && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full"
              >
                <div className="bg-gradient-to-r from-microsoft-blue to-purple-600 text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">🧠 Find Your Perfect Copilot</h2>
                    <button
                      onClick={resetQuiz}
                      className="text-white hover:text-gray-200"
                    >
                      <SafeIcon icon={FiUsers} className="w-6 h-6" />
                    </button>
                  </div>
                  {!quizResult && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                        <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {quizResult ? (
                    <div className="text-center">
                      <div className="bg-green-50 rounded-lg p-6 mb-6">
                        <SafeIcon icon={FiCheckCircle} className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-green-900 mb-2">Perfect Match Found!</h3>
                        <p className="text-green-800">Based on your answers, we recommend:</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`${quizResult.color} p-3 rounded-lg`}>
                            <SafeIcon icon={quizResult.icon} className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{quizResult.name}</h4>
                            <p className="text-microsoft-blue font-semibold">{quizResult.price}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{quizResult.description}</p>
                      </div>

                      <div className="flex space-x-4">
                        <Link
                          to={quizResult.link}
                          className="flex-1 bg-microsoft-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center"
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/calculator"
                          className="flex-1 border-2 border-microsoft-blue text-microsoft-blue py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                        >
                          Calculate ROI
                        </Link>
                      </div>

                      <button
                        onClick={resetQuiz}
                        className="text-gray-500 text-sm mt-4 hover:text-gray-700"
                      >
                        Take quiz again
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        {quizQuestions[quizStep].question}
                      </h3>
                      
                      <div className="space-y-3">
                        {quizQuestions[quizStep].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuizAnswer(option)}
                            className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-microsoft-blue hover:bg-blue-50 transition-colors"
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Copilot Detail Modal */}
        {selectedCopilot && (
          <CopilotModal
            copilot={selectedCopilot}
            onClose={() => setSelectedCopilot(null)}
          />
        )}
      </div>
    </section>
  );
};

export default InteractiveCopilots;