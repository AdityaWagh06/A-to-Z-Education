import React from 'react';
import Card from '../components/Card';

const Learn = () => {
  // Generate cards for standards 1-6
  const standards = [
    {
      id: 1,
      title: "Standard 2nd and 3rd बुद्धिमत्ता मंथन प्रज्ञाशोध परीक्षा ",
      imageUrl: "	https://i.ytimg.com/vi/ePAKWLo6nXg/hqdefault.jpg?s…iBKKDkwDw==&rs=AOn4CLBW0tDwu_dIIfB15wVaGom9vsAHpg",
      description: "या प्लेलिस्टमध्ये, 3 री, 2 री व इयत्तांच्या विद्यार्थ्यांना सर्वच प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत (free) असणारे बुद्धिमत्ता यातील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे.",
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1zkv9KBpEJX_gNC4TBsrdWt&si=MEaiCVuGEvaMQ0KK"
    },
    {
      id: 2,
      title: "Standard 2nd and 3rd English मंथन प्रज्ञाशोध परीक्षा ",
      imageUrl: "	https://i.ytimg.com/vi/Pi9Mhmj3144/hqdefault.jpg?s…SBlKGQwDw==&rs=AOn4CLCYN7lLfuh99xEMKOtJI9nZUAfa8g",
      description: "या प्लेलिस्टमध्ये, 3 री , 2 री  व इयत्तांच्या विद्यार्थ्यांना सर्वच प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत free असणारे English मधील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे.",
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1wZ1sHnVnIqRRnNeJOaAbbt&si=i_5CLAobZZYy1MAs"
    },
    {
      id: 3,
      title: "Standard 2nd and 3rd मराठी - मंथन प्रज्ञाशोध परीक्षा",
      imageUrl: "https://i.ytimg.com/vi/ByTSshQ6G9g/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAjtWiZqNvuPuSDOyRewzZpGthjzA",
      description: `या प्लेलिस्टमध्ये, 3 री , 2 री  व इयत्तांच्या विद्यार्थ्यांना सर्वच प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत free असणारे मराठीतील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे.`,
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1wlgqrpu0OZQMdInvMkTTGC&si=L1B82xU126gMDDjp"
    },
    {
      id: 4,
      title: "Standard 2nd and 3rd गणित मंथन प्रज्ञाशोध परीक्षा ",
      imageUrl: "https://i.ytimg.com/vi/GJODCOOIRTM/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDCInqxxzh96t_ipGFBXtFzEyfB9Q",
      description: "या प्लेलिस्टमध्ये, 3 री , 2 री  व इयत्तांच्या विद्यार्थ्यांना सर्वच प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत free असणारे गणितातील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे. ",
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1yeNfo8MJOsmJxFTiGG7c3z&si=CLpz_CxvMZwU_koo"
    },
    {
      id: 5,
      title: "Standard 4th and 5th बुद्धिमत्ता ",
      imageUrl: "	https://i.ytimg.com/vi/GMSsbjD4pX0/hqdefault.jpg?s…yATKH8wDw==&rs=AOn4CLBvt9A5x7hAOeUlaA7vx8iNOm26IA",
      description: `या प्लेलिस्टमध्ये 5 वी, 4थी च्या विद्यार्थ्यांना सर्वच #scholarship #स्पर्धा परीक्षा  #नवोदय  #सैनिकी शाळा प्रवेश #प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत free असणारे मानसिक क्षमता चाचणीतील / बुद्धिमत्ता विषयातील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे.`,
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1zxhl4NfYO1Flt0i1aLBt2M&si=mz-OTQC4mLlUjwJm"
    },
    {
      id: 6,
      title: "Standard 4th and 5th English",
      imageUrl: "https://i.ytimg.com/vi/Mc2wV_Rm-0I/hqdefault.jpg?s…yATKBkwDw==&rs=AOn4CLBDg7gwC_BId_yE-EeeaY_titPAPw",
      description: "या प्लेलिस्टमध्ये 5 वी, 4थी.5th/4th std. च्या विद्यार्थ्यांना सर्वच #scholarship #स्पर्धा परीक्षा  #नवोदय  #सैनिकी शाळा प्रवेश #प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत free असणारे English तील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे. ",
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1wUTGFElJQJEHaCvRw58Ut-&si=grKNEgubyn6rZVYT"
    },
    {
      id: 7,
      title: "Standard 4th and 5th मराठी ",
      imageUrl: "https://i.ytimg.com/vi/QEFfS_-CK8g/hqdefault.jpg?s…iATKH8wDw==&rs=AOn4CLDO0FP5FoeqnpqPkSI2LuggFL240A",
      description: "या प्लेलिस्टमध्ये 5 वी, 4थी.5th/4th std. च्या विद्यार्थ्यांना सर्वच #scholarship #स्पर्धा परीक्षा  #नवोदय  #सैनिकी शाळा प्रवेश #प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत free असणारे मराठी तील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे. ",
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1xa1vX2SB5FtMI1jn66yapG&si=EHItC-aMzmDjSHj5"
    },
    {
      id: 8,
      title: "Standard 4th and 5th गणित ",
      imageUrl: "	https://i.ytimg.com/vi/QJYBp_nAEMY/hqdefault.jpg?s…yATKFgwDw==&rs=AOn4CLBMyoGw5fyCmrSe-cM1pbEH__STNg",
      description: "या प्लेलिस्टमध्ये 5 वी, 4थी.5th/4th std. च्या विद्यार्थ्यांना सर्वच #scholarship #स्पर्धा परीक्षा  #नवोदय  #सैनिकी शाळा प्रवेश #प्रज्ञाशोध परीक्षांसाठी उपयुक्त व मोफत free असणारे गणितातील घटक, हे अगदी बेसिक पासून समजून सांगण्यात आलेले आहे.  ",
      playlistUrl: "https://youtube.com/playlist?list=PLWu5Gt-41X1wVjEvO_aZdwnx25tlnczyc&si=UyPxe-8Jme0LkCAl"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your{' '}
            <span className="text-primary-600 dark:text-primary-400">Standard</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Select your grade level to access curated video playlists, interactive lessons,
            and comprehensive study materials designed specifically for your learning journey.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {standards.map((standard) => (
            <Card
              key={standard.id}
              title={standard.title}
              description={standard.description}
              buttonText="View Playlist"
              buttonLink={standard.playlistUrl}
              imageUrl={standard.imageUrl} // ensure Card supports imageUrl
              className="h-full"
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What You'll Learn
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Our comprehensive curriculum covers all essential subjects for primary education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Subject cards */}
            {[
              { name: "Mathematics", desc: "Numbers, operations, geometry, and problem-solving" },
              { name: "Language Arts", desc: "Reading, writing, grammar, and vocabulary" },
              { name: "Science", desc: "Natural phenomena, experiments, and discovery" },
              { name: "Social Studies", desc: "History, geography, and cultural awareness" }
            ].map((subject, idx) => (
              <div className="text-center p-4" key={idx}>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{subject.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
