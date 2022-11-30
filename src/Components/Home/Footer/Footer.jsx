import React, { useState, useEffect } from "react";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaFacebook, FaTwitter, FaGithubAlt } from "react-icons/fa";
import { circle } from "../../Data/data";
import { primarylogo } from "../../Data/data";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <div className="bg-[#FFFFFF] w-full ">
      <div className="container relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
        <div className=" flex items-center justify-center  ">
          <div className="  rounded-xl shadow-lg bg-[#003399] h-[300px] md:h-[320px] w-[300px] md:w-[600px]">
            <div className="flex flex-col items-center justify-center py-10 gap-6">
              <div className="space-y-5  ">
                <div className="flex flex-row items-center justify-center">
                  <h4 className="text-[#FFFFFF] font-semibold text-center text-[18px] md:text-[25px] relative">
                    Got an interesting idea?
                  </h4>
                  <img
                    src={circle}
                    alt="circle"
                    className=" ml-16  md:ml-32  md:h-[50px] absolute"
                  />
                </div>
                <p className="max-w-md px-6 text-center  text-sm font-normal text-[#FFFFFF] pt-4">
                  Mi velit at volutpat ligula est sit ac dui gravida. Cras nunc
                  iaculis sed commodo vel eu ut bibendum placerat. Turpis ornare
                  in justo vulputate diam fusce.
                </p>
                <div className="flex flex-row gap-2 md:gap-5 pt-6 mx-4 ">
                  <button className="flex items-center gap-3 text-[0.56rem] font-bold md:text-sm text-[#003399]  bg-[#FFFFFF] w-[150px] md:w-[200px] h-[40px] rounded-full px-6  ">
                    Order our service{" "}
                    <span>
                      <HiOutlineArrowLongRight size={12} />
                    </span>
                  </button>
                  <button className="border border-slate-50 rounded-full  text-[#FFFFFF] h-[40px] w-[120px] flex items-center gap-3 px-5 ">
                    Contact <HiOutlineArrowLongRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-10 lg:grid-cols-3 pt-10">
          <div>
            <img src={primarylogo} className="mr-5 h-10 sm:h-9" alt="logo" />

            <p className="max-w-xs mt-4 text-sm text-[#667085]">
              We wake up everyday thinking of how we can solve human problems
              with our users’ satisfaction in mind.
            </p>
            <div className="pt-4">
              <h3 className="font-bold text-[0.76rem] text-[#050607]">
                Subscribe to our newsletter
              </h3>
              <p className="max-w-xs mt-4 text-sm text-[#667085]">
                Posuere donec elementum a turpis faucibus eu velit scelerisque
                risus. Dui fringilla fermentum aliquam.
              </p>
              <div className="flex flex-col space-y-5 pt-5 sm:-mx-2">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 w-full bg-white border border-gray-300 rounded-full sm:mx-2 focus:border-[#C539C4] focus:outline-none focus:ring-opacity-40"
                  placeholder="Enter your Email Address"
                />

                <button className="bg-gradient-to-r from-[#F736C7] via-[#C539C4] to-[#003399] h-[48px] w-[250px] md:w-[174px] rounded-full text-[#FFFFFF] font-bold text-[12px]">
                  Sign up for our newsletter
                </button>
              </div>
            </div>
          </div>
          {/**=======footer link======== */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-bold text-[#003399]">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#667085]">
                <a href="/" className="hover:opacity-75">
                  {" "}
                  About Phareztech{" "}
                </a>
                <a href="/" className="hover:opacity-75">
                  {" "}
                  Blog
                </a>
                <a href="/" className="hover:opacity-75">
                  {" "}
                  Contact Us
                </a>
              </nav>
            </div>
            <div>
              <p className="font-bold text-[#003399] ">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#667085]">
                <a href="/" className="hover:opacity-75">
                  {" "}
                  Privacy Policy
                </a>
                <a href="/" className="hover:opacity-75">
                  {" "}
                  Terms of Service
                </a>
              </nav>
            </div>
            <div>
              <p className="font-bold text-[#003399]">Products</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#667085] ">
                <a href="/" className="hover:opacity-75">
                  {" "}
                  Web{" "}
                </a>
                <a href="/" className="hover:opacity-75">
                  {" "}
                  Mobile{" "}
                </a>
                <a className="hover:opacity-75" href="/">
                  {" "}
                  Platform
                </a>
                <a className="hover:opacity-75" href="/">
                  Plugin
                </a>
              </nav>
            </div>
          </div>
          {/**========footer end======= */}
        </div>
        <div className="mt-20  border-t border-gray-800/30">
          <div className="flex  md:justify-between justify-center flex-col  md:flex-row">
            <div className="flex items-center justify-center">
              <span>
                <FaFacebook size={40} className="text-[#101828] p-2" />
              </span>
              <span>
                <FaTwitter size={40} className="text-[#101828] p-2" />
              </span>
              <span>
                <FaGithubAlt size={40} className="text-[#101828] p-2" />
              </span>
            </div>
            <div>
              <span className="text-[#98A2B3] font-normal  ">
                Copyright &copy; {date} Phareztech. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
