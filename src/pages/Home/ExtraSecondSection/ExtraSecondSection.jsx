import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExtraSecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-ping"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Amazing Kids
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent py-2">
              Playground
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A magical space where children can explore, imagine, and create
            unforgettable memories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Explore and Fun Card */}
          <div
            className="group relative"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://media.istockphoto.com/id/473313240/photo/children-playing-in-the-park-at-playground-and-communicating.jpg?s=1024x1024&w=is&k=20&c=VyQ4irpWAUvf2fxS4zXoPXqrgNc457JsIRcCSteDy_8="
                  alt="Kids playing in playground"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Explore and Have Fun!
                </h3>

                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  Our state-of-the-art playground offers a wide range of
                  exciting activities and safe equipment to keep children
                  entertained for hours. Let their imaginations run wild in our
                  vibrant, carefully designed environment.
                </p>

                {/* Features List */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Safe Equipment
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Age Zones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Creative Play</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Supervised Areas
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-300 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Pricing Card */}
          <div
            className="group relative"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-6 text-white">
                  Affordable Fun Packages
                </h3>

                {/* Pricing Highlight */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6 text-center">
                  <div className="text-white/80 text-sm mb-2">
                    Starting from
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$10</div>
                  <div className="text-white/80 text-sm">per hour</div>
                </div>

                {/* Pricing Details */}
                <div className="space-y-4 mb-8 flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-center text-white">
                      <span className="font-semibold">Standard Entry</span>
                      <span className="font-bold">$10/hr</span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">
                      Access to all basic play areas
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-center text-white">
                      <span className="font-semibold">Premium Package</span>
                      <span className="font-bold">$15/hr</span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">
                      Includes special activities & snacks
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-center text-white">
                      <span className="font-semibold">Family Pass</span>
                      <span className="font-bold">$25/hr</span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">
                      Up to 2 adults & 3 children
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Book Now</span>
                </button>

                {/* Additional Info */}
                <div className="text-center mt-4">
                  <p className="text-white/70 text-sm">
                    *Additional charges may apply for special activities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Ready for an Adventure?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your visit today and let your children experience the magic
              of our playground!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Book Your Visit
              </button>
              <button className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSecondSection;
