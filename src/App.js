import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Price from "./components/Price";
import Contact from "./components/Contact";
import MainContext from "./components/MainContext";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import React from "react";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<MainContext />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
      <FloatingWhatsApp
        phoneNumber="+94713031383"
        accountName="Janaka Prasad"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png"
        statusMessage="Online"
      />
    </>
  );
}

export default App;
