// Questionnaire data for each Microsoft Copilot module

export const questionnaireData = {
  'm365': {
    moduleId: 'm365',
    title: 'Microsoft 365 Copilot',
    color: 'blue-500',
    estimatedTime: '3-4 min',
    jobRoles: [
      'Product Manager',
      'Project Manager', 
      'Business Analyst',
      'Marketing Manager',
      'Sales Manager',
      'HR Manager',
      'Finance Analyst',
      'Operations Manager',
      'Executive Assistant',
      'Consultant',
      'Account Manager',
      'Other'
    ],
    painPoints: [
      'Email management takes too much time',
      'Creating documents from scratch',
      'Meeting preparation and follow-ups',
      'Data analysis and reporting',
      'Presentation creation',
      'Scheduling and coordination',
      'Research and information gathering',
      'Repetitive administrative tasks'
    ],
    questions: [
      {
        id: 'emailVolume',
        type: 'select',
        question: 'How many emails do you process daily?',
        options: ['0-20', '21-50', '51-100', '101-200', '200+'],
        required: true
      },
      {
        id: 'meetingsPerWeek',
        type: 'number',
        question: 'How many meetings do you attend per week?',
        min: 0,
        max: 100,
        required: true
      },
      {
        id: 'documentsPerWeek',
        type: 'number', 
        question: 'How many documents do you create/edit per week?',
        min: 0,
        max: 50,
        required: true
      },
      {
        id: 'presentationsPerMonth',
        type: 'number',
        question: 'How many presentations do you create per month?',
        min: 0,
        max: 20,
        required: true
      },
      {
        id: 'timeOnAdmin',
        type: 'scale',
        question: 'What percentage of your time is spent on administrative tasks?',
        scale: 10,
        labels: ['0-10%', '90-100%'],
        required: true
      }
    ]
  },

  'github': {
    moduleId: 'github',
    title: 'GitHub Copilot',
    color: 'gray-800',
    estimatedTime: '2-3 min',
    jobRoles: [
      'Software Engineer',
      'Senior Developer',
      'Full-Stack Developer',
      'Frontend Developer', 
      'Backend Developer',
      'DevOps Engineer',
      'Mobile Developer',
      'Data Engineer',
      'ML Engineer',
      'Technical Lead',
      'Engineering Manager',
      'Other'
    ],
    painPoints: [
      'Writing boilerplate code',
      'Debugging complex issues',
      'Learning new frameworks/languages',
      'Code reviews take too long',
      'Documentation writing',
      'Unit test creation',
      'API integration',
      'Performance optimization'
    ],
    questions: [
      {
        id: 'programmingLanguages',
        type: 'multiselect',
        question: 'Which programming languages do you use regularly?',
        options: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'C++', 'PHP', 'Ruby', 'Swift', 'Kotlin'],
        required: true
      },
      {
        id: 'codingHoursPerDay',
        type: 'select',
        question: 'How many hours do you spend coding per day?',
        options: ['1-2 hours', '3-4 hours', '5-6 hours', '7-8 hours', '8+ hours'],
        required: true
      },
      {
        id: 'codeReviewsPerWeek',
        type: 'number',
        question: 'How many code reviews do you complete per week?',
        min: 0,
        max: 50,
        required: true
      },
      {
        id: 'bugsPerMonth',
        type: 'number',
        question: 'How many bugs do you typically fix per month?',
        min: 0,
        max: 100,
        required: true
      },
      {
        id: 'learningTime',
        type: 'scale',
        question: 'How much time do you spend learning new technologies?',
        scale: 5,
        labels: ['Very little', 'Significant amount'],
        required: true
      }
    ]
  },

  'powerPlatform': {
    moduleId: 'powerPlatform',
    title: 'Power Platform Copilot',
    color: 'purple-500',
    estimatedTime: '3-4 min',
    jobRoles: [
      'Business Analyst',
      'Citizen Developer',
      'IT Business Partner',
      'Process Improvement Specialist',
      'Digital Transformation Lead',
      'Operations Manager',
      'Data Analyst',
      'Business Intelligence Analyst',
      'Workflow Coordinator',
      'Department Administrator',
      'Other'
    ],
    painPoints: [
      'Manual data entry and processing',
      'Repetitive business processes',
      'Lack of real-time dashboards',
      'Difficulty automating workflows',
      'Limited technical development skills',
      'Slow application development',
      'Data silos across departments',
      'Manual approval processes'
    ],
    questions: [
      {
        id: 'automationExperience',
        type: 'select',
        question: 'What is your experience with automation tools?',
        options: ['Beginner', 'Some experience', 'Intermediate', 'Advanced', 'Expert'],
        required: true
      },
      {
        id: 'appsPerMonth',
        type: 'number',
        question: 'How many business applications would you like to create per month?',
        min: 0,
        max: 20,
        required: true
      },
      {
        id: 'workflowsToAutomate',
        type: 'number',
        question: 'How many manual processes could benefit from automation?',
        min: 0,
        max: 50,
        required: true
      },
      {
        id: 'reportingFrequency',
        type: 'select',
        question: 'How often do you create business reports?',
        options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Ad-hoc'],
        required: true
      },
      {
        id: 'dataSourcesUsed',
        type: 'multiselect',
        question: 'Which data sources do you work with?',
        options: ['Excel', 'SharePoint', 'SQL Database', 'Salesforce', 'Dynamics 365', 'Teams', 'OneDrive', 'Other cloud services'],
        required: true
      }
    ]
  },

  'dynamics365': {
    moduleId: 'dynamics365',
    title: 'Dynamics 365 Copilot',
    color: 'green-500',
    estimatedTime: '3-4 min',
    jobRoles: [
      'Sales Representative',
      'Sales Manager',
      'Account Manager',
      'Business Development Manager',
      'Customer Success Manager',
      'Marketing Manager',
      'Customer Service Rep',
      'Field Service Technician',
      'Operations Manager',
      'CRM Administrator',
      'Other'
    ],
    painPoints: [
      'Manual lead qualification',
      'Time-consuming data entry',
      'Difficulty tracking customer interactions',
      'Complex reporting and analytics',
      'Poor lead prioritization',
      'Inconsistent follow-up processes',
      'Limited customer insights',
      'Manual sales forecasting'
    ],
    questions: [
      {
        id: 'leadsPerWeek',
        type: 'number',
        question: 'How many leads do you process per week?',
        min: 0,
        max: 500,
        required: true
      },
      {
        id: 'customerInteractions',
        type: 'number',
        question: 'How many customer interactions do you log per week?',
        min: 0,
        max: 200,
        required: true
      },
      {
        id: 'salesCycleLength',
        type: 'select',
        question: 'What is your typical sales cycle length?',
        options: ['Less than 1 month', '1-3 months', '3-6 months', '6-12 months', 'More than 1 year'],
        required: true
      },
      {
        id: 'crmUsageHours',
        type: 'select',
        question: 'How many hours per day do you spend in CRM systems?',
        options: ['Less than 1 hour', '1-2 hours', '3-4 hours', '5-6 hours', 'More than 6 hours'],
        required: true
      },
      {
        id: 'reportingTasks',
        type: 'multiselect',
        question: 'Which reporting tasks do you perform regularly?',
        options: ['Sales forecasting', 'Lead analysis', 'Customer segmentation', 'Performance dashboards', 'Pipeline reports', 'Activity reports'],
        required: true
      }
    ]
  },

  'security': {
    moduleId: 'security',
    title: 'Security Copilot',
    color: 'red-500',
    estimatedTime: '3-4 min',
    jobRoles: [
      'Security Analyst',
      'SOC Analyst',
      'Cybersecurity Specialist',
      'Information Security Manager',
      'IT Security Administrator',
      'Threat Hunter',
      'Incident Response Specialist',
      'Security Engineer',
      'CISO',
      'Risk Analyst',
      'Compliance Officer',
      'Other'
    ],
    painPoints: [
      'High volume of security alerts',
      'Time-consuming threat investigation',
      'Manual incident response processes',
      'Difficulty correlating threat intelligence',
      'Complex security report generation',
      'Keeping up with evolving threats',
      'False positive management',
      'Limited automation in security workflows'
    ],
    questions: [
      {
        id: 'alertsPerDay',
        type: 'select',
        question: 'How many security alerts do you investigate per day?',
        options: ['1-10', '11-25', '26-50', '51-100', '100+'],
        required: true
      },
      {
        id: 'incidentsPerMonth',
        type: 'number',
        question: 'How many security incidents do you handle per month?',
        min: 0,
        max: 200,
        required: true
      },
      {
        id: 'timePerInvestigation',
        type: 'select',
        question: 'Average time spent per threat investigation?',
        options: ['15-30 minutes', '30-60 minutes', '1-2 hours', '2-4 hours', '4+ hours'],
        required: true
      },
      {
        id: 'securityTools',
        type: 'multiselect',
        question: 'Which security tools do you use regularly?',
        options: ['SIEM', 'EDR/XDR', 'Threat Intelligence Platforms', 'Vulnerability Scanners', 'Network Monitoring', 'Cloud Security Tools', 'Identity Management'],
        required: true
      },
      {
        id: 'complianceReporting',
        type: 'scale',
        question: 'How much time do you spend on compliance reporting?',
        scale: 5,
        labels: ['Very little', 'Significant amount'],
        required: true
      }
    ]
  }
};

export const getModuleData = (moduleId) => {
  return questionnaireData[moduleId] || null;
};

export const getAllModules = () => {
  return Object.keys(questionnaireData);
};