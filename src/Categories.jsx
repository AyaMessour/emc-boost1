import React from "react";
import { FiArrowRight } from "react-icons/fi";

// Import images
import windowImage from "./Photos/product/window-1.jpeg";
import windowImage1 from "./Photos/product/window-2.jpeg";
import windowImage2 from "./Photos/product/window-13.jpg";
import doorImage from "./Photos/product/door-3.jpeg";
import doorImage2 from "./Photos/product/door-12.jpeg";
import doorImage3 from "./Photos/product/door-4.jpeg";
import kitchenImage from "./Photos/product/kitchen-1.jpeg";
import kitchenImage2 from "./Photos/product/kitchen-2.jpeg";
import kitchenImage3 from "./Photos/product/kitchen-4.jpeg";
import facadeImage from "./Photos/product/fasade-1.jpeg";
import facadeImage2 from "./Photos/product/window-7.jpeg";
import facadeImage3 from "./Photos/product/window-2.jpeg";

function Categories() {
  const categories = [
    {
      name: "Fenêtres",
      icon: "🪟",
      products: [
        {
          title: "Fenêtres en Aluminium",
          description: "Des fenêtres modernes et performantes pour votre maison.",
          image: windowImage,
          features: ["Isolation thermique", "Design élégant", "Durabilité"],
        },
        {
          title: "Fenêtres Coulissantes",
          description: "Idéales pour les petits espaces.",
          image: windowImage1,
          features: ["Gain de place", "Facile à utiliser", "Étanchéité optimale"],
        },
        {
          title: "Fenêtres à Ouverture Battante",
          description: "Classiques et fonctionnelles.",
          image: windowImage2,
          features: ["Ventilation naturelle", "Sécurité renforcée", "Esthétique traditionnelle"],
        },
      ],
    },
    {
      name: "Portes",
      icon: "🚪",
      products: [
        {
          title: "Portes d'Entrée",
          description: "Portes sécurisées et esthétiques pour chaque espace.",
          image: doorImage,
          features: ["Sécurité renforcée", "Design personnalisable", "Facile à entretenir"],
        },
        {
          title: "Portes Coulissantes",
          description: "Parfaites pour les espaces modernes.",
          image: doorImage2,
          features: ["Design minimaliste", "Fonctionnalité optimale", "Durabilité"],
        },
        {
          title: "Portes-Fenêtres",
          description: "Lumière et ouverture sur l'extérieur.",
          image: doorImage3,
          features: ["Apport lumineux", "Accès facile", "Élégance moderne"],
        },
      ],
    },
    {
      name: "Cuisines",
      icon: "🍳",
      products: [
        {
          title: "Cuisines Modernes",
          description: "Design contemporain et fonctionnel.",
          image: kitchenImage,
          features: ["Espace optimisé", "Matériaux premium", "Personnalisation"],
        },
        {
          title: "Cuisines sur Mesure",
          description: "Adaptées à vos besoins spécifiques.",
          image: kitchenImage2,
          features: ["Plans personnalisés", "Choix des matériaux", "Ergonomie"],
        },
        {
          title: "Cuisines Intégrées",
          description: "Harmonie parfaite avec votre intérieur.",
          image: kitchenImage3,
          features: ["Design fluide", "Optimisation d'espace", "Esthétique cohérente"],
        },
      ],
    },
    {
      name: "Façades",
      icon: "🏢",
      products: [
        {
          title: "Façades Vitrées",
          description: "Lumière naturelle et modernité.",
          image: facadeImage,
          features: ["Résistance aux intempéries", "Design contemporain", "Entretien minimal"],
        },
        {
          title: "Façades Aluminium",
          description: "Durabilité et esthétique.",
          image: facadeImage2,
          features: ["Longévité exceptionnelle", "Choix de finitions", "Isolation thermique"],
        },
        {
          title: "Façades sur Mesure",
          description: "Solution adaptée à votre projet.",
          image: facadeImage3,
          features: ["Conception personnalisée", "Matériaux haute qualité", "Expertise technique"],
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            Nos Produits
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez Nos <span className="text-sky-600">Solutions</span> en Aluminium
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des produits haut de gamme alliant esthétique, performance et durabilité pour tous vos projets.
          </p>
        </div>

        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-8">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h3 className="text-3xl font-semibold text-gray-800">
                {category.name}
                <span className="block w-16 h-1 bg-sky-500 mt-2"></span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-99">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="flex items-center text-sky-600 font-medium hover:text-sky-700 transition-colors">
                      En savoir plus
                      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;