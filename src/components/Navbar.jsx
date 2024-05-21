import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Virtual Estimates",
    link: "/estimates",
  },
  {
    label: "Testimonial",
    link: "/testimonial",
  },
];

const Navbar = () => {
  return (
    <section>
      <div className="flex justify-end px-16 bg-black gap-4 border-b-[0.5px] border-[#FFFFFFCC] py-4">
        <div className="flex gap-1">
          <p className="text-[#FFFFFFCC] text-base font-bold font-inter leading-normal">
            Phone
            <span className="text-[#FFFFFFCC] text-base font-medium font-inter leading-normal">
              :{"  "}
            </span>
          </p>
          <p className="text-[#FFFFFFCC] text-base font-normal font-inter leading-normal">
            (+443) 200 3107
          </p>
        </div>
        <div className="w-[1px] h-6 bg-[#FFFFFFCC]"></div>
        <div className="flex gap-1">
          <p className="text-[#FFFFFFCC] text-base font-bold font-inter leading-normal">
            Support
            <span className="text-[#FFFFFFCC] text-base font-medium font-inter leading-normal">
              :{"  "}
            </span>
          </p>
          <p className="text-[#FFFFFFCC] text-base font-normal font-inter leading-normal">
            placeholder@pbds@gmail.com
          </p>
        </div>
      </div>
      <nav className="bg-black py-6 px-12 flex justify-center">
        <div className="flex gap-[52px] items-center">
          <div className="flex gap-9">
            {navLinks.map((item) => (
              <Link
                to={item.link}
                className="text-white text-base font-medium font-walsheim leading-normal"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="text-center text-[#272727] text-lg font-medium font-walsheim py-4 px-8 bg-[#FAF400] rounded-3xl ">
            Get in Touch
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
