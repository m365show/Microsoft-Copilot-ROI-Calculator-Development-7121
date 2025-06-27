import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiDownload, FiFileText, FiPresentation } = FiIcons;

const DownloadButtons = ({ results, formData }) => {
  const [downloading, setDownloading] = useState(null);

  const getCopilotLicenseCosts = () => ({
    m365: { monthly: 30, annual: 360, name: 'Microsoft 365 Copilot' },
    github: { monthly: 10, annual: 120, name: 'GitHub Copilot' },
    powerPlatform: { monthly: 20, annual: 240, name: 'Power Platform Copilot' },
    dynamics365: { monthly: 50, annual: 600, name: 'Dynamics 365 Copilot' },
    security: { monthly: 4, annual: 48, name: 'Security Copilot' }
  });

  const formatCurrency = (amount) => {
    return Math.floor(amount).toLocaleString();
  };

  const getDetailedBreakdown = (moduleKey, moduleResults, moduleData) => {
    const licenseCosts = getCopilotLicenseCosts();
    const userCount = getModuleUserCount(moduleKey, moduleData);
    const hourlyRate = moduleData.avgHourlyRate || getDefaultHourlyRate(moduleKey);
    
    const breakdown = {
      module: licenseCosts[moduleKey]?.name || moduleKey,
      users: userCount,
      timeSavedHours: moduleResults.timeSaved,
      costSaved: moduleResults.costSaved,
      hourlyRate: hourlyRate,
      licenseCostMonthly: licenseCosts[moduleKey]?.monthly * userCount || 0,
      licenseCostAnnual: licenseCosts[moduleKey]?.annual * userCount || 0,
      netSavingsAnnual: moduleResults.costSaved - (licenseCosts[moduleKey]?.annual * userCount || 0),
      roiPercentage: ((moduleResults.costSaved - (licenseCosts[moduleKey]?.annual * userCount || 0)) / (licenseCosts[moduleKey]?.annual * userCount || 1)) * 100,
      savingsBreakdown: getModuleSpecificSavings(moduleKey, moduleData, hourlyRate)
    };

    return breakdown;
  };

  const getModuleUserCount = (moduleKey, moduleData) => {
    switch (moduleKey) {
      case 'm365': return moduleData.employees || 0;
      case 'github': return moduleData.developers || 0;
      case 'powerPlatform': return moduleData.businessUsers || 0;
      case 'dynamics365': return moduleData.salesReps || 0;
      case 'security': return moduleData.securityAnalysts || 0;
      default: return 0;
    }
  };

  const getDefaultHourlyRate = (moduleKey) => {
    const rates = { m365: 50, github: 75, powerPlatform: 60, dynamics365: 65, security: 80 };
    return rates[moduleKey] || 50;
  };

  const getModuleSpecificSavings = (moduleKey, moduleData, hourlyRate) => {
    switch (moduleKey) {
      case 'm365':
        return {
          emailProcessing: {
            current: `${moduleData.emailsPerDay || 0} emails/day taking 2 minutes each`,
            withCopilot: `Same emails processed 30% faster (1.4 minutes each)`,
            timeSaved: `${((moduleData.emailsPerDay || 0) * 0.6 * 5 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.emailsPerDay || 0) * 0.6 * 5 * 52 * hourlyRate)}`
          },
          documentCreation: {
            current: `${moduleData.documentsPerWeek || 0} documents/week taking 2 hours each`,
            withCopilot: `Same documents created 50% faster (1 hour each)`,
            timeSaved: `${((moduleData.documentsPerWeek || 0) * 1 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.documentsPerWeek || 0) * 1 * 52 * hourlyRate)}`
          },
          meetings: {
            current: `${moduleData.meetingsPerWeek || 0} meetings/week with 30 min prep each`,
            withCopilot: `Meeting summaries and action items automated`,
            timeSaved: `${((moduleData.meetingsPerWeek || 0) * 0.5 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.meetingsPerWeek || 0) * 0.5 * 52 * hourlyRate)}`
          }
        };
      
      case 'github':
        return {
          codeGeneration: {
            current: `Writing code manually takes 6 hours/day per developer`,
            withCopilot: `30% faster code completion and generation`,
            timeSaved: `${((moduleData.developers || 0) * 1.8 * 5 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.developers || 0) * 1.8 * 5 * 52 * hourlyRate)}`
          },
          debugging: {
            current: `${moduleData.bugsPerMonth || 0} bugs/month taking 3 hours each to fix`,
            withCopilot: `Bug fixes 40% faster with AI suggestions`,
            timeSaved: `${((moduleData.bugsPerMonth || 0) * 1.2 * 12).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.bugsPerMonth || 0) * 1.2 * 12 * hourlyRate)}`
          },
          codeReview: {
            current: `${moduleData.codeReviewsPerWeek || 0} reviews/week taking 1 hour each`,
            withCopilot: `Automated code analysis reduces review time by 50%`,
            timeSaved: `${((moduleData.codeReviewsPerWeek || 0) * 0.5 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.codeReviewsPerWeek || 0) * 0.5 * 52 * hourlyRate)}`
          }
        };
      
      case 'powerPlatform':
        return {
          appDevelopment: {
            current: `${moduleData.appsPerMonth || 0} apps/month taking 40 hours each to build`,
            withCopilot: `AI-assisted development reduces time by 60%`,
            timeSaved: `${((moduleData.appsPerMonth || 0) * 24 * 12).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.appsPerMonth || 0) * 24 * 12 * hourlyRate)}`
          },
          flowAutomation: {
            current: `${moduleData.flowsPerMonth || 0} flows/month taking 8 hours each to create`,
            withCopilot: `Natural language flow creation saves 50% time`,
            timeSaved: `${((moduleData.flowsPerMonth || 0) * 4 * 12).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.flowsPerMonth || 0) * 4 * 12 * hourlyRate)}`
          }
        };
      
      case 'dynamics365':
        return {
          leadQualification: {
            current: `${moduleData.leadsPerWeek || 0} leads/week taking 30 min each to qualify`,
            withCopilot: `AI lead scoring and insights save 40% time`,
            timeSaved: `${((moduleData.leadsPerWeek || 0) * 0.2 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.leadsPerWeek || 0) * 0.2 * 52 * hourlyRate)}`
          },
          customerInsights: {
            current: `${moduleData.customerInteractions || 0} interactions/week taking 15 min each to log`,
            withCopilot: `Auto-generated summaries and next steps`,
            timeSaved: `${((moduleData.customerInteractions || 0) * 0.1 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.customerInteractions || 0) * 0.1 * 52 * hourlyRate)}`
          }
        };
      
      case 'security':
        return {
          threatAnalysis: {
            current: `${moduleData.threatsPerWeek || 0} threats/week taking 2 hours each to analyze`,
            withCopilot: `AI-powered analysis reduces time by 60%`,
            timeSaved: `${((moduleData.threatsPerWeek || 0) * 1.2 * 52).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.threatsPerWeek || 0) * 1.2 * 52 * hourlyRate)}`
          },
          incidentResponse: {
            current: `${moduleData.incidentsPerMonth || 0} incidents/month taking 5 hours each`,
            withCopilot: `Automated playbooks and responses save 50% time`,
            timeSaved: `${((moduleData.incidentsPerMonth || 0) * 2.5 * 12).toFixed(0)} hours/year`,
            costSaved: `$${formatCurrency((moduleData.incidentsPerMonth || 0) * 2.5 * 12 * hourlyRate)}`
          }
        };
      
      default:
        return {};
    }
  };

  const generatePDF = async () => {
    setDownloading('pdf');
    try {
      const pdf = new jsPDF();
      const companyName = formData.company?.companyName || 'Your Organization';
      let yPos = 30;
      
      // Title page
      pdf.setFontSize(24);
      pdf.setTextColor(0, 120, 212);
      pdf.text('Microsoft Copilot ROI Report', 20, yPos);
      
      yPos += 20;
      pdf.setFontSize(18);
      pdf.setTextColor(0, 0, 0);
      pdf.text(companyName, 20, yPos);
      
      yPos += 15;
      pdf.setFontSize(12);
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, yPos);
      pdf.text(`Industry: ${formData.company?.industry || 'Not specified'}`, 20, yPos + 10);
      pdf.text(`Company Size: ${formData.company?.companySize || 'Not specified'}`, 20, yPos + 20);
      
      // Executive Summary
      yPos += 50;
      pdf.setFontSize(16);
      pdf.setTextColor(0, 120, 212);
      pdf.text('Executive Summary', 20, yPos);
      
      yPos += 15;
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      const totalLicenseCost = Object.entries(results).filter(([key]) => key !== 'total').reduce((sum, [key, value]) => {
        const userCount = getModuleUserCount(key, formData[key]);
        const licenseCosts = getCopilotLicenseCosts();
        return sum + (licenseCosts[key]?.annual * userCount || 0);
      }, 0);
      
      const summaryData = [
        `Total Annual Time Saved: ${results.total.timeSaved.toLocaleString()} hours`,
        `Total Annual Cost Saved: $${formatCurrency(results.total.costSaved)}`,
        `Total Annual License Investment: $${formatCurrency(totalLicenseCost)}`,
        `Net Annual Savings: $${formatCurrency(results.total.costSaved - totalLicenseCost)}`,
        `ROI Percentage: ${(((results.total.costSaved - totalLicenseCost) / totalLicenseCost) * 100).toFixed(1)}%`,
        `Payback Period: ${((totalLicenseCost / results.total.costSaved) * 12).toFixed(1)} months`,
        `Daily Time Savings: ${(results.total.timeSaved / 365).toFixed(1)} hours`,
        `Weekly Time Savings: ${Math.floor(results.total.timeSaved / 52).toLocaleString()} hours`,
        `Monthly Cost Savings: $${formatCurrency(results.total.costSaved / 12)}`,
        `ROI Score: ${Math.round(results.total.score)}/100`,
        `Efficiency Badge: ${results.total.badge}`
      ];
      
      summaryData.forEach((line, index) => {
        if (yPos > 250) {
          pdf.addPage();
          yPos = 30;
        }
        pdf.text(line, 20, yPos + (index * 8));
      });

      // Detailed Product Analysis
      Object.entries(results).forEach(([key, value]) => {
        if (key === 'total') return;
        
        pdf.addPage();
        const breakdown = getDetailedBreakdown(key, value, formData[key]);
        
        yPos = 30;
        pdf.setFontSize(18);
        pdf.setTextColor(0, 120, 212);
        pdf.text(breakdown.module, 20, yPos);
        
        yPos += 20;
        pdf.setFontSize(14);
        pdf.setTextColor(0, 0, 0);
        pdf.text('Investment Analysis', 20, yPos);
        
        yPos += 15;
        pdf.setFontSize(11);
        const investmentData = [
          `Users: ${breakdown.users.toLocaleString()}`,
          `Monthly License Cost: $${formatCurrency(breakdown.licenseCostMonthly)}`,
          `Annual License Cost: $${formatCurrency(breakdown.licenseCostAnnual)}`,
          `Annual Time Saved: ${breakdown.timeSavedHours.toLocaleString()} hours`,
          `Annual Cost Saved: $${formatCurrency(breakdown.costSaved)}`,
          `Net Annual Savings: $${formatCurrency(breakdown.netSavingsAnnual)}`,
          `ROI Percentage: ${breakdown.roiPercentage.toFixed(1)}%`,
          `Cost per Hour Saved: $${(breakdown.licenseCostAnnual / breakdown.timeSavedHours).toFixed(2)}`,
          `Break-even Point: ${((breakdown.licenseCostAnnual / breakdown.costSaved) * 12).toFixed(1)} months`
        ];
        
        investmentData.forEach((line, index) => {
          pdf.text(line, 25, yPos + (index * 8));
        });
        
        yPos += investmentData.length * 8 + 20;
        
        // Detailed savings breakdown
        pdf.setFontSize(14);
        pdf.setTextColor(0, 120, 212);
        pdf.text('Detailed Time Savings Analysis', 20, yPos);
        
        yPos += 15;
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        
        Object.entries(breakdown.savingsBreakdown).forEach(([category, details]) => {
          if (yPos > 250) {
            pdf.addPage();
            yPos = 30;
          }
          
          pdf.setFontSize(12);
          pdf.setTextColor(0, 120, 212);
          pdf.text(category.charAt(0).toUpperCase() + category.slice(1), 25, yPos);
          yPos += 10;
          
          pdf.setFontSize(9);
          pdf.setTextColor(0, 0, 0);
          pdf.text(`Current: ${details.current}`, 30, yPos);
          yPos += 6;
          pdf.text(`With Copilot: ${details.withCopilot}`, 30, yPos);
          yPos += 6;
          pdf.text(`Time Saved: ${details.timeSaved}`, 30, yPos);
          yPos += 6;
          pdf.text(`Cost Saved: ${details.costSaved}`, 30, yPos);
          yPos += 15;
        });
      });

      // M365 Show Page
      pdf.addPage();
      yPos = 50;
      
      // Center the logo
      const logoWidth = 40;
      const logoHeight = 40;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const logoX = (pageWidth - logoWidth) / 2;
      
      // Add logo (Note: In a real implementation, you'd need to convert the image to base64)
      pdf.setFontSize(20);
      pdf.setTextColor(0, 120, 212);
      pdf.text('Learn More About Microsoft Copilot', 20, yPos);
      
      yPos += 30;
      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Visit M365 Show for expert insights and training', 20, yPos);
      
      yPos += 20;
      pdf.setFontSize(12);
      pdf.setTextColor(0, 120, 212);
      pdf.text('🌐 https://m365.show', 20, yPos);
      
      yPos += 30;
      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Connect with our experts:', 20, yPos);
      
      yPos += 20;
      pdf.setFontSize(12);
      pdf.text('👨‍💻 Mirko Colemberg: linkedin.com/in/m365-summit/', 20, yPos);
      pdf.text('🏢 M365 Show: linkedin.com/school/m365-show/', 20, yPos + 10);

      // Recommendations page
      pdf.addPage();
      yPos = 30;
      pdf.setFontSize(18);
      pdf.setTextColor(0, 120, 212);
      pdf.text('Implementation Recommendations', 20, yPos);
      
      yPos += 20;
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      
      const recommendations = [
        '1. Start with highest ROI modules first based on your analysis',
        '2. Implement phased rollout to maximize adoption',
        '3. Provide comprehensive training to realize full benefits',
        '4. Monitor usage metrics and productivity gains',
        '5. Establish governance and best practices',
        '6. Regular review and optimization of Copilot usage'
      ];
      
      recommendations.forEach((rec, index) => {
        pdf.text(rec, 20, yPos + (index * 15));
      });

      // Footer with social links
      yPos = 270;
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text('Generated by Microsoft Copilot ROI Calculator', 20, yPos);

      pdf.save(`${companyName.replace(/\s+/g, '_')}_Detailed_Copilot_ROI_Report.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
    setDownloading(null);
  };

  const generatePowerPoint = async () => {
    setDownloading('pptx');
    try {
      const pptx = new PptxGenJS();
      const companyName = formData.company?.companyName || 'Your Organization';
      
      // Calculate total license cost
      const totalLicenseCost = Object.entries(results).filter(([key]) => key !== 'total').reduce((sum, [key, value]) => {
        const userCount = getModuleUserCount(key, formData[key]);
        const licenseCosts = getCopilotLicenseCosts();
        return sum + (licenseCosts[key]?.annual * userCount || 0);
      }, 0);

      // Slide 1 - Title
      const slide1 = pptx.addSlide();
      slide1.addText('Microsoft Copilot ROI Analysis', { x: 1, y: 1.5, w: 8, h: 1, fontSize: 32, bold: true, align: 'center', color: '0078d4' });
      slide1.addText(companyName, { x: 1, y: 2.5, w: 8, h: 0.5, fontSize: 24, align: 'center' });
      slide1.addText(`${formData.company?.industry || 'Technology'} | ${formData.company?.companySize || '50-200'} employees`, { x: 1, y: 3.2, w: 8, h: 0.5, fontSize: 16, align: 'center', color: '666666' });
      slide1.addText(`Generated: ${new Date().toLocaleDateString()}`, { x: 1, y: 6, w: 8, h: 0.5, fontSize: 14, align: 'center', color: '666666' });

      // Slide 2 - Executive Summary
      const slide2 = pptx.addSlide();
      slide2.addText('Executive Summary', { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 28, bold: true, color: '0078d4' });
      
      const summaryData = [
        ['Metric', 'Annual Value', 'Monthly Value', 'Daily Value'],
        ['Time Saved', `${results.total.timeSaved.toLocaleString()} hours`, `${Math.floor(results.total.timeSaved/12).toLocaleString()} hours`, `${(results.total.timeSaved/365).toFixed(1)} hours`],
        ['Cost Saved', `$${formatCurrency(results.total.costSaved)}`, `$${formatCurrency(results.total.costSaved/12)}`, `$${formatCurrency(results.total.costSaved/365)}`],
        ['License Investment', `$${formatCurrency(totalLicenseCost)}`, `$${formatCurrency(totalLicenseCost/12)}`, `$${formatCurrency(totalLicenseCost/365)}`],
        ['Net Savings', `$${formatCurrency(results.total.costSaved - totalLicenseCost)}`, `$${formatCurrency((results.total.costSaved - totalLicenseCost)/12)}`, `$${formatCurrency((results.total.costSaved - totalLicenseCost)/365)}`],
        ['ROI Percentage', `${(((results.total.costSaved - totalLicenseCost) / totalLicenseCost) * 100).toFixed(1)}%`, '', ''],
        ['Payback Period', `${((totalLicenseCost / results.total.costSaved) * 12).toFixed(1)} months`, '', '']
      ];

      slide2.addTable(summaryData, { x: 0.5, y: 1.5, w: 9, h: 4, fontSize: 12 });

      // Individual product slides
      Object.entries(results).forEach(([key, value], index) => {
        if (key === 'total') return;
        
        const breakdown = getDetailedBreakdown(key, value, formData[key]);
        const slide = pptx.addSlide();
        
        slide.addText(breakdown.module, { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 24, bold: true, color: '0078d4' });
        
        const productData = [
          ['Metric', 'Value'],
          ['Users', breakdown.users.toLocaleString()],
          ['Annual License Cost', `$${formatCurrency(breakdown.licenseCostAnnual)}`],
          ['Time Saved (Annual)', `${breakdown.timeSavedHours.toLocaleString()} hours`],
          ['Cost Saved (Annual)', `$${formatCurrency(breakdown.costSaved)}`],
          ['Net Savings', `$${formatCurrency(breakdown.netSavingsAnnual)}`],
          ['ROI Percentage', `${breakdown.roiPercentage.toFixed(1)}%`],
          ['Payback Period', `${((breakdown.licenseCostAnnual / breakdown.costSaved) * 12).toFixed(1)} months`]
        ];
        
        slide.addTable(productData, { x: 1, y: 1.5, w: 8, h: 4, fontSize: 14 });
      });

      // M365 Show slide
      const m365ShowSlide = pptx.addSlide();
      m365ShowSlide.addText('Learn More About Microsoft Copilot', { x: 1, y: 1.5, w: 8, h: 1, fontSize: 28, bold: true, align: 'center', color: '0078d4' });
      m365ShowSlide.addText('Visit M365 Show for expert insights and training', { x: 1, y: 2.5, w: 8, h: 1, fontSize: 18, align: 'center' });
      m365ShowSlide.addText('🌐 https://m365.show', { x: 1, y: 3.5, w: 8, h: 0.5, fontSize: 16, align: 'center', color: '0078d4' });

      // Final slide with social links
      const finalSlide = pptx.addSlide();
      finalSlide.addText('Connect With Us', { x: 1, y: 1.5, w: 8, h: 1, fontSize: 28, bold: true, align: 'center', color: '0078d4' });
      finalSlide.addText('Follow us for more AI productivity tools and insights', { x: 1, y: 2.5, w: 8, h: 1, fontSize: 18, align: 'center' });
      finalSlide.addText('👨‍💻 Mirko Colemberg', { x: 1, y: 4, w: 8, h: 0.5, fontSize: 16, align: 'center', bold: true });
      finalSlide.addText('linkedin.com/in/m365-summit/', { x: 1, y: 4.4, w: 8, h: 0.5, fontSize: 14, align: 'center', color: '0078d4' });
      finalSlide.addText('🏢 M365 Show', { x: 1, y: 5.2, w: 8, h: 0.5, fontSize: 16, align: 'center', bold: true });
      finalSlide.addText('linkedin.com/school/m365-show/', { x: 1, y: 5.6, w: 8, h: 0.5, fontSize: 14, align: 'center', color: '0078d4' });

      await pptx.writeFile(`${companyName.replace(/\s+/g, '_')}_Detailed_Copilot_ROI_Presentation.pptx`);
    } catch (error) {
      console.error('Error generating PowerPoint:', error);
    }
    setDownloading(null);
  };

  return (
    <div className="space-y-3">
      <button
        onClick={generatePDF}
        disabled={downloading === 'pdf'}
        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <SafeIcon icon={FiFileText} className="w-4 h-4" />
        <span>{downloading === 'pdf' ? 'Generating Detailed PDF...' : 'Download Detailed PDF Report'}</span>
        {downloading !== 'pdf' && <SafeIcon icon={FiDownload} className="w-4 h-4" />}
      </button>

      <button
        onClick={generatePowerPoint}
        disabled={downloading === 'pptx'}
        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <SafeIcon icon={FiPresentation} className="w-4 h-4" />
        <span>{downloading === 'pptx' ? 'Generating Detailed PowerPoint...' : 'Download Detailed PowerPoint Report'}</span>
        {downloading !== 'pptx' && <SafeIcon icon={FiDownload} className="w-4 h-4" />}
      </button>

      <div className="text-xs text-gray-500">
        <p><strong>Enhanced reports include:</strong></p>
        <ul className="mt-1 space-y-1">
          <li>• Detailed time savings breakdown by activity</li>
          <li>• License costs and ROI calculations</li>
          <li>• Daily, weekly, monthly, and annual metrics</li>
          <li>• Per-employee productivity gains</li>
          <li>• Implementation recommendations</li>
          <li>• Payback period analysis</li>
          <li>• M365 Show resources and expert connections</li>
        </ul>
      </div>
    </div>
  );
};

export default DownloadButtons;