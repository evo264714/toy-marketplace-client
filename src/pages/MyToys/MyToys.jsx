import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "../MyToy/MyToy";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortValue, setSortValue] = useState(1);
  const [loading, setLoading] = useState(true);
  useTitle("My Toys");

  const onSelectChange = (event) => {
    const SortData = event.target.value;
    setSortValue(SortData);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-marketplace-server-mu-ten.vercel.app/myToys/${user?.email}?sort=${sortValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user, sortValue]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      background: "#1f2937",
      color: "white",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-mu-ten.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your toy has been deleted.",
                icon: "success",
                background: "#1f2937",
                color: "white",
              });
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-8 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Toys Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manage and organize your toy listings in one place
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats and Sort Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-3">
                <svg
                  className="w-6 h-6 text-white"
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
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {myToys.length}
                </p>
                <p className="text-gray-600 text-sm">Total Toys Listed</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-gray-700">
                Sort by Price:
              </span>
              <div className="relative">
                <select
                  onChange={(e) => onSelectChange(e)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl py-3 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  name="sortData"
                >
                  <option value="1">High to Low</option>
                  <option value="-1">Low to High</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Loading your toys...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && myToys.length === 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center border border-white/20">
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
              You haven't added any toys yet. Start building your collection!
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Add Your First Toy
            </button>
          </div>
        )}

        {/* Toys Grid */}
        {!loading && myToys.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {myToys.map((myToy) => (
              <MyToy
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyToys;
