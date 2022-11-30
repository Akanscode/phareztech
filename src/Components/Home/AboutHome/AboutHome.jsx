import React from "react";
import { aboutdata } from "../../Data/data";
import { down } from "../../Data/data";

const AboutHome = () => {
  return (
    <div>
      <div className="bg-[#F5F5F5] w-full ">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:py-20">
          <div className="pt-6">
            <button className="border border-[#F736C7] h-[24px] w-[100px] rounded-md text-xs font-semibold px-2  bg-clip-text  text-transparent bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399]">
              {" "}
              About Us
            </button>
            <div className="flex md:flex-row  gap-4 py-6">
              {" "}
              <h1 className="text-[#101828] text-2xl md:text-4xl font-bold">
                Your Go-To Product Consultants
              </h1>
              <img
                src={down}
                alt="downimage"
                className="hidden md:block h-[70px]"
              />
            </div>
          </div>
          <div className=" grid gap-10 sm:grid-cols-2 md:grid-cols-2">
            {aboutdata.map((val, id) => (
              <div
                key={id}
                className="flex flex-col justify-between overflow-hidden px-4 transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
              >
                <div className="p-5">
                  <div className="flex items-center justify-center bg-[#FFC4DD] bg-opacity-30 ring-0 outline-none w-12 h-12 mb-4 rounded-full">
                    <img src={val.cover} alt={val.title} className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-bold">{val.title}</h3>
                  <p className="text-sm leading-5 max-w-md text-gray-900/50">
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
