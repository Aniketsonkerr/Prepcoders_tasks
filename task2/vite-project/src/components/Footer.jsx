import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white shadow-md py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-6">
        {/* About Section */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold">About</h1>
          <p className="text-gray-600">
            We are a team dedicated to providing the best products and services
            to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <ul className="text-gray-600 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-800 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-800 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-800 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-800 transition">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold">Follow Us</h1>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to="#" className="text-gray-600 hover:text-blue-600 text-2xl">
              <FaFacebookF />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-pink-600 text-2xl">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-blue-400 text-2xl">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t pt-4">
        © {new Date().getFullYear()} Sport E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
