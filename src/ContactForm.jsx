import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const phoneNumber = "212766989130"; // Remove '+' for wa.me links

  const sendToWhatsApp = () => {
    if (!name || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const text = `Bonjour, je suis ${name}. ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-100 py-12 px-6 flex flex-col md:flex-row items-start justify-center gap-12">
      {/* Form Section */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contactez-nous sur WhatsApp
        </h2>

        <input
          type="text"
          placeholder="Votre nom"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Votre message"
          className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendToWhatsApp}
          className="flex items-center justify-center gap-2 w-full bg-green-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
        >
          <FaWhatsapp size={20} /> Envoyer sur WhatsApp
        </button>
      </div>

      {/* Location & Map Section */}
      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <p className="text-lg text-gray-700 flex items-center gap-2 text-center">
          <HiOutlineLocationMarker size={24} />
          61-AV LALLA YACOUT ANGLE MUSTAPHA ELMAANI 1ER ÉTAGE N°56,
          <br /> CENTRE COMMERCIAL RIAD – CASABLANCA.
        </p>

        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.552732378734!2d-7.61796551635494!3d33.59096037320695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29dc35c1d99%3A0x3e9d3f90848a2468!2sETAGE%20N%2C%2061%20Av.%20Lalla%20Yacout%2C%20Casablanca%2020250!5e0!3m2!1sfr!2sma!4v1746352868453!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
