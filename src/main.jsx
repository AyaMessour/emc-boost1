import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Banner from "./Banner.jsx";
import Categories from "./Categories.jsx";
import Services from "./Services.jsx";
import ContactForm from "./ContactForm.jsx";
import Footer from "./Footer.jsx";
import Cuisine from "./Cuisine.jsx"; // <-- Ajoute tes pages ici
import Windows from "./Windows.jsx";
import Doors from "./Doors.jsx";
// import Signs from "./Signs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <App />
             
              <div id="about">
                <Banner/>
              </div>
              <Categories/>
              <div id="services">
                <Services />
              </div>
              <div id="contact">
                <ContactForm />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/windows" element={<Windows />} />
        <Route path="/doors" element={<Doors />} />
        {/* <Route path="/signs" element={<Signs />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
