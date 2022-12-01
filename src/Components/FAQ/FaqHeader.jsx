import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Header/Navbar";
import FaqContent from "./FaqContent";

const FaqHeader = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-full h-[450px] md:h-[500px]">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-20">
          <div className="flex flex-col items-center justify-center space-y-5 pt-20 md:pt-32">
            <h1 className="text-[#FFFFFF] text-center font-bold text-2xl md:text-5xl md:tracking-wider capitalize">
              How can we help you?
            </h1>
            <form action="">
              <input
                autocomplete="email"
                placeholder="Type keywords to find answers"
                className="w-50 md:w-[580px] p-4 rounded-full placeholder-gray-600/30 bg-white ring-0 ring-offset-0 outline-none"
                type="email"
              />
            </form>
            <p className="max-w-md text-center text-sm font-normal text-[#FFFFFF] pt-4">
              You can also browse the Frequently asked questions below to get
              answers
            </p>
          </div>
        </div>
      </div>
      <FaqContent />
      <Footer />
    </div>
  );
};

export default FaqHeader;
