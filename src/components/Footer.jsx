import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Logo and Site Name */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="/logo1.png"
              alt="A-to-Z Education Logo"
              className="w-24 h-24 object-contain rounded" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              A-to-Z Education
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} A-to-Z Education. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Empowering students from 2nd to 5th standard
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Built by Aditya Wagh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
