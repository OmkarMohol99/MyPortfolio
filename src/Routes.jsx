import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Skills from "./Pages/SkillsPage/Skills";
import Education from "./Pages/EducationPage/Education";
import Experience from "./Pages/ExperiencePage/Experience";
import Contact from "./Pages/ContactPage/Contact";

const PortfolioRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="education" element={<Education />}></Route>
        <Route path="experience" element={<Experience />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default PortfolioRoutes;
