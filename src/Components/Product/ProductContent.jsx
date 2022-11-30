import React, { useState } from "react";
import { productdata } from "../Data/data";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

const ProductContent = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <div className="bg-[#F5F5F5] w-full">
        <div className="relative container mx-auto px-4 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-16">
          <div className="mt-5">
            <div className="flex flex-col md:flex-row justify-between gap-x-[20px]">
              <div className=" justify-start">
                <ul
                  className="flex mb-0 list-none gap-1 md:gap-3 pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className=" list:mr-0 ">
                    <button
                      className={
                        "  text-xs font-bold capitalize   " +
                        (openTab === 1
                          ? "rounded-full text-[0.75rem] md:text-base text-white bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-[50px] h-[20px] md:w-[70px] md:h-[40px]"
                          : "rounded-full text-[0.75rem] md:text-base bg-transparent border border-[#667085] w-[50px] h-[20px] md:w-[70px] md:h-[40px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      All
                    </button>
                  </li>
                  <li className="-mb-px list:mr-0 ">
                    <button
                      className={
                        " text-xs font-bold capitalize  " +
                        (openTab === 2
                          ? "rounded-full text-[0.75rem] md:text-base text-white p-2 bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-[60px] h-[20px]  md:w-[70px] md:h-[40px]"
                          : "rounded-full text-[0.75rem] md:text-base bg-transparent border border-[#667085] w-[60px] h-[20px]  md:w-[70px] md:h-[40px]  ")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      web
                    </button>
                  </li>
                  <li className="-mb-px list:mr-0 ">
                    <button
                      className={
                        " text-xs text-black font-bold capitalize" +
                        (openTab === 3
                          ? " rounded-full text-[0.75rem] md:text-base text-white bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-[60px] h-[20px] md:w-[80px] md:h-[40px]"
                          : " rounded-full text-[0.75rem] md:text-base bg-transparent border border-[#667085] w-[70px] h-[20px]  md:w-[80px] md:h-[40px] ")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      mobile
                    </button>
                  </li>
                  <li className="-mb-px list:mr-0 ">
                    <button
                      className={
                        " text-xs text-black font-bold capitalize " +
                        (openTab === 4
                          ? "rounded-full text-[0.75rem] md:text-base text-white p-2 bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-[80px] h-[20px] md:w-[90px] md:h-[40px]    "
                          : "rounded-full text-[0.75rem] md:text-base bg-transparent border border-[#667085] w-[80px] h-[20px] md:w-[90px] md:h-[40px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      platform
                    </button>
                  </li>
                </ul>
              </div>
              <div className="">
                {" "}
                <form action="" className="md:w-[400px]">
                  <div className="relative flex flex-row  items-center px-2 rounded-full bg-white shadow-sm p-1 md:pr-3">
                    <input
                      autocomplete="email"
                      placeholder="Your mail address"
                      className="w-50 md:w-full p-4 rounded-full placeholder-gray-600 bg-white ring-0 ring-offset-0 outline-none"
                      type="email"
                    />

                    <div className="md:pr-1.5 lg:pr-0 flex ">
                      <button
                        type="button"
                        className="relative md:h-12 h-10 w-26 md:w-32 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                      >
                        <span className="relative  flex items-center justify-center w-[40px] md:w-[50px] text-white  font-semibold ">
                          <FaSearch size={15} />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space ">
                  {/**==============tab one========== */}
                  <div
                    className={openTab === 1 ? "block " : "hidden"}
                    id="link1"
                  >
                    <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
                      {productdata.map((val, id) => (
                        <div
                          key={id}
                          className="overflow-hidden transition-shadow duration-300 rounded-2xl "
                        >
                          <img
                            src={val.cover}
                            alt={val.title}
                            className="object-cover w-full h-36 md:h-64 shadow-lg"
                          />
                          <div className="pt-4">
                            <h3 className="text-[1.0rem] font-bold pb-3 text-black ">
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
                    <div className="mt-20 flex items-center justify-center">
                      <button className=" bg-transparent border-2 border-gray-600 h-[40px] w-[80px] text-[#101828] rounded-full font-semibold text-[0.70rem]">
                        Load more
                      </button>
                    </div>
                  </div>

                  {/**============sceond tab content============ */}
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
                      {productdata.map((val, id) => (
                        <div
                          key={id}
                          className="overflow-hidden transition-shadow duration-300 rounded-2xl "
                        >
                          <img
                            src={val.cover}
                            alt={val.title}
                            className="object-cover w-full h-36 md:h-64 shadow-lg"
                          />
                          <div className="pt-4">
                            <h3 className="text-[1.0rem] font-bold pb-3 text-black ">
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
                    <div className="mt-20 flex items-center justify-center">
                      <button className=" bg-transparent border-2 border-gray-600 h-[40px] w-[80px] text-[#101828] rounded-full font-semibold text-[0.70rem]">
                        Load more
                      </button>
                    </div>
                  </div>
                  {/**=======tab 3 content========== */}
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
                      {productdata.map((val, id) => (
                        <div
                          key={id}
                          className="overflow-hidden transition-shadow duration-300 rounded-2xl "
                        >
                          <img
                            src={val.cover}
                            alt={val.title}
                            className="object-cover w-full h-36 md:h-64 shadow-lg"
                          />
                          <div className="pt-4">
                            <h3 className="text-[1.0rem] font-bold pb-3 text-black ">
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
                    <div className="mt-20 flex items-center justify-center">
                      <button className=" bg-transparent border-2 border-gray-600 h-[40px] w-[80px] text-[#101828] rounded-full font-semibold text-[0.70rem]">
                        Load more
                      </button>
                    </div>
                  </div>
                  {/**=======tab 4 content=========== */}
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                    <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
                      {productdata.map((val, id) => (
                        <div
                          key={id}
                          className="overflow-hidden transition-shadow duration-300 rounded-2xl "
                        >
                          <img
                            src={val.cover}
                            alt={val.title}
                            className="object-cover w-full h-36 md:h-64 shadow-lg"
                          />
                          <div className="pt-4">
                            <h3 className="text-[1.0rem] font-bold pb-3 text-black ">
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
                    <div className="mt-20 flex items-center justify-center">
                      <button className=" bg-transparent border-2 border-gray-600 h-[40px] w-[80px] text-[#101828] rounded-full font-semibold text-[0.70rem]">
                        Load more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
