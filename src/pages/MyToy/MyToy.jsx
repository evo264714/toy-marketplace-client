import { Link } from "react-router-dom";
import { useState } from "react";

const MyToy = ({ myToy, handleDelete }) => {
  const {
    _id,
    sellerName,
    toyName,
    subcategoryName,
    price,
    availableQuantity,
    pictureURL,
    description,
  } = myToy;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {!imageLoaded && (
          <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
        )}
        <img
          src={pictureURL}
          alt={toyName}
          className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? "block" : "hidden"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            {subcategoryName}
          </span>
        </div>

        {/* Quantity Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full shadow-lg ${
              availableQuantity > 10
                ? "bg-green-500 text-white"
                : availableQuantity > 0
                ? "bg-yellow-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {availableQuantity > 0
              ? `${availableQuantity} in stock`
              : "Out of stock"}
          </span>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white line-clamp-1">
              {toyName}
            </h3>
            <span className="text-2xl font-bold text-yellow-400">${price}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Seller Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {sellerName?.charAt(0)?.toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Seller</p>
            <p className="font-semibold text-gray-800 line-clamp-1">
              {sellerName}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/updateToys/${_id}`}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <span>Update</span>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>Delete</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-xs">Active Listing</span>
          </div>

          <div className="text-xs text-gray-500">ID: {_id?.slice(-6)}</div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-300 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default MyToy;
