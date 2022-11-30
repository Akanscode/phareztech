import React from "react";
import { testimonial } from "../../Data/data";
import { HiOutlineStar } from "react-icons/hi2";

const Testimonial = () => {
  return (
    <div>
      <div className="bg-[#303030] w-full">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
          <div className="pt-6">
            <button className="border border-[#FFFFFF] h-[24px] w-[100px] rounded-md text-xs font-semibold px-2  text-[#FFFFFF]">
              {" "}
              Testimonials
            </button>{" "}
            <h1 className="text-[#FFFFFF] text-2xl md:text-3xl font-bold py-6">
              Our happy clients
            </h1>
          </div>
          <div className="grid gap-8 md:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
            {testimonial.map((val, id) => (
              <div
                key={id}
                className="overflow-hidden transition-shadow duration-300 bg-[#FFFFFF] p-4 shadow-xl  rounded-md"
              >
                <div className="flex space-x-2 py-4">
                  <HiOutlineStar size={15} className="text-[#F59E0B]" />
                  <HiOutlineStar size={15} className="text-[#F59E0B]" />
                  <HiOutlineStar size={15} className="text-[#F59E0B]" />
                  <HiOutlineStar size={15} className="text-[#F59E0B]" />
                  <HiOutlineStar size={15} className="text-[#F59E0B]" />
                </div>
                <p className="text-[#101828] max-w-xs text-xs pb-2">
                  {val.text}
                </p>
                <div className="flex gap-2  ">
                  <img
                    src={val.cover}
                    alt={val.customerName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="mr-3 flex flex-col ">
                    <p className="text-[#101828] font-medium">
                      {" "}
                      {val.customerName}
                    </p>
                    <p className="text-[#101828] font-normal text-[0.60rem]">
                      {val.skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
