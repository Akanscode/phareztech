import React from "react";
import Navbar from "../Home/Header/Navbar";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { storyimage1 } from "../Data/data";
import { storyimage2 } from "../Data/data";
import { storyimage3 } from "../Data/data";
import { storyimage4 } from "../Data/data";
import { mastermind } from "../Data/data";
import { products } from "../Data/data";
import Footer from "../Home/Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="relative px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" font-bold text-[40px] text-center max-w-xl pt-20">
              <span className="bg-clip-text text-clip text-transparent bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399]">
                {" "}
                Why we convert dreamware to software?
              </span>{" "}
            </h1>
            <p className="text-[#98A2B3] font-normal text-[0.60rem] text-center max-w-lg">
              To us at Phareztech, we strongly believe the only thing impossible
              to achieve is what cannot be imagined by the human brain, as long
              as it can be imagined, no matter how nearly impossible it seems,
              it is achievable.
            </p>

            <div className="flex flex-row overflow-hidden gap-6 relative mt-10">
              <img
                src={storyimage1}
                className="w-[350px] h-[200px]"
                alt="storyimg"
              />
              <img
                src={storyimage2}
                className="w-[350px] h-[200px]"
                alt="storyimg"
              />
              <img
                src={storyimage3}
                className="w-[350px] h-[200px]"
                alt="storyimg"
              />
              <img
                src={storyimage4}
                className="w-[350px] h-[200px]"
                alt="storyimg"
              />
              <div className="absolute inset-x-0 bottom-0">
                <svg
                  viewBox="0 0 224 12"
                  fill="currentColor"
                  className="w-full -mb-1 text-[#fff]"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-[40px] flex flex-col items-center justify-center">
            <h2 className="font-bold text-[1.99rem] text-[#101828] capitalize">
              Our story
            </h2>
            <p className="font-normal text-[0.70rem] text-[#98A2B3] max-w-xl pt-5">
              Viverra nunc feugiat arcu ac purus neque in facilisi etiam.
              Pellentesque aliquam amet mauris fermentum tortor. Nisi in commodo
              parturient neque pellentesque venenatis magna turpis. Nibh
              ridiculus euismod viverra nunc purus porttitor eu. In in
              adipiscing donec non nec.
              <br className="hidden md:block" /> A praesent diam vitae nunc
              tristique. Ac vitae tristique partut facilisis. Elit aliquet ut
              egestas pharetra. Neque sit dui lectus cursus aliquam faucibus nec
              dictum dignissim. Eget justo integer nisl vel ipsum. Urna nisi
              diam ac ut ultrices viverra nunc commodo enim. Velit nullam nunc
              molestie scelerisque. Massa neque non vitae etiam volutpat orci
              nisl vel. Volutpat tellus facilisi egestas nisl aliquam egestas
              amet.
              <br className="hidden md:block md:pt-6" />
              Viverra nunc feugiat arcu ac purus neque in facilisi etiam.
              Pellentesque aliquam amet mauris fermentum tortor. Nisi in commodo
              parturient neque pellentesque venenatis magna turpis. Nibh
              ridiculus euismod viverra nunc purus porttitor eu. In in
              adipiscing donec non nec.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center  gap-6 pt-10">
            <div className="p-5 duration-300 transform bg-white w-full md:w-[400px] rounded shadow-xl hover:-translate-y-2">
              <h4 className="rounded-full px-4 w-[120px] bg-[#EEF3FF] capitalize">
                Our mission
              </h4>
              <p className="pt-4 font-normal text-[0.70rem] text-[#98A2B3] max-w-md">
                We are a group of engineers who believe impossibility is what
                cannot be imagined. As long as it can be imagined, we are sure
                of its possibility. Our vast knowledge in Information Technology
                and architectures that governs it make us see beyond the
                impossibilities. Our full implementation of Software Development
                Architectures which strongly relies on Human Centered Design
                stand us out of the competition.
              </p>
            </div>
            <div className="p-5 duration-300 transform bg-white w-full md:w-[400px] rounded shadow-xl hover:-translate-y-2">
              <h4 className="rounded-full px-4 w-[120px] bg-[#EEF3FF] capitalize">
                Our vision
              </h4>
              <p className="pt-4 font-normal text-[0.70rem] text-[#98A2B3] max-w-md">
                Our main focus is solving human problems. Basically, we
                construct and give life to human thoughts, imaginations, wire
                works and architectural designs by converting them to a
                deployable application with users in mind all through the design
                stages.
              </p>
              <p className="pt-4 font-normal text-[0.70rem] text-[#98A2B3] max-w-md">
                Our work starts from studying the world around us with full
                interest on how to make it better for every individual in our
                world. we just happen to be an Application Developing Company,
                our goal is to impact the world positively.
              </p>
            </div>
          </div>
          {/* ================*mastermind ======== */}
          <div className="mt-20">
            <div className="flex flex-col items-center justify-center  ">
              <h3 className="font-bold text-[1.20rem] text-[#101828] capitalize">
                The masterminds
              </h3>
              <p className="text-[#98A2B3] text-[0.60rem] font-normal">
                Meet the team behind the creativity going on at Phareztech
              </p>
            </div>
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg pt-6">
              {mastermind.map((val, index) => (
                <div
                  key={index}
                  className="relative rounded-md border border-[#003399] border-t-8 border-b-8 border-r-4 border-l-4"
                >
                  <span class="absolute bottom-0 left-[290px] rotate-90 rounded-b-md w-[25px] h-[20px] bg-gradient-to-r from-[#F736C7] via-[#903ABB] to-[#003399] "></span>
                  <div className="relative pb-56 mb-4 shadow lg:pb-64">
                    <img
                      className=" absolute object-cover p-4 w-full h-full rounded"
                      src={val.cover}
                      alt="person"
                    />
                  </div>
                  <p className="text-lg font-bold pl-4">{val.name}</p>
                  <div className="flex flex-row justify-between p-4 ">
                    <p className="text-xs text-gray-800">{val.title}</p>
                    <div className="flex space-x-3">
                      <FaFacebook className="text-gray-600 transition-colors duration-300 h-6 w-6" />
                      <FaLinkedin className="text-gray-600 transition-colors duration-300 h-6 w-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/**================Featured products work=========== */}
          <div className="mt-20">
            <div className="flex flex-col items-center justify-center  ">
              <h3 className="font-bold text-[1.20rem] text-[#101828] capitalize">
                Featured products
              </h3>
              <p className="text-[#98A2B3] text-[0.60rem] font-normal">
                Here are some of the products we have that completes our
                ecosystem.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-[1050px] pt-6">
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
      </div>
      {/**=======footer========= */}
      <Footer />
    </div>
  );
};

export default AboutUs;
