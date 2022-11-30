import React from "react";
import { partner } from "../../Data/data";

const Partners = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] w-full">
        <div className="relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
          <div className="py-6">
            <h2 className="text-center text-[#101828] font-medium text-[0.87rem]">
              We’re trusted by
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            {partner.map((val, id) => (
              <div key={id} className="p-4">
                <img src={val.cover} alt={val.alt} className="w-32 h-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
