import React from "react";
import { FaTools, FaDoorOpen, FaCogs, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    icon: <FaDoorOpen className="text-5xl text-sky-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Fabrication de Portes et Fenêtres",
    description: "Des portes et fenêtres en aluminium de haute qualité pour un design moderne et une performance optimale."
  },
  {
    icon: <FaTools className="text-5xl text-sky-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Installation et Réparation",
    description: "Un service professionnel pour l'installation et la réparation de menuiseries en aluminium."
  },
  {
    icon: <FaCogs className="text-5xl text-sky-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Personnalisation sur Mesure",
    description: "Nous concevons des solutions adaptées à vos besoins pour un rendu esthétique et fonctionnel."
  },
  {
    icon: <FaPencilRuler className="text-5xl text-sky-700 group-hover:scale-110 transition-transform duration-300" />,
    title: "Conception et Conseil",
    description: "Nos experts vous accompagnent dans la réalisation de vos projets en aluminium."
  }
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 tracking-wide">Nos Services</h2>
      
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
