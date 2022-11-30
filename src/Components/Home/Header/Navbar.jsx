import React, { useState } from "react";
import { logo } from "../../Data/data";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="fixed inset-x-0 z-50 bg-slate-50">
        <div className="  flex flex-wrap items-center justify-between px-2 py-2 shadow-sm">
          <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to="/" className=" inline-block mr-4 py-2 ">
                <img src={logo} alt="logo" />
              </Link>
              <button
                className="text-[#00050F] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden  outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? (
                  <AiOutlineClose size={25} />
                ) : (
                  <HiBars3 size={25} />
                )}
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center justify-center" +
                (navbarOpen ? " flex" : " hidden")
              }
            >
              <ul className="flex flex-col items-center md:flex-row list-none md:ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="px-3 py-2 flex items-center text-xs capitalize font-bold font-Mono leading-snug text-[#667085] hover:text-[#F736C7] md:text-[#F736C7] hover:opacity-75"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="px-3 py-2 flex items-center  text-xs capitalize font-bold font-Mono leading-snug text-[#667085] hover:text-[#F736C7] hover:opacity-75"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/product"
                    className="px-3 py-2 flex items-center text-xs capitalize font-bold font-Mono leading-snug text-[#667085] hover:text-[#F736C7] hover:opacity-75"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    className="px-3 py-2 flex items-center text-xs capitalize font-bold font-Mono leading-snug text-[#667085] hover:text-[#F736C7] hover:opacity-75"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item border-t border-[#F736C7] md:border-none">
                  <Link
                    to="/contact"
                    className="px-3 py-2 flex items-center text-xs capitalize font-bold font-Mono leading-snug text-[#667085] hover:text-[#F736C7] hover:opacity-75"
                  >
                    Contact
                  </Link>
                </li>
                <div className="ml-4">
                  <Link to="/orderservice">
                    <button className="bg-gradient-to-r from-[#F736C7] via-[#C539C4] to-[#003399] h-[48px] w-[250px] md:w-[174px] rounded-full text-[#FFFFFF] font-bold text-[12px] font-Circular ">
                      {" "}
                      Order our service
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
