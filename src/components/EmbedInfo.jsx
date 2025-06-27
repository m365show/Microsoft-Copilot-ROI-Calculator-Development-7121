import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiCopy, FiCheck, FiExternalLink } = FiIcons;

const EmbedInfo = () => {
  const [copied, setCopied] = useState(false);
  
  const embedCode = `<iframe 
  src="${window.location.origin}" 
  width="100%" 
  height="800" 
  frameborder="0" 
  style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
</iframe>`;

  const copyEmbedCode = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy embed code:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-lg p-8"
    >
      <div className="text-center mb-8">
        <div className="bg-microsoft-blue p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <SafeIcon icon={FiCode} className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Embed This Calculator
        </h2>
        <p className="text-gray-600">
          Add this ROI calculator to your website or intranet
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Embed Code</h3>
            <button
              onClick={copyEmbedCode}
              className={`
                flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all
                ${copied 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <SafeIcon icon={copied ? FiCheck : FiCopy} className="w-4 h-4" />
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-green-400 text-sm whitespace-pre">
              {embedCode}
            </code>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Features</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Fully responsive design</li>
              <li>• Works on all devices</li>
              <li>• No external dependencies</li>
              <li>• Professional appearance</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Benefits</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Engage your audience</li>
              <li>• Generate qualified leads</li>
              <li>• Demonstrate ROI value</li>
              <li>• Easy integration</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-microsoft-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
            <span>Preview in New Tab</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EmbedInfo;