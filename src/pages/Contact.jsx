import React from 'react';

const Contact = () => {
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
                  d="M3 8l7.89 7.89a1 1 0 001.415 0L21 7M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-8">
            Coming Soon
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            We're setting up multiple ways for you to reach out to us! Soon you'll be able to 
            contact our support team, submit feedback, ask questions, and get assistance with 
            our educational resources.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a1 1 0 001.415 0L21 7M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">anandbwagh@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Direct phone assistance</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Real-time chat support</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-6 border border-primary-200 dark:border-primary-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              In the meantime...
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to explore our learning materials and educational resources. 
              We'll have our contact system ready soon!
            </p>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400">
            Thank you for your patience as we build the best support experience for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
