import { useContext } from "react";
import { AuthContext } from "./../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id } = toy;
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="flex space-x-4">
          <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  const {
    sellerName,
    toyName,
    subcategoryName,
    price,
    availableQuantity,
    pictureURL,
  } = toy || {};

  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Card Header with Image */}
      <div className="relative overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            {subcategoryName}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {toyName}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Seller Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {sellerName?.charAt(0)?.toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Sold by</p>
            <p className="font-semibold text-gray-800">{sellerName}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center bg-blue-50 rounded-lg p-3 border border-blue-100">
            <p className="text-2xl font-bold text-blue-600">${price}</p>
            <p className="text-xs text-gray-500 font-medium">Price</p>
          </div>
          <div className="text-center bg-green-50 rounded-lg p-3 border border-green-100">
            <p className="text-2xl font-bold text-green-600">
              {availableQuantity}
            </p>
            <p className="text-xs text-gray-500 font-medium">In Stock</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex space-x-3">
          <Link
            to={`/toyDetails/${_id}`}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Toy;
