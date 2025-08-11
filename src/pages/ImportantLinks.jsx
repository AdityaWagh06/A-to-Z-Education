import React from 'react';

const ImportantLinks = () => {
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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Important Links
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-8">
            Coming Soon
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            We're curating a comprehensive collection of important educational links, 
            including government portals, educational boards, useful websites, and 
            additional learning resources.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Government Portals</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Official education websites</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Educational Boards</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">CBSE, NCERT, and state boards</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Learning Resources</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">External educational platforms</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400">
            Check back soon for our curated list of important educational links!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
