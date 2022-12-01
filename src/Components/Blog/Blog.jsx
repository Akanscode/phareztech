import React from "react";
import Navbar from "../Home/Header/Navbar";
import { HiOutlineChevronRight } from "react-icons/hi2";
import BlogContent from "./BlogContent";
import Footer from "../Home/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-full h-[450px] md:h-[500px]">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center pt-20 md:pt-32">
            <h1 className="text-[#FFFFFF] text-center font-bold text-2xl md:text-5xl md:tracking-wider">
              Our Updates
            </h1>
            <p className="max-w-sm text-center text-[0.80rem] font-normal text-[#FFFFFF] pt-4 ">
              Enter your email to get updates on all of our latest projects and
              news.
            </p>
            <form action="" className="md:w-[652px] mt-12">
              <div className="md:relative flex flex-col md:flex-row  items-center px-2 p-1 rounded-full md:bg-white md:shadow-md md:p-2 lg:pr-3">
                <input
                  placeholder="Your mail address"
                  className="w-50 md:w-full p-4 rounded-full placeholder-gray-600 bg-white ring-0 ring-offset-0 outline-none"
                  type="email"
                />

                <div className="md:pr-1.5 lg:pr-0 hidden md:flex ">
                  <button
                    type="button"
                    className="relative h-12 w-32 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative hidden md:flex items-center justify-center  gap-2 w-[100px] text-white  font-semibold ">
                      Subscribe
                      <HiOutlineChevronRight size={15} />
                    </span>
                  </button>
                </div>
                <button className="mt-4 bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] text-slate-100 rounded-full h-[44px] w-[200px] shadow-2xl flex items-center justify-center gap-3 md:hidden  ">
                  Subscribe
                  <HiOutlineChevronRight size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BlogContent />
      <Footer />
    </div>
  );
};

export default Blog;
