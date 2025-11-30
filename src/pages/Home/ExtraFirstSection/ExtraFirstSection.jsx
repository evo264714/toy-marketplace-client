import { Link } from "react-router-dom";
import { useState } from "react";

const ExtraFirstSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const toysData = [
    {
      id: 1,
      title: "Interactive Learning Toys",
      description:
        "Engage and educate with interactive toys that make learning fun and exciting for young minds.",
      image: "https://m.media-amazon.com/images/I/71ky4QmEJvL._AC_SX679_.jpg",
      link: "https://www.amazon.com/Educational-Insights-Numberblocks-Interactive-Activities/dp/B0BXB6XL3D/ref=sr_1_6?keywords=interactive+toys+for+kids&qid=1684650158&sr=8-6",
      icon: "🎓",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      id: 2,
      title: "Outdoor Adventure Toys",
      description:
        "Encourage outdoor play and exploration with exciting adventure toys that spark curiosity.",
      image: "https://www.adventuretoys.co.uk/images/product/axilaura.jpg",
      link: "https://www.adventuretoys.co.uk/axi-laura-wooden-playhouse-with-slide/",
      icon: "🌳",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      id: 3,
      title: "Imaginative Playsets",
      description:
        "Enjoyable beautiful creativity and imagination with interactive playsets and role-playing toys.",
      image:
        "https://www.kidkraft.com/media/catalog/product/cache/355e4947c24c58e05deaca62df66d325/2/0/20482_rsm_1.jpg",
      link: "https://www.kidkraft.com/us_en/ultimate-spaceship-20482-pdp.html",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Amazing
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Toys for Kids
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of educational, adventurous, and
            imaginative toys that inspire creativity and learning through play.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Toys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {toysData.map((toy) => (
            <div
              key={toy.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(toy.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={toy.link}>
                {/* Main Card */}
                <div
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col ${
                    hoveredCard === toy.id ? "ring-2 ring-blue-400" : ""
                  }`}
                >
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={toy.image}
                      alt={toy.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    {/* Category Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                        <span className="text-2xl">{toy.icon}</span>
                      </div>
                    </div>

                    {/* Hover Effect Gradient */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${toy.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    ></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold bg-gradient-to-r ${toy.gradient} bg-clip-text text-transparent mb-3`}
                      >
                        {toy.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {toy.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <div
                        className={`inline-flex items-center space-x-2 bg-gradient-to-r ${toy.gradient} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg`}
                      >
                        <span>Explore Now</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                  <div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transitionDelay: "100ms" }}
                  ></div>
                </div>

                {/* Background Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${toy.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-500 transform group-hover:scale-105`}
                ></div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our complete collection of toys and discover endless
              possibilities for fun and learning.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              View All Categories
            </button>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExtraFirstSection;
