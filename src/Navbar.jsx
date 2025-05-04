import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo1 from "./Photos/logo.png";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInternalLink = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
        className="block px-4 py-2 hover:text-amber-500 transition-colors cursor-pointer"
      >
        {label}
      </ScrollLink>
    );
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <img src={logo1} alt="Company Logo" className="h-12 w-auto" />

        <ul className="flex space-x-6 text-gray-800 font-semibold text-lg md:text-xl">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:text-amber-500 transition-colors"
            >
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className="flex items-center px-4 py-2 hover:text-amber-500 transition-colors"
              aria-haspopup="true"
              aria-expanded={showDropdown}
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
    </nav>
  );
};

export default Navbar;
