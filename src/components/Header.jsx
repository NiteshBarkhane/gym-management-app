import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-10 flex justify-between items-center bg-gray-900 fixed top-0 left-0 right-0 z-10">
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-2xl md:text-3xl font-bold text-white">GYM</h1>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-white">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-red-500">
          About
        </Link>

        <Link to="/gallery" className="hover:text-red-500">
          Gallery
        </Link>
        <Link to="/pricing" className="hover:text-red-500">
          Pricing
        </Link>
        <Link to="/contact" className="hover:text-red-500">
          Contact
        </Link>
      </nav>

      {/* Desktop Authentication Buttons */}
      <div className="hidden md:flex space-x-4">
        {currentUser ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={logoutUser}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-red-500 px-4 py-2 rounded text-white"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 px-4 py-2 rounded text-white"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile Navigation - Slide Down Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-6 flex flex-col items-center space-y-4 md:hidden">
          <Link
            to="/"
            className="text-white hover:text-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="text-white hover:text-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/gallery"
            className="text-white hover:text-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/pricing"
            className="text-white hover:text-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Authentication Buttons */}
          {currentUser ? (
            <button
              className="bg-red-500 text-white px-6 py-2 rounded"
              onClick={() => {
                logoutUser();
                setIsMenuOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-red-500 px-6 py-2 rounded text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 px-6 py-2 rounded text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
