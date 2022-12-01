import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { heroimage } from "../../Data/data";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-full h-[900px] md:h-[1068px] ">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center pt-32 md:pt-40">
            <h6 className="text-[#EEF3FF] text-sm text-center pb-4 capitalize  ">
              Welcome to Phareztech
            </h6>
            <h1 className="text-[#FFFFFF] text-center font-bold text-2xl md:text-5xl md:tracking-wider capitalize ">
              Convert your wireframes to
            </h1>
            <h1 className="md:text-center  text-[#FFFFFF]  font-bold text-2xl md:text-5xl md:tracking-wider pt-4 capitalize">
              enterprise applications
            </h1>
            <p className="max-w-md text-center text-sm font-normal text-[#FFFFFF] pt-4">
              Giving life to your blueprints, making your imaginations real and
              transforming your dreamware to software
            </p>
            <div className="flex flex-row gap-2 md:gap-5  pt-6 mx-6 ">
              <button className="flex items-center gap-3 text-[0.56rem] md:text-sm  bg-[#FFFFFF] w-[150px] md:w-[200px] h-[40px] rounded-full px-6  ">
                Order our service{" "}
                <span>
                  <HiOutlineArrowLongRight size={12} />
                </span>
              </button>
              <button className="border border-slate-50 rounded-full text-[#FFFFFF] h-[40px] w-[120px] flex items-center gap-3 px-5 ">
                Contact <HiOutlineArrowLongRight size={12} />
              </button>
            </div>
            <div className="pt-5">
              <img
                src={heroimage}
                alt="heroimage"
                className=" w-auto h-auto shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
