import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Microsoft Copilot ROI Calculator - Calculate Your AI Productivity Savings",
  description = "Calculate your organization's ROI with Microsoft Copilot tools. Get detailed reports showing time savings, cost reductions, and productivity gains.",
  keywords = "Microsoft Copilot, ROI Calculator, AI Productivity, M365 Copilot, GitHub Copilot, Power Platform, Dynamics 365, Security Copilot",
  canonical = "https://copilot-roi-calculator.com/",
  ogImage = "https://copilot-roi-calculator.com/og-image.jpg",
  ogType = "website",
  structuredData = null
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Microsoft Copilot ROI Calculator",
      "url": "https://copilot-roi-calculator.com/"
    },
    "author": {
      "@type": "Organization",
      "name": "M365 Show",
      "url": "https://m365.show"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Microsoft Copilot ROI Calculator" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@m365show" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;