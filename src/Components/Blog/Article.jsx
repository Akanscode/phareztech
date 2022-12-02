import React from "react";
import Navbar from "../Home/Header/Navbar";
import { blogimg } from "../Data/data";
import { blogimg88 } from "../Data/data";
import { blog } from "../Data/data";
import Footer from "../Home/Footer/Footer";

const Article = () => {
  return (
    <div>
      {/**======navnbar====== */}
      <Navbar />
      <div className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] w-full h-[300px] md:h-[500px]"></div>
      <div className="relative container mx-auto px-6 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-16">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={blogimg}
            className="mt-[-150px]  md:mt-[-200px] rounded-2xl shadow-xl w-[500px] h-[200px] md:h-[300px]"
            alt="blogimg"
          />
          <div className="mt-6">
            <div className="flex justify-between items-center ">
              <button className="rounded-full h-[25px] w-[80px] border font-medium text-[0.70rem] uppercase my-6">
                Hashtag
              </button>
              <p className="text-[#667085] font-normal text-[0.60rem]">
                November 3, 2022
              </p>
            </div>
            <h2 className="font-bold text-[18px] md:text-[20px] text-[#101828]  max-w-md capitalize">
              Rhoncus nisi massa habitant felis tellus phasellus cursus.
              Sollicitudin.
            </h2>
            <p className=" pt-[5px] text-[0.78rem] text-[#667085] font-Circular font-normal max-w-md">
              Egestas quis ultricies purus dictum. Vel etiam morbi massa ac dui,
              neque felis fusce laoreet. Congue semper ullamcorper quis sed leo
              id blandit. Quam nunc dui ut diam habitasse varius sit elementum.
              Aliquet cras et, suspendisse est adipiscing. Risus mauris volutpat
              eget ultricies.
            </p>
            <p className="pt-[5px] text-[0.78rem] text-[#667085] font-Circular font-normal max-w-md">
              Egestas tellus consectetur malesuada ipsum venenatis sit. Aliquet
              id volutpat tincidunt volutpat adipiscing arcu feugiat. Mi eget et
              elit gravida id mattis. Id tellus vivamus dolor maecenas facilisis
              sem tincidunt pretium. Enim semper fermentum id leo id sed.
              Montes, massa condimentum nibh senectus sodales curabitur sit.
              Proin amet pulvinar sed consequat tempus.
            </p>
            <div className="mt-7">
              <h2 className="font-bold text-[15.5px] text-[#101828] capitalize">
                Duis vitae amet.
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
                src={blogimg88}
                className="rounded-md shadow-xl w-[500px] h-[200px] md:h-[300px] mt-5"
                alt="productimg"
              />
              <div className="mt-8">
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

                <h2 className="font-bold text-[15.5px] text-[#101828] capitalize pt-6">
                  Duis vitae amet.
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
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="mt-8 flex items-center justify-center">
            <p className="text-[#00050F] text-[1.0rem] text-center font-bold">
              Your next read...
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full mt-6">
            {blog.map((val, id) => (
              <div
                key={id}
                className="overflow-hidden transition-shadow duration-300 bg-[#FFFFFF]  rounded-2xl "
              >
                <img
                  src={val.cover}
                  alt={val.title}
                  className="object-cover w-full h-36 md:h-52 rounded-md shadow-2xl"
                />
                <div className="p-5">
                  <h3 className="text-[1.0rem] font-bold pb-3 text-black ">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md pt-2">
                    {val.text}
                  </p>
                  <p className="pt-3 text-slate-400/30 text-xs font-medium">
                    {val.tag}
                  </p>
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

export default Article;
