import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiDroplet, FiThermometer, FiLock } from "react-icons/fi";
import kitchenImage1 from "./Photos/product/door-1.jpeg";
import kitchenImage2 from "./Photos/product/door-2.jpeg";
import kitchenImage3 from "./Photos/product/door-3.jpeg";
import kitchenImage4 from "./Photos/product/door-4.jpeg";
import kitchenImage5 from "./Photos/product/door-5.jpeg";
import kitchenImage6 from "./Photos/product/door-6.jpeg";
import kitchenImage7 from "./Photos/product/door-7.jpeg";
import kitchenImage9 from "./Photos/product/door-8.jpeg";
import kitchenImage8 from "./Photos/product/door-9.jpeg";
import kitchenImage10 from "./Photos/product/door-10.jpeg";
import kitchenImage11 from "./Photos/product/door-11.jpeg";
import kitchenImage12 from "./Photos/product/door-12.jpeg";
import kitchenImage13 from "./Photos/product/door-13.jpeg";
import kitchenImage14 from "./Photos/product/door-14.jpeg";
import kitchenImage15 from "./Photos/product/door-15.jpg";
import kitchenImage16 from "./Photos/product/door-16.jpg";
import kitchenImage17 from "./Photos/product/door-17.jpg";
import kitchenImage18 from "./Photos/product/door-18.jpg";
import kitchenImage19 from "./Photos/product/door-19.jpg";
import kitchenImage20 from "./Photos/product/door-20.jpg";
import kitchenImage21 from "./Photos/product/door-21.jpg";
import kitchenImage22 from "./Photos/product/door-22.jpg";
import kitchenImage23 from "./Photos/product/door-23.jpg";
import kitchenImage25 from "./Photos/product/door-24.jpg";
import kitchenImage24 from "./Photos/product/door-25.jpg";
import kitchenImage26 from "./Photos/product/door-26.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const products = [
  { id: 1, name: "Porte Marbre", image: kitchenImage1, description: "Design épuré avec finitions en marbre.", category: "luxe" },
  { id: 2, name: "Porte Bois Massif", image: kitchenImage2, description: "Un style chaleureux et authentique en bois massif.", category: "bois" },
  { id: 3, name: "Porte Moderne", image: kitchenImage3, description: "Espaces optimisés et lignes modernes.", category: "moderne" },
  { id: 4, name: "Porte Dorée", image: kitchenImage4, description: "Un design luxueux avec une touche dorée.", category: "luxe" },
  { id: 5, name: "Porte Nordique", image: kitchenImage5, description: "Inspirée du style nordique avec bois clair et blanc.", category: "scandinave" },
  { id: 6, name: "Grande Porte", image: kitchenImage6, description: "Idéale pour les grands espaces et les familles.", category: "sur-mesure" },
  { id: 7, name: "Porte d'Angle", image: kitchenImage7, description: "Parfaite pour optimiser l'espace dans les coins.", category: "moderne" },
  { id: 8, name: "Porte Industrielle", image: kitchenImage8, description: "Mélange de métal, bois et béton pour un look moderne.", category: "industriel" },
  { id: 9, name: "Porte Bois Authentique", image: kitchenImage9, description: "Un style chaleureux et authentique en bois massif.", category: "bois" },
  { id: 10, name: "Porte Compacte", image: kitchenImage10, description: "Espaces optimisés et lignes modernes.", category: "moderne" },
  { id: 11, name: "Porte Élégante", image: kitchenImage11, description: "Un design luxueux avec une touche dorée.", category: "luxe" },
  { id: 12, name: "Porte Nordique Bois", image: kitchenImage12, description: "Inspirée du style nordique avec bois clair et blanc.", category: "scandinave" },
  { id: 13, name: "Porte Familiale", image: kitchenImage13, description: "Idéale pour les grands espaces et les familles.", category: "sur-mesure" },
  { id: 14, name: "Porte Compacte Angle", image: kitchenImage14, description: "Parfaite pour optimiser l'espace dans les coins.", category: "moderne" },
  { id: 15, name: "Porte Mixte", image: kitchenImage15, description: "Mélange de métal, bois et béton pour un look moderne.", category: "industriel" },
  { id: 16, name: "Porte Bois Chaleureuse", image: kitchenImage16, description: "Un style chaleureux et authentique en bois massif.", category: "bois" },
  { id: 17, name: "Porte Moderne Optimisée", image: kitchenImage17, description: "Espaces optimisés et lignes modernes.", category: "moderne" },
  { id: 18, name: "Porte Luxe Dorée", image: kitchenImage18, description: "Un design luxueux avec une touche dorée.", category: "luxe" },
  { id: 19, name: "Porte Scandinave", image: kitchenImage19, description: "Inspirée du style nordique avec bois clair et blanc.", category: "scandinave" },
  { id: 20, name: "Porte Espace Large", image: kitchenImage20, description: "Idéale pour les grands espaces et les familles.", category: "sur-mesure" },
  { id: 21, name: "Porte Gain de Place", image: kitchenImage21, description: "Parfaite pour optimiser l'espace dans les coins.", category: "moderne" },
  { id: 22, name: "Porte Design Brut", image: kitchenImage22, description: "Mélange de métal, bois et béton pour un look moderne.", category: "industriel" },
  { id: 23, name: "Porte Bois Naturel", image: kitchenImage23, description: "Un style chaleureux et authentique en bois massif.", category: "bois" },
  { id: 24, name: "Porte Compacte Design", image: kitchenImage24, description: "Espaces optimisés et lignes modernes.", category: "moderne" },
  { id: 25, name: "Porte Chic Dorée", image: kitchenImage25, description: "Un design luxueux avec une touche dorée.", category: "luxe" },
  { id: 26, name: "Porte Scandinave Bois", image: kitchenImage26, description: "Inspirée du style nordique avec bois clair et blanc.", category: "scandinave" },
];

const categories = [
  { id: "all", name: "Tous" },
  { id: "moderne", name: "Moderne" },
  { id: "bois", name: "Bois" },
  { id: "luxe", name: "Luxe" },
  { id: "scandinave", name: "Scandinave" },
  { id: "industriel", name: "Industriel" },
  { id: "sur-mesure", name: "Sur Mesure" },
];

function Doors() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl  mt-14 mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos <span className="text-sky-600">Portes d'Exception</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Élégance, sécurité et performance pour chaque entrée de votre habitat
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
                <div className="relative overflow-hidden h-64">
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

          {/* Technical Features Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Nos Garanties Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-sky-100 p-3 rounded-full">
                  <FiThermometer className="text-sky-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Isolation Thermique</h4>
                  <p className="text-gray-600 text-sm">Réduction des déperditions énergétiques</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-sky-100 p-3 rounded-full">
                  <FiDroplet className="text-sky-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Étanchéité Parfaite</h4>
                  <p className="text-gray-600 text-sm">Protection contre les infiltrations</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-sky-100 p-3 rounded-full">
                  <FiLock className="text-sky-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sécurité Renforcée</h4>
                  <p className="text-gray-600 text-sm">Systèmes de verrouillage haute sécurité</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-sky-100 p-3 rounded-full">
                  <FiShield className="text-sky-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Durabilité</h4>
                  <p className="text-gray-600 text-sm">Matériaux résistants et durables</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-sky-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Un projet de porte sur mesure ?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Nos experts vous accompagnent dans le choix des matériaux, design et fonctionnalités adaptés à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold shadow-lg"
              >
                Prendre rendez-vous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold"
              >
                Demander un catalogue
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Doors;