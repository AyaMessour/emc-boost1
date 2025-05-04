import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import window1 from "./Photos/product/window-1.jpeg";
import window2 from "./Photos/product/window-2.jpeg";
import window3 from "./Photos/product/window-3.jpeg";
import window4 from "./Photos/product/window-4.jpeg";
import window5 from "./Photos/product/window-5.jpg";
import window6 from "./Photos/product/window-6.jpeg";
import window7 from "./Photos/product/window-12.jpg";
import window8 from "./Photos/product/window-7.jpeg";
import window9 from "./Photos/product/window-8.jpeg";
import window10 from "./Photos/product/window-9.jpg";
import window11 from "./Photos/product/window-10.jpg";
import window12 from "./Photos/product/window-11.jpg";
import window13 from "./Photos/product/window-13.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const products = [
  { id: 1, name: "Fenêtre Moderne", image: window1, description: "Design épuré avec cadre en aluminium.", category: "moderne" },
  { id: 2, name: "Fenêtre Rustique en Bois", image: window2, description: "Un style chaleureux avec du bois massif naturel.", category: "rustique" },
  { id: 3, name: "Fenêtre Minimaliste", image: window3, description: "Cadre fin et verre haute performance pour plus de lumière.", category: "moderne" },
  { id: 4, name: "Fenêtre Noire et Or", image: window4, description: "Un design luxueux avec un cadre noir et détails dorés.", category: "luxe" },
  { id: 5, name: "Fenêtre Scandinave", image: window5, description: "Inspirée du style nordique avec bois clair et finitions épurées.", category: "scandinave" },
  { id: 6, name: "Fenêtre en Baie avec Volets", image: window6, description: "Idéale pour maximiser la lumière et l'aération.", category: "classique" },
  { id: 7, name: "Fenêtre à Battant", image: window7, description: "Un système classique et efficace pour une ouverture facile.", category: "classique" },
  { id: 8, name: "Fenêtre Industrielle", image: window8, description: "Mélange de métal et de verre pour un look moderne et robuste.", category: "industriel" },
  { id: 9, name: "Fenêtre avec Store Intégré", image: window9, description: "Un design pratique avec un store intégré entre les vitres.", category: "moderne" },
  { id: 10, name: "Fenêtre Écologique", image: window10, description: "Double vitrage avec isolation thermique et phonique renforcée.", category: "écologique" },
  { id: 11, name: "Fenêtre Panoramique", image: window11, description: "Une large ouverture pour une vue imprenable.", category: "moderne" },
  { id: 12, name: "Fenêtre Coulissante", image: window12, description: "Idéale pour les petits espaces et une ouverture fluide.", category: "moderne" },
  { id: 13, name: "Fenêtre avec Vitraux", image: window13, description: "Une touche artistique avec des motifs colorés en verre.", category: "artistique" },
];

const categories = [
  { id: "all", name: "Tous" },
  { id: "moderne", name: "Moderne" },
  { id: "rustique", name: "Rustique" },
  { id: "luxe", name: "Luxe" },
  { id: "scandinave", name: "Scandinave" },
  { id: "classique", name: "Classique" },
  { id: "industriel", name: "Industriel" },
  { id: "écologique", name: "Écologique" },
];

function Windows() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Navbar />
      <section id="windows" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mt-13 font-bold text-gray-900 mb-4">
              Nos <span className="text-sky-600">Fenêtres sur Mesure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lumière naturelle, isolation optimale et design élégant pour chaque espace de vie.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-sky-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredItem(product.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-96">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {hoveredItem === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-sky-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        Voir détails <FiArrowRight />
                      </motion.button>
                    </motion.div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {product.category}
                    </span>
                    <button className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                      Demander un devis
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Specifications Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Nos Garanties Qualité</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Isolation Thermique</h4>
                <p className="text-gray-600">Réduction jusqu'à 30% des pertes énergétiques</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Étanchéité Parfaite</h4>
                <p className="text-gray-600">Protection optimale contre les intempéries</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Sécurité Renforcée</h4>
                <p className="text-gray-600">Systèmes de verrouillage haute sécurité</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Windows;