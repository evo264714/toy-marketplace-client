import backgroundImage from "../../../assets/banner.jpg";
import { useState, useEffect } from "react";

const Banner = () => {
  const [currentText, setCurrentText] = useState(0);

  const taglines = [
    "Discover Amazing Toys for Every Child",
    "Quality Toys for Endless Fun",
    "Where Imagination Comes to Life",
    "Bringing Joy to Childhood Moments",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-1/4 right-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-red-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Welcome To
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Play Land
                </span>
              </h1>

              <div className="h-16">
                <p className="text-xl md:text-2xl text-gray-200 font-medium transition-all duration-500 transform">
                  {taglines[currentText]}
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Discover the most amazing collection of educational and fun toys
              for children of all ages. Quality guaranteed, smiles delivered!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Shopping</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button className="group bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                  500+
                </div>
                <div className="text-gray-300 text-sm">Toys Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                  10K+
                </div>
                <div className="text-gray-300 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                  100%
                </div>
                <div className="text-gray-300 text-sm">Quality Guarantee</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image with Shadow Effect */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={backgroundImage}
                  alt="Kids playing with toys"
                  className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto border-4 border-white/20"
                />
              </div>

              {/* Floating Elements around image */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 opacity-80 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-2xl -rotate-12 opacity-80 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Trust Badge - Moved outside the image container */}
        <div className="flex justify-end mt-8 lg:mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 my-4 shadow-2xl border border-white/30 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-2 text-gray-800 font-semibold text-sm">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Trusted by Parents Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>

      {/* Custom animation for floating elements */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
