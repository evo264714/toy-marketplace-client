import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaShare,
  FaBox,
  FaUser,
  FaEnvelope,
  FaTag,
  FaDollarSign,
  FaShippingFast,
} from "react-icons/fa";
import { useState } from "react";

const ToyDetails = () => {
  const toys = useLoaderData();
  useTitle("Toy Details");
  const {
    _id,
    toyName,
    pictureURL,
    price,
    sellerName,
    rating,
    subcategoryName,
    sellerEmail,
    description,
    availableQuantity,
  } = toys || {};
  const [selectedImage, setSelectedImage] = useState(pictureURL);
  const [quantity, setQuantity] = useState(1);

  // Mock related images - in real app, you'd get these from the API
  const relatedImages = [
    pictureURL,
    pictureURL, // In reality, these would be different images
    pictureURL,
  ];

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log(`Added ${quantity} of ${toyName} to cart`);
  };

  const handleBuyNow = () => {
    // Buy now functionality would go here
    console.log(`Buying ${quantity} of ${toyName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a
              href="/allToys"
              className="hover:text-blue-600 transition-colors"
            >
              Toys
            </a>
            <span className="mx-2">/</span>
            <a
              href={`/category/${subcategoryName}`}
              className="hover:text-blue-600 transition-colors"
            >
              {subcategoryName}
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{toyName}</span>
          </nav>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden group">
                <img
                  src={selectedImage}
                  alt={toyName}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Stock Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-2 rounded-full text-sm font-semibold ${
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
                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full flex items-center space-x-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold">{rating}</span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-4">
                {relatedImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`flex-1 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === image
                        ? "border-blue-500 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${toyName} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {subcategoryName}
                  </span>
                  <span className="text-sm text-gray-500">
                    Toy ID: {_id?.slice(-6)}
                  </span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {toyName}
                </h1>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${price}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(rating)
                            ? "fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-gray-600 ml-2">({rating})</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-3 text-lg font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(Math.min(availableQuantity, quantity + 1))
                      }
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    Max: {availableQuantity}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleAddToCart}
                  disabled={availableQuantity === 0}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-3"
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={availableQuantity === 0}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-3"
                >
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-4 pt-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <FaHeart className="text-lg" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300">
                  <FaShare className="text-lg" />
                  <span>Share</span>
                </button>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <FaShippingFast className="text-blue-500 text-xl" />
                  <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-sm text-gray-500">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaBox className="text-green-500 text-xl" />
                  <div>
                    <p className="font-semibold">Easy Returns</p>
                    <p className="text-sm text-gray-500">30-day guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Information */}
          <div className="bg-gray-50 border-t border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Seller Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <FaUser className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Seller Name</p>
                  <p className="font-semibold text-gray-900">{sellerName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-green-100 p-3 rounded-xl">
                  <FaEnvelope className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Email</p>
                  <p className="font-semibold text-gray-900">{sellerEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Suggestion */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            You Might Also Like
          </h3>
          <p className="text-gray-600 mb-8">
            Discover similar toys that might interest you
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
            View Similar Toys
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
