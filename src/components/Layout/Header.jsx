import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiMenu, FiX } = FiIcons;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'M365 Copilot', href: '/microsoft-365-copilot' },
    { name: 'GitHub Copilot', href: '/github-copilot' },
    { name: 'Power Platform', href: '/power-platform-copilot' },
    { name: 'Dynamics 365', href: '/dynamics-365-copilot' },
    { name: 'Security Copilot', href: '/security-copilot' },
    { name: 'Stats', href: '/stats' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-microsoft-blue p-2 rounded-lg">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 leading-tight">
                  Microsoft Copilot ROI Calculator
                </h1>
                <p className="text-sm text-gray-600 leading-tight mt-1">
                  Calculate your productivity and cost savings
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? 'text-microsoft-blue bg-blue-50'
                    : 'text-gray-700 hover:text-microsoft-blue hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - M365 Show Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://m365.show"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750979416621-92dd39e7-1c17-40be-904d-1689b1bf87dc_3000x3000%20%281%29.webp"
                alt="M365 Show"
                className="h-10 w-auto"
              />
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-microsoft-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <SafeIcon icon={mobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'text-microsoft-blue bg-blue-50'
                      : 'text-gray-700 hover:text-microsoft-blue hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;