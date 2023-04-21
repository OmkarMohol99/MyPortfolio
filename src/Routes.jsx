import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";

const PortfolioRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default PortfolioRoutes;
