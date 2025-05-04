import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import logo1 from "./Photos/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleInternalLink = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false); // close mobile menu
    }, 100);
  };

  const renderNavLink = (label, id) => {
    return location.pathname !== "/" ? (
      <Link
        to="/"
        onClick={() => handleInternalLink(id)}
        className="block px-4 py-2 hover:text-amber-500 transition-colors"
      >
        {label}
      </Link>
    ) : (
      <ScrollLink
        to={id}
        smooth
        duration={500}
        offset={-100}
        onClick={() => setMenuOpen(false)}
        className="block px-4 py-2 hover:text-amber-500 transition-colors cursor-pointer"
      >
        {label}
      </ScrollLink>
    );
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <img src={logo1} alt="Company Logo" className="h-14 w-auto z-50" />

        {/* Hamburger (mobile) */}
        <div className="md:hidden z-50">
          {menuOpen ? (
            <FiX size={30} onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu size={30} onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-semibold text-lg md:text-xl">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:text-amber-500 transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className="flex items-center px-4 py-2 hover:text-amber-500 transition-colors"
            >
              Produits ▼
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-20">
                <Link
                  to="/windows"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Fenêtre
                </Link>
                <Link
                  to="/cuisine"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Cuisine
                </Link>
                <Link
                  to="/doors"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Les Portes
                </Link>
              </div>
            )}
          </li>

          <li>{renderNavLink("About", "about")}</li>
          <li>{renderNavLink("Services", "services")}</li>
          <li>{renderNavLink("Contact", "contact")}</li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 text-gray-800 font-medium text-lg space-y-1">
          <Link
            to="/"
            className="block px-4 py-2 hover:text-amber-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="w-full text-left px-4 py-2 flex justify-between items-center hover:text-amber-500"
            >
              Produits
              <span>{mobileDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {mobileDropdownOpen && (
              <div className="ml-4 space-y-1">
                <Link
                  to="/windows"
                  className="block px-4 py-1 hover:text-amber-500"
                  onClick={() => {
                    setMobileDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Fenêtre
                </Link>
                <Link
                  to="/cuisine"
                  className="block px-4 py-1 hover:text-amber-500"
                  onClick={() => {
                    setMobileDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Cuisine
                </Link>
                <Link
                  to="/doors"
                  className="block px-4 py-1 hover:text-amber-500"
                  onClick={() => {
                    setMobileDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Les Portes
                </Link>
              </div>
            )}
          </div>

          {renderNavLink("About", "about")}
          {renderNavLink("Services", "services")}
          {renderNavLink("Contact", "contact")}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
