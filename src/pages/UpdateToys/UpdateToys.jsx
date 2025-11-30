import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateToys = () => {
  const toys = useLoaderData();
  const {
    _id,
    price,
    availableQuantity,
    description,
    toyName,
    pictureURL,
    subcategoryName,
  } = toys;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onUpdate = (data) => {
    setIsSubmitting(true);
    console.log(data);
    fetch(
      `https://toy-marketplace-server-mu-ten.vercel.app/updateToys/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsSubmitting(false);
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy updated successfully",
            icon: "success",
            confirmButtonText: "Okay!",
            background: "#1f2937",
            color: "white",
            confirmButtonColor: "#3b82f6",
          });
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        Swal.fire({
          title: "Error!",
          text: "Failed to update toy",
          icon: "error",
          confirmButtonText: "Try Again",
          background: "#1f2937",
          color: "white",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Update Toy Details
          </h1>
          <p className="text-gray-600 text-lg">
            Modify your toy information below
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Toy Preview Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={pictureURL}
              alt={toyName}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {toyName}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {subcategoryName}
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  ID: {_id?.slice(-6)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Update Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <form onSubmit={handleSubmit(onUpdate)} className="space-y-6">
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Price ($) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 font-semibold">$</span>
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                    {...register("price", {
                      required: "Price is required",
                      min: { value: 0, message: "Price must be positive" },
                      pattern: {
                        value: /^\d+(\.\d{1,2})?$/,
                        message: "Please enter a valid price",
                      },
                    })}
                    defaultValue={price}
                    placeholder="0.00"
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
                {errors.price && (
                  <span className="text-red-500 text-sm">
                    {errors.price.message}
                  </span>
                )}
              </div>

              {/* Available Quantity Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Available Quantity <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                    {...register("availableQuantity", {
                      required: "Quantity is required",
                      min: { value: 0, message: "Quantity cannot be negative" },
                      pattern: {
                        value: /^\d+$/,
                        message: "Please enter a valid quantity",
                      },
                    })}
                    defaultValue={availableQuantity}
                    placeholder="0"
                    type="number"
                    min="0"
                  />
                </div>
                {errors.availableQuantity && (
                  <span className="text-red-500 text-sm">
                    {errors.availableQuantity.message}
                  </span>
                )}
              </div>

              {/* Status Indicator */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Stock Status
                </label>
                <div
                  className={`text-center py-3 rounded-xl font-semibold ${
                    availableQuantity > 10
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : availableQuantity > 0
                      ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {availableQuantity > 10
                    ? "In Stock"
                    : availableQuantity > 0
                    ? "Low Stock"
                    : "Out of Stock"}
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white resize-none h-32"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                  maxLength: {
                    value: 500,
                    message: "Description cannot exceed 500 characters",
                  },
                })}
                defaultValue={description}
                placeholder="Enter a detailed description of your toy..."
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
              <div className="text-right text-sm text-gray-500">
                {description?.length || 0}/500 characters
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Update Toy Details</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">
            All fields marked with <span className="text-red-500">*</span> are
            required
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
