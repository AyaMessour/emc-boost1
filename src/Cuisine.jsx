import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import kitchenImage1 from "./Photos/product/kitchen-1.jpeg";
import kitchenImage2 from "./Photos/product/kitchen-2.jpeg";
import kitchenImage3 from "./Photos/product/kitchen-3.jpeg";
import kitchenImage4 from "./Photos/product/kitchen-4.jpeg";
import kitchenImage5 from "./Photos/product/kitchen-5.jpeg";
import kitchenImage6 from "./Photos/product/kitchen-6.jpeg";
import kitchenImage7 from "./Photos/product/kitchen-7.jpeg";
import kitchenImage8 from "./Photos/product/kitchen-8.jpg";
import kitchenImage9 from "./Photos/product/kitchen-9.jpg";
import kitchenImage10 from "./Photos/product/kitchen-10.jpg";
import kitchenImage11 from "./Photos/product/kitchen-11.jpg";
import kitchenImage12 from "./Photos/product/kitchen-12.jpg";
import kitchenImage13 from "./Photos/product/kitchen-13.jpg";
import kitchenImage14 from "./Photos/product/kitchen-14.jpg";
import kitchenImage15 from "./Photos/product/kitchen-15.jpg";
import kitchenImage16 from "./Photos/product/kitchen-16.jpg";
import kitchenImage18 from "./Photos/product/kitchen-17.jpg";
import kitchenImage19 from "./Photos/product/kitchen-18.jpg";
import kitchenImage17 from "./Photos/product/kitchen-19.jpg";
import kitchenImage20 from "./Photos/product/kitchen-20.jpg";
import kitchenImage21 from "./Photos/product/kitchen-21.jpg";
import kitchenImage22 from "./Photos/product/kitchen-22.jpg";
import kitchenImage23 from "./Photos/product/kitchen-23.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const products = [
  { id: 1, name: "Cuisine Moderne Blanche", image: kitchenImage1, description: "Design épuré avec finitions en marbre.", category: "moderne" },
  { id: 2, name: "Cuisine Rustique en Bois", image: kitchenImage2, description: "Un style chaleureux et authentique en bois massif.", category: "rustique" },
  { id: 3, name: "Cuisine Minimaliste", image: kitchenImage3, description: "Espaces optimisés et lignes modernes.", category: "moderne" },
  { id: 4, name: "Cuisine Noire et Or", image: kitchenImage4, description: "Un design luxueux avec une touche dorée.", category: "luxe" },
  { id: 5, name: "Cuisine Scandinave", image: kitchenImage5, description: "Inspirée du style nordique avec bois clair et blanc.", category: "scandinave" },
  { id: 6, name: "Cuisine en U avec îlot", image: kitchenImage6, description: "Idéale pour les grands espaces et les familles.", category: "moderne" },
  { id: 7, name: "Cuisine en L", image: kitchenImage7, description: "Parfaite pour optimiser l'espace dans les coins.", category: "moderne" },
  { id: 8, name: "Cuisine industrielle", image: kitchenImage8, description: "Mélange de métal, bois et béton pour un look moderne.", category: "industriel" },
  { id: 9, name: "Cuisine avec bar", image: kitchenImage9, description: "Un coin repas intégré pour plus de convivialité.", category: "moderne" },
  { id: 10, name: "Cuisine verte naturelle", image: kitchenImage10, description: "Une touche de nature avec des finitions bois et vert.", category: "nature" },
  { id: 11, name: "Cuisine bleue élégante", image: kitchenImage11, description: "Un design unique avec des teintes apaisantes.", category: "moderne" },
  { id: 12, name: "Cuisine compacte", image: kitchenImage12, description: "Idéale pour les petits appartements et studios.", category: "compact" },
  { id: 13, name: "Cuisine laquée", image: kitchenImage13, description: "Brillance et modernité pour une ambiance haut de gamme.", category: "luxe" },
  { id: 14, name: "Cuisine avec placards ouverts", image: kitchenImage14, description: "Design aéré avec des rangements accessibles.", category: "moderne" },
  { id: 15, name: "Cuisine avec mur en brique", image: kitchenImage15, description: "Un look industriel et tendance avec du caractère.", category: "industriel" },
  { id: 16, name: "Cuisine vintage", image: kitchenImage16, description: "Un retour aux années 50 avec une touche rétro.", category: "vintage" },
  { id: 17, name: "Cuisine monochrome", image: kitchenImage17, description: "Un style uniforme pour une décoration épurée.", category: "moderne" },
  { id: 18, name: "Cuisine ultra-moderne", image: kitchenImage18, description: "Haute technologie et finitions high-tech.", category: "moderne" },
  { id: 19, name: "Cuisine bohème", image: kitchenImage19, description: "Un mélange de styles éclectique et chaleureux.", category: "bohème" },
  { id: 20, name: "Cuisine en inox", image: kitchenImage20, description: "Professionnelle et résistante, idéale pour les chefs.", category: "professionnel" },
  { id: 21, name: "Cuisine avec verrière", image: kitchenImage21, description: "Séparation élégante entre cuisine et salon.", category: "moderne" },
  { id: 22, name: "Cuisine asymétrique", image: kitchenImage22, description: "Un design unique avec des formes originales.", category: "moderne" },
  { id: 23, name: "Cuisine Art Déco", image: kitchenImage23, description: "Un style inspiré des années 20 avec des motifs dorés.", category: "luxe" },
];

const categories = [
  { id: "all", name: "Tous" },
  { id: "moderne", name: "Moderne" },
  { id: "rustique", name: "Rustique" },
  { id: "luxe", name: "Luxe" },
  { id: "scandinave", name: "Scandinave" },
  { id: "industriel", name: "Industriel" },
  { id: "vintage", name: "Vintage" },
];

function Cuisine() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Navbar />
      <section id="cuisine" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-14 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos <span className="text-sky-600">Cuisines d'Exception</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre collection exclusive de cuisines sur mesure, alliant esthétique et fonctionnalité.
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
                <div className="relative overflow-hidden h-77">
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

          {/* CTA Section */}
          
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cuisine;