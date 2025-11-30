import { useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  useTitle("All Toys");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-marketplace-server-mu-ten.vercel.app/allToys?toyName=${searchTxt}`
    )
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchTxt]);

  const handleSearch = (data) => {
    setSearchTxt(data.searchStr);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Explore All Toys
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover amazing toys from our community. Find your next favorite
          plaything!
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <form
            onSubmit={handleSubmit(handleSearch)}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <div className="flex-1 relative">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg placeholder-gray-400"
                {...register("searchStr")}
                placeholder="Search by toy name..."
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Search Toys</span>
            </button>
          </form>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-medium">Loading amazing toys...</p>
          </div>
        </div>
      )}

      {/* Results Count */}
      {!loading && (
        <div className="max-w-6xl mx-auto mb-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <p className="text-gray-700 font-semibold">
              Found <span className="text-blue-600">{toys.length}</span> toy
              {toys.length !== 1 ? "s" : ""}
              {searchTxt && (
                <span>
                  {" "}
                  for "<span className="text-purple-600">{searchTxt}</span>"
                </span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Toys Grid */}
      {!loading && toys.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {toys.map((toy) => (
              <Toy key={toy._id} toy={toy} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && toys.length === 0 && (
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1M9 7h6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              No Toys Found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTxt
                ? `We couldn't find any toys matching "${searchTxt}". Try a different search term.`
                : "No toys are currently available. Check back later!"}
            </p>
            {searchTxt && (
              <button
                onClick={() => setSearchTxt("")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllToys;
