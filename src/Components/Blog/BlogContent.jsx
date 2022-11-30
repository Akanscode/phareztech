import React from "react";
import { hash } from "../Data/data";
import { blogcontent } from "../Data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const BlogContent = () => {
  return (
    <div>
      <div className="bg-white w-full">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
          <div className="pt-6">
            <h2 className="text-[#00050F] font-medium text-[1.25rem]">
              Latest Articles
            </h2>
            <div className="">
              <Swiper
                grabCursor={true}
                modules={[Scrollbar]}
                scrollbar={{ draggable: true }}
                className="mySwiper"
              >
                {/**=========hashtag===== */}
                {hash.map((val, index) => (
                  <SwiperSlide className="" key={index}>
                    <div className="flex flex-row gap-2 md:gap-x-[10px] relative overflow-hidden  py-4">
                      <button className="bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] text-slate-100 rounded-full  w-[30px] h-[28px]">
                        {val.btn}
                      </button>

                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                      <button className="text-slate-500 font-medium text-[1.0rem] px-2 h-[28px] w-[90px] bg-transparent border border-[#667085] rounded-full">
                        {val.tag}
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/**=========blog post======= */}
            <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3  md:max-w-full ">
              {blogcontent.map((val, id) => (
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
    </div>
  );
};

export default BlogContent;
