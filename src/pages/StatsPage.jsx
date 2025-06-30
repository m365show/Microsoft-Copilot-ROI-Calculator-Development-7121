import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import { FirebaseStatsService } from '../services/firebaseService';
import ReactECharts from 'echarts-for-react';

const { FiTrendingUp, FiUsers, FiTarget, FiClock, FiDollarSign, FiBarChart, FiActivity, FiZap, FiShield } = FiIcons;

const StatsPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    averageROI: 0,
    totalHoursSaved: 0,
    totalCostSaved: 0,
    moduleUsage: {},
    weeklyTrends: [],
    communityInsights: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const communityStats = await FirebaseStatsService.getCommunityStats();
      setStats(communityStats);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    } finally {
      setLoading(false);
    }
  };

  const moduleNames = {
    'm365': 'Microsoft 365',
    'github': 'GitHub Copilot',
    'powerPlatform': 'Power Platform',
    'dynamics365': 'Dynamics 365',
    'security': 'Security Copilot'
  };

  const moduleIcons = {
    'm365': FiUsers,
    'github': FiActivity,
    'powerPlatform': FiZap,
    'dynamics365': FiTrendingUp,
    'security': FiShield
  };

  const moduleColors = {
    'm365': '#0078d4',
    'github': '#333333',
    'powerPlatform': '#742774',
    'dynamics365': '#107c10',
    'security': '#d13438'
  };

  const getModuleUsageChart = () => {
    const data = Object.entries(stats.moduleUsage).map(([key, value]) => ({
      name: moduleNames[key] || key,
      value: value,
      itemStyle: { color: moduleColors[key] }
    }));

    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} users ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: { fontSize: 12 }
      },
      series: [{
        name: 'Copilot Usage',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['60%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }]
    };
  };

  const getWeeklyTrendsChart = () => {
    return {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c} new users'
      },
      xAxis: {
        type: 'category',
        data: stats.weeklyTrends.map(w => w.week),
        axisLabel: { fontSize: 12 }
      },
      yAxis: {
        type: 'value',
        axisLabel: { fontSize: 12 }
      },
      series: [{
        data: stats.weeklyTrends.map(w => w.users),
        type: 'line',
        smooth: true,
        lineStyle: { color: '#0078d4', width: 3 },
        itemStyle: { color: '#0078d4' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(0, 120, 212, 0.3)' },
              { offset: 1, color: 'rgba(0, 120, 212, 0.1)' }
            ]
          }
        }
      }]
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-microsoft-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Firebase statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Microsoft Copilot ROI Statistics - Firebase Community Insights" 
        description="Explore real-time analytics from Firebase showing Microsoft Copilot ROI assessments. See community trends, usage patterns, and productivity improvements."
        keywords="Microsoft Copilot statistics, Firebase analytics, ROI trends, productivity metrics, AI adoption insights"
        canonical="https://copilot-roi-calculator.com/stats"
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Community Statistics & Insights
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real data from Firebase showing Microsoft Copilot ROI potential across organizations
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stats.totalUsers.toLocaleString()}</h3>
              <p className="text-gray-600">Total Assessments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">${stats.averageROI.toLocaleString()}</h3>
              <p className="text-gray-600">Average Annual ROI</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stats.totalHoursSaved.toLocaleString()}</h3>
              <p className="text-gray-600">Total Hours Saved</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">${(stats.totalCostSaved / 1000000).toFixed(1)}M</h3>
              <p className="text-gray-600">Total Cost Savings</p>
            </motion.div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Copilot Popularity Distribution</h3>
              <div className="h-80">
                <ReactECharts option={getModuleUsageChart()} style={{ height: '100%', width: '100%' }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Usage Trends</h3>
              <div className="h-80">
                <ReactECharts option={getWeeklyTrendsChart()} style={{ height: '100%', width: '100%' }} />
              </div>
            </motion.div>
          </div>

          {/* Community Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Pulse</h3>
            <p className="text-gray-600 text-center mb-8">
              Top productivity challenges identified by our Firebase community
            </p>
            
            <div className="space-y-4">
              {stats.communityInsights.map((insight, index) => (
                <motion.div
                  key={insight.insight}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">{insight.insight}</span>
                      <span className="text-microsoft-blue font-bold">{insight.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${insight.percentage}%` }}
                        transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        className="bg-microsoft-blue h-2 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Module Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Copilot Module Breakdown</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {Object.entries(stats.moduleUsage).map(([moduleId, count], index) => {
                const Icon = moduleIcons[moduleId] || FiBarChart;
                const percentage = Math.round((count / stats.totalUsers) * 100);
                
                return (
                  <motion.div
                    key={moduleId}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div 
                      className="p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${moduleColors[moduleId]}20` }}
                    >
                      <SafeIcon 
                        icon={Icon} 
                        className="w-6 h-6" 
                        style={{ color: moduleColors[moduleId] }}
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{moduleNames[moduleId]}</h4>
                    <div className="text-2xl font-bold mb-1" style={{ color: moduleColors[moduleId] }}>
                      {count}
                    </div>
                    <div className="text-sm text-gray-600">{percentage}% of users</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-microsoft-blue to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🔥 Powered by Firebase</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Real-time analytics and community insights powered by Google Firebase
              </p>
              <Link
                to="/calculator"
                className="bg-white text-microsoft-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Start Your Assessment</span>
                <SafeIcon icon={FiTarget} className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StatsPage;