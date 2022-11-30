import React from "react";
import Navbar from "../Home/Header/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      {/**=======navbar======== */}
      <Navbar />
      <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
        <div className=" mt-20 flex flex-col items-center justify-center">
          <h1 className="text-[1.5rem] md:text-[2.0rem] font-bold text-[#101828]">
            Sorry, we could not find that page
          </h1>
          <p className="pt-6 text-[#667085] text-[0.60rem] font-normal">
            The page you’re looking for does not exist or has been moved
          </p>
          <div className="pt-8">
            <Link to="/">
              <button className="bg-gradient-to-r from-[#F736C7] via-[#C539C4] to-[#003399] h-[48px] w-[250px] md:w-[174px] rounded-full text-[#FFFFFF] font-bold text-[12px] font-Circular capitalize ">
                {" "}
                go back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
