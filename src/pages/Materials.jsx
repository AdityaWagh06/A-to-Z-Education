import React from 'react';

const Materials = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Coming Soon Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-12 lg:p-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Materials
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-8">
            Coming Soon
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            We're working hard to bring you an extensive collection of educational materials, 
            including worksheets, practice exercises, study guides, and interactive resources 
            for all standards.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Worksheets</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Printable exercises and activities</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Study Guides</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive learning resources</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Practice Tests</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Assessment and evaluation tools</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400">
            Stay tuned for updates on our materials section!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Materials;
