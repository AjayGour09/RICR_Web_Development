import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./Pages/DashBoards/UserDashBoard.jsx";
import RiderDashboard from "./Pages/DashBoards/RiderDashBoard.jsx";
import ResturantDashboard from "./Pages/DashBoards/RestuarantDashboards.jsx";
import AdminDashboard from "./Pages/DashBoards/AdminDashBoard.jsx";
import OrderNow from "./Pages/OrderNow.jsx";
import RestaurantDisplayMenu from "./Pages/RestaurantDisplayMenu.jsx";
import NotFound from "./Pages/NotFound.jsx";

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
          <Route path="/resturant-dashboard" element={<ResturantDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/order-now" element={<OrderNow />} />
          <Route path="/restaurant/:id" element={<RestaurantDisplayMenu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;