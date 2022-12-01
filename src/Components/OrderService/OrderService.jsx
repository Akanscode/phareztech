import React from "react";
import Navbar from "../Home/Header/Navbar";
import { downarrow } from "../Data/data";
import { customerimg } from "../Data/data";
import { FaStar } from "react-icons/fa";
import Footer from "../Home/Footer/Footer";
const OrderService = () => {
  return (
    <div>
      {/**===========navbar section======== */}
      <Navbar />
      <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
        <div className="flex flex-col md:flex-row mt-20">
          <div className="lg:w-1/2 lg:mx-6">
            <div className="flex gap-2">
              <h2 className="font-bold text-2xl md:text-4xl max-w-md tracking-wide relative ">
                It’s time to build something exciting!
              </h2>
              <img
                src={downarrow}
                alt="/"
                className="w-[50px] h-[80px] absolute left-[450px] md:block hidden"
              />
            </div>
            <p className="text-[#667085] text-[0.60rem] font-normal max-w-sm pt-6">
              We wake up everyday thinking of how we can solve human problems
              with our users’ satisfaction in mind.
            </p>
            <div className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] p-5  w-full md:w-[300px] rounded shadow-xl -rotate-3 mt-10">
              <div className="flex space-x-1">
                <span className="text-yellow-500 w-6 h-6 ">
                  <FaStar />
                </span>
                <span className="text-yellow-500 w-6 h-6 ">
                  <FaStar />
                </span>
                <span className="text-yellow-500 w-6 h-6 ">
                  <FaStar />
                </span>
                <span className="text-yellow-500 w-6 h-6 ">
                  <FaStar />
                </span>
                <span className="text-yellow-500 w-6 h-6 ">
                  <FaStar />
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#fff] text-[0.70rem] font-normal max-w-[270px]">
                  “Amet parturient non eget lectus sed urna imperdiet adipiscing
                  vestibulum. Elementum elementum sapien nunc malesuada nisl
                  massa.”{" "}
                </p>
                <div className="pt-6 flex gap-5">
                  <img
                    src={customerimg}
                    alt="person"
                    className="rounded-full w-10 h-10 "
                  />
                  <div className="flex flex-col space-y-1">
                    <p className="text-[#FFFFFF] font-medium text-[0.60rem]">
                      Deji Raji
                    </p>
                    <p className="text-[#FFFFFF] font-normal text-[0.60rem]">
                      Co-founder, Sabitech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-400/50">
              <h1 className=" text-[1.40rem] md:text-[2.0rem] font-bold text-gray-700 capitalize">
                Get in touch today
              </h1>
              <p className="text-[#667085] font-normal text-[0.70rem] max-w-xs">
                Please submit the following details and a Phareztech
                representative will follow up with you within 24 hours.
              </p>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-[#101828]">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="block w-full px-5 py-3 mt-1 text-gray-700 placeholder-[#98A2B3] bg-white border border-[#EAECF0] rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-[#101828]">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="block w-full px-5 py-3 mt-1 text-gray-700 placeholder-[#98A2B3] bg-white border border-[#EAECF0] rounded-md  focus:outline-none "
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-[#101828]">
                    Project brief
                  </label>
                  <textarea
                    className="block w-full h-20 px-5 py-3 mt-1 text-gray-700 placeholder-[#98A2B3] bg-white border border-[#EAECF0] rounded-md md:h-48 focus:outline-none"
                    placeholder="Enter your project brief"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] rounded-full  focus:outline-none">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/**========foooter section======== */}
      <Footer />
    </div>
  );
};

export default OrderService;
