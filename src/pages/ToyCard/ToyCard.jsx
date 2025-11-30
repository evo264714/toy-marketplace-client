import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider"; // Adjust path as needed

const ToyCard = ({ toy }) => {
  const {
    _id,
    toyName,
    pictureURL,
    price,
    rating,
    subcategoryName,
    availableQuantity,
  } = toy;
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Get user from AuthContext

  const handleViewDetails = (id) => {
    // Check if user is logged in
    if (user) {
      // User is logged in, navigate directly to toy details
      navigate(`/toyDetails/${_id}`);
    } else {
      // User is not logged in, show login prompt
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to view toy details",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3b82f6",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
        background: "#1f2937",
        color: "white",
        customClass: {
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors",
          cancelButton:
            "bg-gray-500 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/toyDetails/${_id}`);
        }
      });
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {!imageLoaded && (
          <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
        )}
        <img
          className={`w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "block" : "hidden"
          }`}
          src={pictureURL}
          alt={toyName}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {subcategoryName}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        {/* Stock Indicator */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              availableQuantity > 10
                ? "bg-green-100 text-green-800"
                : availableQuantity > 0
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {availableQuantity > 0
              ? `${availableQuantity} in stock`
              : "Out of stock"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {toyName}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </span>
          </div>
          <div className="text-sm text-gray-500">Free shipping</div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleViewDetails(_id)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>View Details</span>
        </button>

        {/* Quick Actions */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <button className="text-gray-500 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-1 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-sm">Save</span>
          </button>

          <button className="text-gray-500 hover:text-green-500 transition-colors duration-300 flex items-center space-x-1 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ToyCard;
