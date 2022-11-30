import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Header/Navbar";
import ProductContent from "./ProductContent";

const ProductHeader = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-full h-[450px] md:h-[500px]">
        <div className="relative container mx-auto px-6 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-16">
          <div className="flex flex-col items-center justify-center space-y-5 pt-20 md:pt-32">
            <h1 className="text-[#FFFFFF] text-center font-bold text-2xl md:text-5xl md:tracking-wider">
              Our Products
            </h1>
            <p className="max-w-md text-center text-sm font-normal text-[#FFFFFF] pt-4">
              Egestas quam ut aliquet in adipiscing donec at. Amet et adipiscing
              nec diam adipiscing tempor, maecenas mauris. Aliquet sapien et.
            </p>
          </div>
        </div>
      </div>
      <ProductContent />
      <Footer />
    </div>
  );
};

export default ProductHeader;
