import { useEffect, useState } from "react";
import LegoCity from "./../LegoCity/LegoCity";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeName, setActiveName] = useState("Lego City");
  const [loading, setLoading] = useState(true);

  const categories = [
    { name: "Lego City", icon: "🏙️", color: "from-blue-500 to-cyan-500" },
    {
      name: "Lego Architecture",
      icon: "🏛️",
      color: "from-purple-500 to-pink-500",
    },
    { name: "Lego Cars", icon: "🚗", color: "from-orange-500 to-red-500" },
  ];

  const handleTab = (name) => {
    setActiveName(name);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-marketplace-server-mu-ten.vercel.app/toys?category=${activeName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [activeName]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing Lego collections tailored for every interest and
            age group
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleTab(category.name)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:-translate-y-1 ${
                activeName === category.name
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl border border-gray-100"
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </span>

              {/* Active indicator */}
              {activeName === category.name && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
              )}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">
                Loading {activeName} toys...
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        {!loading && (
          <div className="transition-all duration-500 ease-in-out">
            <LegoCity toys={toys} />
          </div>
        )}

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-4">
              Explore our complete collection or contact us for custom Lego sets
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
              View All Collections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
