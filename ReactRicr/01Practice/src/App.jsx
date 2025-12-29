import React from "react";

import "./App.css";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
