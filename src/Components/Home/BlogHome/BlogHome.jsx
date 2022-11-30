import React from "react";
import { blog } from "../../Data/data";

const BlogHome = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] w-full">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
          <div className="pt-6">
            <button className="border border-[#F736C7] h-[24px] w-[60px] rounded-md text-xs font-semibold px-2  bg-clip-text  text-transparent bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399]">
              {" "}
              blog
            </button>{" "}
            <h1 className="text-[#101828] text-2xl md:text-3xl font-bold py-6">
              Recent updates
            </h1>
          </div>
          <div className="grid gap-8 md:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
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
    </div>
  );
};

export default BlogHome;
