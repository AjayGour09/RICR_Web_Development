import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
