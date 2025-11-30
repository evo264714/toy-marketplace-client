import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser, FaShoppingCart, FaBell, FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/allToys", label: "All Toys" },
    ...(user ? [{ path: "/myToys", label: "My Toys" }] : []),
    ...(user ? [{ path: "/addToy", label: "Add A Toy" }] : []),
    { path: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-purple-50 shadow-lg border-b border-gray-200 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                className="h-14 w-14 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                src={logo}
                alt="Play Land Logo"
              />
              <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Play Land
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wider">
                Toy Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setActiveNav(item.path)}
                onMouseLeave={() => setActiveNav("")}
                className="relative px-5 py-2.5 font-semibold transition-all duration-300 group"
              >
                {/* Text with gradient on hover */}
                <span
                  className={`relative z-10 transition-all duration-300 ${
                    activeNav === item.path
                      ? "text-white"
                      : "text-gray-700 group-hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </span>

                {/* Animated background */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeNav === item.path
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-100"
                      : "bg-gradient-to-r from-blue-50 to-purple-50 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                ></div>

                {/* Bottom border indicator */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-4/5 ${
                    activeNav === item.path ? "w-4/5" : ""
                  }`}
                ></div>

                {/* Subtle shadow effect */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeNav === item.path
                      ? "shadow-md shadow-blue-200/50"
                      : "group-hover:shadow-sm group-hover:shadow-blue-100/50"
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* User Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <>
                {/* Notification Bell */}
                <button className="relative p-2.5 text-gray-600 hover:text-blue-600 transition-all duration-200 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200">
                  <FaBell className="text-lg" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      className="w-9 h-9 rounded-full border-2 border-blue-200 shadow-sm group-hover:border-blue-300 transition-colors duration-300"
                      title={user?.displayName}
                      src={user?.photoURL}
                      alt="User Avatar"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800 max-w-28 truncate group-hover:text-blue-600 transition-colors duration-300">
                      {user?.displayName}
                    </span>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                  <FaChevronDown className="text-gray-400 text-xs group-hover:text-blue-500 transition-colors duration-300" />
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogOut}
                  className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-red-500 hover:to-red-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 border border-gray-300 hover:border-red-300"
                >
                  Log Out
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 hover:scale-105">
                    Login
                  </button>
                </Link>
                <Link to="/registration">
                  <button className="bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 hover:scale-105">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <button className="hidden lg:flex relative p-3 text-gray-600 hover:text-blue-600 transition-all duration-200 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200">
            <FaShoppingCart className="text-lg" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold hover:bg-orange-600 transition-colors duration-200">
              3
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200"
          >
            <span
              className={`w-6 h-0.5 bg-gray-600 mb-1.5 transition-all duration-200 ${
                isMenuOpen
                  ? "rotate-45 translate-y-2 bg-blue-600"
                  : "group-hover:bg-blue-600"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-600 mb-1.5 transition-all duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100 group-hover:bg-blue-600"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-200 ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-blue-600"
                  : "group-hover:bg-blue-600"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg p-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-xl transition-all duration-200 border-l-4 border-blue-500 hover:border-white hover:translate-x-2 hover:shadow-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile User Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              {user ? (
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3 px-4 py-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full border-2 border-blue-300"
                        src={user?.photoURL}
                        alt="User Avatar"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-semibold">
                        {user?.displayName}
                      </p>
                      <p className="text-gray-600 text-sm">{user?.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:border-blue-300 hover:text-blue-600 flex items-center justify-center space-x-2">
                      <FaBell className="text-gray-500 group-hover:text-blue-500" />
                      <span>Notifications</span>
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:border-orange-300 hover:text-orange-600 flex items-center justify-center space-x-2">
                      <FaShoppingCart className="text-gray-500 group-hover:text-orange-500" />
                      <span>Cart (3)</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      handleLogOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                      Login
                    </button>
                  </Link>
                  <Link to="/registration" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold py-3 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>
    </nav>
  );
};

export default NavBar;
