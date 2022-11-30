import React from "react";
import Navbar from "./Header/Navbar";
import Hero from "./Header/Hero";
import AboutHome from "./AboutHome/AboutHome";
import Project from "./Project/Project";
import BlogHome from "./BlogHome/BlogHome";
import Testimonial from "./Testimony/Testimonial";
import Partners from "./Testimony/Partners";
import Footer from "./Footer/Footer";
export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutHome />
      <Project />
      <BlogHome />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};
export default LandingPage;
