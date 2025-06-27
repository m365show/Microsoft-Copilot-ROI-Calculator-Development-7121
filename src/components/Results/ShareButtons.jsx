import React from 'react';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCopy, FiCheck } = FiIcons;

const ShareButtons = ({ companyName, costSaved, badge }) => {
  const [copied, setCopied] = React.useState(false);
  
  const shareUrl = window.location.href;
  const shareText = `${companyName} could save $${costSaved.toLocaleString()}/year with Microsoft Copilot (${badge} efficiency level) – calculate your own ROI here!`;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <LinkedinShareButton
          url={shareUrl}
          title={shareText}
          className="hover:scale-105 transition-transform"
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={shareText}
          className="hover:scale-105 transition-transform"
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <FacebookShareButton
          url={shareUrl}
          quote={shareText}
          className="hover:scale-105 transition-transform"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </div>

      <button
        onClick={copyToClipboard}
        className={`
          w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-all
          ${copied 
            ? 'bg-green-50 border-green-300 text-green-700' 
            : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
          }
        `}
      >
        <SafeIcon icon={copied ? FiCheck : FiCopy} className="w-4 h-4" />
        <span>{copied ? 'Copied!' : 'Copy Link'}</span>
      </button>

      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
        <strong>Share text preview:</strong><br />
        {shareText}
      </div>
    </div>
  );
};

export default ShareButtons;