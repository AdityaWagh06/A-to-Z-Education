import React from 'react';
import Card from '../components/Card';

const About = () => {
  const books = [
    {
      id: 1,
      title: "Rangya | रंग्या",
      description:
        "रंग्या किंवा रंगा कोण आहे ? तो प्रतीक आहे. या व्यवस्थेकडून निर्माण झालेल्या अनास्थेचे. अंगात प्रचंड शक्ती आणि कष्ट सोसण्याची वृत्ती असताना सुद्धा, ही खोलवर रुजलेली अनास्था जी व्यवस्थेमुळे निर्माण झाली त्याचा परिणाम रंगाच्या वागण्या बोलण्यात दिसतो.....",
      imageUrl: "https://m.media-amazon.com/images/I/71xbNvB10PL._SY342_.jpg",
      amazonUrl: "https://amzn.in/d/hRRlpwe",
    },
    {
      id: 2,
      title: "Malgundcha Siddhu (मालगुंडचा सिद्धू)",
      description:
        "'मालगुंडचा सिद्धू' या कथासंग्रहातील कथा 'मालगुडी डेज' ची आठवण करुन देणा-या आहेत. कथा नायक अनंता उर्फ सि्धू हा आहे. अनंता नवोदयची परीक्षा उत्तीर्ण होतो. त्याचे रत्नागिरीला जाण्याचे नक्की होते, इथपर्यंतचा कथाभाग या संग्रहात आहे.",
      imageUrl: "https://m.media-amazon.com/images/I/61CdgGSFk4L._SY342_.jpg",
      amazonUrl: "https://amzn.in/d/5IGFSUp",
    },
    {
      id: 3,
      title: "Yoga - Khel, Chhand ani Sanskar",
      description: "योगा - खेळ, छंद आणि संस्कार",
      imageUrl: "https://m.media-amazon.com/images/I/51hWpKDUZ4L._SY342_.jpg",
      amazonUrl: "https://amzn.in/d/eFhbnht",
    },
    {
      id: 4,
      title: "Yog (Sarvansathi)",
      description: "योग सर्वांसाठी",
      imageUrl: "https://m.media-amazon.com/images/I/71fzcGCfc9L._SY342_.jpg",
      amazonUrl: "https://amzn.in/d/96HBTaG",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{' '}
            <span className="text-primary-600 dark:text-primary-400">
              A to Z Education
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              A to Z Education is a free educational platform created to provide open access
              to high-quality study materials, learning resources, and guidance for students
              across all standards. Our mission is to make education affordable, inclusive,
              and accessible to everyone.
            </p>
          </div>
        </div>

        {/* Books Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Featured{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Books
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our published works that aim to inspire and educate learners of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <Card
                key={book.id}
                title={book.title}
                description={book.description}
                buttonText="Check It"
                buttonLink={book.amazonUrl}
                imageUrl={book.imageUrl}
                imageAlt={book.title}
                className="h-full"
              />
            ))}
          </div>
        </div>

        {/* Mission & Values */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          We believe that learning should have no barriers — not cost, location, or
          circumstance. That’s why we aim to deliver reliable content, curated playlists,
          and useful materials to help every learner reach their goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To provide free, quality learning resources for all students, ensuring equal opportunities for academic success.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quality First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Every resource is carefully selected to maintain high educational standards and make learning simple and effective.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Accessibility</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Education anytime, anywhere — so no student is left behind.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 lg:p-12 text-center border border-primary-200 dark:border-primary-800">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Reach out to learn more about our mission, resources, or books featured above.
          </p>
          <a
            href="https://chat.whatsapp.com/C0TLKGQgnud4gsdE77V2mg?mode=ac_t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
