import ToyCard from "../../ToyCard/ToyCard";

const LegoCity = ({ toys }) => {
  if (toys.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-200 shadow-lg max-w-2xl mx-auto">
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
          <p className="text-gray-600">
            We couldn't find any toys in this category. Please check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {toys.map((toy) => (
        <ToyCard key={toy._id} toy={toy} />
      ))}
    </div>
  );
};

export default LegoCity;
