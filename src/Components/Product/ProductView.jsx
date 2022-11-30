import React from "react";
import Navbar from "../Home/Header/Navbar";
import { productviewimag } from "../Data/data";
import { productviewimag2 } from "../Data/data";
import { productviewimag3 } from "../Data/data";
import { products } from "../Data/data";
import { HiOutlineChevronRight } from "react-icons/hi2";
import Footer from "../Home/Footer/Footer";
const ProductView = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-full h-[300px] md:h-[500px]"></div>
      <div className="relative container mx-auto px-6 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-16">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={productviewimag}
            className="mt-[-150px]  md:mt-[-200px] rounded-2xl shadow-xl w-[500px] h-[200px] md:h-[300px]"
            alt="productviewimg"
          />
          <div className="mt-6">
            <button className="rounded-full h-[25px] w-[80px] border font-medium text-[0.70rem] uppercase my-6">
              website
            </button>
            <h2 className="font-bold text-[20px] text-[#101828] capitalize">
              Product name here
            </h2>
            <p className=" pt-[10px] text-[0.78rem] text-[#667085] font-Circular font-normal text-justify max-w-md">
              Egestas quis ultricies purus dictum. Vel etiam morbi massa ac dui,
              neque felis fusce laoreet. Congue semper ullamcorper quis sed leo
              id blandit. Quam nunc dui ut diam habitasse varius sit elementum.
              Aliquet cras et, suspendisse est adipiscing. Risus mauris volutpat
              eget ultricies.
            </p>
            <div className="mt-7">
              <h2 className="font-bold text-[15.5px] text-[#101828] capitalize">
                The Challenge
              </h2>
              <p className="pt-[10px] text-[0.78rem] text-[#667085] font-Circular font-normal text-justify max-w-md">
                Morbi ultrices mattis vivamus orci. Sit at nam mattis mi. Quis
                tristique ultricies arcu nunc amet volutpat. Mi eleifend ac dui
                blandit sed nunc elementum lacus, volutpat. Feugiat condimentum
                at mauris fermentum, viverra varius. Non porttitor commodo magna
                dictum massa. Accumsan duis turpis commodo egestas suspendisse.
                Tempor, adipiscing orci sit sed imperdiet tellus aliquam.
                Feugiat elit mauris volutpat, erat rutrum ipsum quisque
                ultricies. Nunc commodo id tellus libero.
              </p>
              <img
                src={productviewimag2}
                className="rounded-md shadow-xl w-[500px] h-[200px] md:h-[300px] mt-5"
                alt="productimg"
              />
              <div className="mt-8">
                <h2 className="font-bold text-[15.5px] text-[#101828] capitalize">
                  The Approach
                </h2>
                <p className="pt-[10px] text-[0.78rem] text-[#667085] font-Circular font-normal text-justify max-w-md">
                  Egestas quis ultricies purus dictum. Vel etiam morbi massa ac
                  dui, neque felis fusce laoreet. Congue semper ullamcorper quis
                  sed leo id blandit. Quam nunc dui ut diam habitasse varius sit
                  elementum. Aliquet cras et, suspendisse est adipiscing. Risus
                  mauris volutpat eget ultricies.
                </p>
                <p className="pt-[10px] text-[0.78rem] text-[#667085] font-Circular font-normal text-justify max-w-md">
                  Egestas tellus consectetur malesuada ipsum venenatis sit.
                  Aliquet id volutpat tincidunt volutpat adipiscing arcu
                  feugiat. Mi eget et elit gravida id mattis. Id tellus vivamus
                  dolor maecenas facilisis sem tincidunt pretium. Enim semper
                  fermentum id leo id sed. Montes, massa condimentum nibh
                  senectus sodales curabitur sit. Proin amet pulvinar sed
                  consequat tempus.
                </p>
                <img
                  src={productviewimag3}
                  className="rounded-md shadow-xl w-[500px]h-[200px] md:h-[300px] mt-8"
                  alt="productviewimmg"
                />
                <h2 className="font-bold text-[15.5px] text-[#101828] capitalize pt-6">
                  Results
                </h2>
                <p className="pt-[10px] text-[0.78rem] text-[#667085] font-Circular font-normal text-justify max-w-md">
                  Morbi ultrices mattis vivamus orci. Sit at nam mattis mi. Quis
                  tristique ultricies arcu nunc amet volutpat. Mi eleifend ac
                  dui blandit sed nunc elementum lacus, volutpat. Feugiat
                  condimentum at mauris fermentum, viverra varius. Non porttitor
                  commodo magna dictum massa. Accumsan duis turpis commodo
                  egestas suspendisse. Tempor, adipiscing orci sit sed imperdiet
                  tellus aliquam. Feugiat elit mauris volutpat, erat rutrum
                  ipsum quisque ultricies. Nunc commodo id tellus libero.
                </p>
                <p className="pt-[10px] text-[0.78rem] text-[#667085] font-Circular font-normal text-justify max-w-md">
                  Morbi ultrices mattis vivamus orci. Sit at nam mattis mi. Quis
                  tristique ultricies arcu nunc amet volutpat. Mi eleifend ac
                  dui blandit sed nunc elementum lacus, volutpat. Feugiat
                  condimentum at mauris fermentum, viverra varius. Non porttitor
                  commodo magna dictum massa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <h4 className="text-center font-bold text-[15px] italic text-[#101828] capitalize ">
            View next...
          </h4>
          <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full pt-6">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductView;
