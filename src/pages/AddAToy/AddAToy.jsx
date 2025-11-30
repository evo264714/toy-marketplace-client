import { useForm } from "react-hook-form";
import "./AddAToy.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useTitle("Add A Toy");

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://toy-marketplace-server-mu-ten.vercel.app/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "Okay!",
          });
          reset(); // Reset form after successful submission
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Add New Toy</h1>
          <p className="text-gray-600 text-lg">
            Share your amazing toy with the community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Picture URL <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  {...register("pictureURL", {
                    required: "Picture URL is required",
                  })}
                  placeholder="Enter Image URL"
                />
                {errors.pictureURL && (
                  <span className="text-red-500 text-sm">
                    {errors.pictureURL.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Toy Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  {...register("toyName", { required: "Toy name is required" })}
                  placeholder="Enter toy name"
                />
                {errors.toyName && (
                  <span className="text-red-500 text-sm">
                    {errors.toyName.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Seller Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  {...register("sellerName", {
                    required: "Seller name is required",
                  })}
                  placeholder="Your full name"
                />
                {errors.sellerName && (
                  <span className="text-red-500 text-sm">
                    {errors.sellerName.message}
                  </span>
                )}
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Seller Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600"
                  value={user?.email || ""}
                  {...register("sellerEmail")}
                  type="email"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  {...register("subcategoryName", {
                    required: "Category is required",
                  })}
                >
                  <option value="">Select a category</option>
                  <option value="Lego City">Lego City</option>
                  <option value="Lego Architecture">Lego Architecture</option>
                  <option value="Lego Cars">Lego Cars</option>
                </select>
                {errors.subcategoryName && (
                  <span className="text-red-500 text-sm">
                    {errors.subcategoryName.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Price ($) <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "Price must be positive" },
                  })}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                />
                {errors.price && (
                  <span className="text-red-500 text-sm">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Rating <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  {...register("rating", {
                    required: "Rating is required",
                    min: { value: 1, message: "Minimum rating is 1" },
                    max: { value: 5, message: "Maximum rating is 5" },
                  })}
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  placeholder=""
                />
                {errors.rating && (
                  <span className="text-red-500 text-sm">
                    {errors.rating.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Available Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  {...register("availableQuantity", {
                    required: "Quantity is required",
                    min: { value: 1, message: "Quantity must be at least 1" },
                  })}
                  type="number"
                  min="1"
                  placeholder="10"
                />
                {errors.availableQuantity && (
                  <span className="text-red-500 text-sm">
                    {errors.availableQuantity.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Brief description of the toy"
                />
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Toy to Marketplace
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="text-center text-gray-600">
          <p className="text-sm">
            All fields marked with <span className="text-red-500">*</span> are
            required
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
