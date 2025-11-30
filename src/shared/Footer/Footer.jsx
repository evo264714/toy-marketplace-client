import {
  FaSkype,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                className="h-16 w-16 rounded-xl"
                src={logo}
                alt="Play Land Logo"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Play Land
                </h3>
                <p className="text-gray-300 text-sm">
                  Where Imagination Comes to Life
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for premium quality toys that inspire
              creativity, learning, and endless fun for children of all ages.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <SiTrustpilot className="text-green-400 text-xl" />
              <div>
                <div className="text-sm font-semibold">Trusted Store</div>
                <div className="text-xs text-gray-300">
                  100% Quality Guarantee
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                "About Us",
                "Our Products",
                "Special Offers",
                "New Arrivals",
                "Best Sellers",
                "Gift Cards",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-all duration-300">
                  <FaMapMarkerAlt className="text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Our Store</p>
                  <p className="text-gray-300 text-sm">
                    Badda, NotunBazar, Dhaka-1212
                  </p>
                  <p className="text-gray-300 text-sm">We Have No Branches</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-all duration-300">
                  <FaPhone className="text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-300 text-sm">+880 1XXX-XXXXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="bg-yellow-500/20 p-2 rounded-lg group-hover:bg-yellow-500/30 transition-all duration-300">
                  <FaEnvelope className="text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-300 text-sm">support@playland.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Stay Connected
            </h4>

            {/* Social Media */}
            <div className="space-y-4">
              <p className="text-gray-300">
                Follow us on social media for updates and offers
              </p>
              <div className="flex space-x-3">
                {[
                  {
                    icon: FaFacebook,
                    color: "bg-blue-600 hover:bg-blue-700",
                    href: "https://facebook.com",
                  },
                  {
                    icon: FaYoutube,
                    color: "bg-red-600 hover:bg-red-700",
                    href: "https://youtube.com",
                  },
                  {
                    icon: FaInstagram,
                    color: "bg-pink-600 hover:bg-pink-700",
                    href: "https://instagram.com",
                  },
                  {
                    icon: FaTwitter,
                    color: "bg-sky-500 hover:bg-sky-600",
                    href: "https://twitter.com",
                  },
                  {
                    icon: FaSkype,
                    color: "bg-cyan-600 hover:bg-cyan-700",
                    href: "https://skype.com",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {new Date().getFullYear()} Play Land. All rights reserved.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Refund Policy",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">We accept:</span>
              <div className="flex space-x-1">
                {["💳", "📱", "🏦", "🔒"].map((method, index) => (
                  <span key={index} className="text-lg">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500"></div>
    </footer>
  );
};

export default Footer;
