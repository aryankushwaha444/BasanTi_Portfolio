import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="text-primary-600">Basant Kushwaha</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I am a student and teacher who motivates and guides learners in
                planning their futures, helping them understand the roadmap and
                achieve their goals with confidence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-gray-600">Per Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">85%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-3 shadow-2xl">
                <img
                  src="/images/image.jpeg"
                  alt="Profile"
                  className="max-w-xs w-full h-auto rounded-xl shadow-lg mx-auto"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
