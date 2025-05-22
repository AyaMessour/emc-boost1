import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* À propos */}
        <div>
          <h2 className="text-xl font-bold mb-4">À propos</h2>
          <p className="text-gray-400 text-sm">
            EMC-BOOST est votre partenaire de confiance pour des solutions en menuiserie aluminium, offrant qualité et innovation.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h2 className="text-xl font-bold mb-4">Liens utiles</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="/" className="hover:text-gray-200">Accueil</a></li>
            <li><a href="#" className="hover:text-gray-200">Nos Services</a></li>
            <li><a href="#" className="hover:text-gray-200">À Propos</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Réseaux Sociaux */}
        <div>
      <h2 className="text-xl font-bold mb-4">Contact</h2>
     
      <div className="flex space-x-4 mt-4">
        <div>
          <p>ce site est réalisé par aya messour</p>
          <p>Email : ayamessour35@gmail.com</p>
        </div>
        <a
          href="https://www.linkedin.com/in/aya-messour-45b933341"
          className="text-gray-400 hover:text-gray-200 text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} EMC-BOOST. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
