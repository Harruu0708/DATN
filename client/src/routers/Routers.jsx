import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Purchase from "../pages/Purchase";
import PurchaseDetails from "../pages/PurchaseDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home'/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/purchases" element={<Purchase/>} />
      <Route path="/purchases/:slug" element={<PurchaseDetails/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;