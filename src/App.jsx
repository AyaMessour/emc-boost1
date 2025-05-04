import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Photos/logo.png";
import Worker from "./Photos/Worker.png";
import { FiMenu, FiX } from "react-icons/fi";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 py-3 h-20">
          <img src={logo} alt="Company Logo" className="h-14 w-auto" />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {menuOpen ? (
              <FiX size={30} onClick={() => setMenuOpen(false)} />
            ) : (
              <FiMenu size={30} onClick={() => setMenuOpen(true)} />
            )}
          </div>

          {/* Navigation Links */}
          <ul
            className={`md:flex md:space-x-8 text-lg font-semibold text-gray-800 absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-amber-500 transition-all block p-3 md:inline"
              >
                Home
              </button>
            </li>

            {/* Products Dropdown */}
            <li className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className="hover:text-amber-500 transition-all block p-3 md:inline flex items-center"
              >
                Produits ▼
              </button>
              {showDropdown && (
                <div
                  className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md z-20"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    to="/windows"
                    onClick={() => {
                      setShowDropdown(false);
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Fenêtre
                  </Link>
                  <Link
                    to="/cuisine"
                    onClick={() => {
                      setShowDropdown(false);
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Cuisine
                  </Link>
                  <Link
                    to="/doors"
                    onClick={() => {
                      setShowDropdown(false);
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Les Portes
                  </Link>
                </div>
              )}
            </li>

            {[
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-amber-500 transition-all block p-3 md:inline"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero / Banner Section */}
      <div
        id="home"
        className="relative w-full mt-24 bg-gradient-to-t from-sky-500 to-blue-700 flex flex-col md:flex-row items-center justify-center text-white text-center px-6 pt-12"
      >
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold bg-yellow-300 bg-clip-text p-5 m-7 text-transparent">
            Nous Construisons La Maison De Vos Rêves
          </h1>
          <p className="text-lg md:text-xl">
            Découvrez nos services de haute qualité pour vos projets de
            construction et d'aluminium.
          </p>
          <button className="bg-yellow-300 md:text-2xl text-sky-700 px-12 py-3 m-5 rounded-lg hover:bg-black hover:text-white transition-colors duration-300">
            Nos services
          </button>
        </div>
        <img
          src={Worker}
          className="w-full md:w-1/2 h-auto max-w-md"
          alt="Worker"
        />
      </div>
    </div>
  );
}

export default App;
