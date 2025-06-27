import React from 'react';
import ReactECharts from 'echarts-for-react';

const ROIChart = ({ results }) => {
  const moduleNames = {
    m365: 'Microsoft 365',
    github: 'GitHub Copilot',
    powerPlatform: 'Power Platform',
    dynamics365: 'Dynamics 365',
    security: 'Security Copilot'
  };

  const data = Object.entries(results)
    .filter(([key]) => key !== 'total')
    .map(([key, value]) => ({
      name: moduleNames[key],
      value: value.costSaved,
      timeSaved: value.timeSaved,
      score: value.score
    }));

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return `
          <div style="padding: 8px;">
            <strong>${params.name}</strong><br/>
            Cost Saved: $${params.value.toLocaleString()}<br/>
            Time Saved: ${params.data.timeSaved.toLocaleString()} hours<br/>
            ROI Score: ${Math.round(params.data.score)}
          </div>
        `;
      }
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        fontSize: 12
      }
    },
    series: [
      {
        name: 'Cost Savings',
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
            fontWeight: 'bold',
            formatter: function(params) {
              return `$${params.value.toLocaleString()}`;
            }
          }
        },
        labelLine: {
          show: false
        },
        data: data,
        color: ['#0078d4', '#6c757d', '#6f42c1', '#28a745', '#dc3545']
      }
    ]
  };

  return (
    <div className="w-full h-80">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default ROIChart;