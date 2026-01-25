import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./Pages/DashBoards/UserDashBoard.jsx";
import RiderDashboard from "./Pages/DashBoards/RiderDashBoard.jsx";
import RestuarantDashboard from "./Pages/DashBoards/RestuarantDashboard.jsx";
import AdminDashboard from "./Pages/DashBoards/AdminDashBoard.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/rider-dashboard" element={<RiderDashboard />} />
          <Route path="/resturant-dashboard" element={<RestuarantDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;