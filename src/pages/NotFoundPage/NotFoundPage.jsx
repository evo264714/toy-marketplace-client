import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/notfound.jpg";
import {
  FaHome,
  FaArrowLeft,
  FaSearch,
  FaExclamationTriangle,
} from "react-icons/fa";

const NotFoundPage = () => {
  const { error } = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                {/* Error Icon */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center">
                    <FaExclamationTriangle className="text-red-500 text-3xl" />
                  </div>
                </div>

                {/* Error Code */}
                <h1 className="text-8xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
                  404
                </h1>

                {/* Error Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Oops! Page Not Found
                </h2>

                {/* Error Message */}
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The page you're looking for seems to have wandered off into
                  the digital void. Don't worry, even the best explorers
                  sometimes get lost!
                </p>

                {/* Technical Error (if any) */}
                {error?.message && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
                    <p className="text-red-700 text-sm font-medium">
                      {error.message}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <FaHome className="text-lg" />
                    <span>Back to Homepage</span>
                  </Link>

                  <button
                    onClick={() => window.history.back()}
                    className="flex-1 bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-3"
                  >
                    <FaArrowLeft className="text-lg" />
                    <span>Go Back</span>
                  </button>
                </div>

                {/* Search Suggestion */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-center lg:justify-start space-x-2">
                    <FaSearch className="text-blue-500" />
                    <span>Can't find what you're looking for?</span>
                  </h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Search our website..."
                      className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors duration-300">
                      Search
                    </button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 text-center lg:text-left">
                  <p className="text-gray-600 mb-3">
                    Popular pages you might like:
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {["All Toys", "About Us", "Blogs", "Contact"].map(
                      (link) => (
                        <Link
                          key={link}
                          to={`/${link.toLowerCase().replace(" ", "")}`}
                          className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                        >
                          {link}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 hidden lg:flex">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-white p-8 text-center">
                <img
                  className="w-80 h-80 object-cover rounded-3xl shadow-2xl mb-8"
                  src={img}
                  alt="Lost in space - 404 error"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Lost in the Toy Universe?
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Even our best toys couldn't find this page. Let's get you back
                  to the fun!
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-pink-400 rounded-full opacity-20 animate-ping"></div>
                <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Border */}
          <div className="h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
        </div>

        {/* Fun Facts Section */}
        <div className="text-center mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Did You Know?
            </h4>
            <p className="text-gray-600">
              The number 404 is actually an HTTP status code that means "Not
              Found". It's like the internet's way of saying "this page is on an
              adventure of its own!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
