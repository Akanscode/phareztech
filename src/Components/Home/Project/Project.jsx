import React from "react";
import { products } from "../../Data/data";
import { HiOutlineChevronRight } from "react-icons/hi2";

const Project = () => {
  return (
    <div>
      <div className="bg-[#EEF3FF] w-full">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
          <div className="pt-6">
            <button className="border border-[#F736C7] h-[24px] w-[100px] rounded-md text-xs font-semibold px-2  bg-clip-text  text-transparent bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399]">
              {" "}
              Portfolio
            </button>{" "}
            <h1 className="text-[#101828] text-2xl md:text-3xl font-bold py-6">
              Featured products
            </h1>
          </div>
          <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
            {products.map((val, id) => (
              <div
                key={id}
                className="overflow-hidden transition-shadow duration-300  rounded-2xl "
              >
                <img
                  src={val.cover}
                  alt={val.title}
                  className="object-cover w-full h-36 md:h-64 shadow-lg"
                />
                <div className="pt-4">
                  <h3 className="text-[1.0rem] font-bold pb-3 text-black">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md pt-2">
                    {val.text}
                  </p>
                  <button className="mt-4 bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] text-slate-100 rounded-lg h-[44px] w-[135.5px] flex items-center justify-center gap-3 ">
                    Know more <HiOutlineChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
