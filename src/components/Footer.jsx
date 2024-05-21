import React from "react";
import fb from "../assets/socials/fb.svg";
import ping from "../assets/socials/pngwing.svg";
import ig from "../assets/socials/ig.svg";
import htag from "../assets/socials/List.svg";
import bg from "../assets/footerbg.png";

const Footer = () => {
  const footerItems = [
    { id: 1, url: fb },
    { id: 2, url: ping },
    { id: 3, url: ig },
    { id: 4, url: htag },
    {
      type: "section",
      title: "Navigation Links",
      items: [
        "Home",
        "About us",
        "Services",
        "Gallery",
        "Virtual Estimates",
        "Testimonial",
      ],
    },
    {
      type: "section",
      title: "Legal & Policy",
      items: ["Terms & Conditions", "Privacy Policy"],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        className="footer text-white pt-[97px] pb-[23px]"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="flex flex-wrap px-20 gap-20 justify-center small-screen:flex-col small-screen:gap-4">
          <div className="flex flex-col gap-12 text-sm small-screen:gap-4 small-screen:w-full">
            <p>
              Lorem ipsum dolor sit amet consectetur. Metus <br /> convallis
              nulla volutpat tempus. Porta pretium purus <br /> risus sed
              posuere. Lorem ipsum dolor sit amet <br /> consectetur. Metus
              convallis nulla volutpat tempus. <br /> Porta pretiu
            </p>
            <div className="flex flex-col gap-5">
              <p>
                <span className="font-bold">Address:</span> 6505 Liberty Rd,
                Gwynn Oak, MD 21207
              </p>
              <p>
                <span className="font-bold">Phone:</span> (+443) 200 3107{" "}
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 flex gap-20 small-screen:w-full small-screen:flex-col">
            {footerItems.map((item, index) =>
              item.type === "section" ? (
                <div key={index}>
                  <h6 className="font-bold text-gray-100 mb-2">{item.title}</h6>
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-1 text-sm cursor-pointer"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
          <div className="flex ml-[80px] flex-col gap-4 justify-center items-center pl-8 small-screen:w-full small-screen:flex-row small-screen:justify-center">
            {footerItems
              .filter((item) => item.url)
              .map((item) => (
                <img key={item.id} className="" src={item.url} alt="" />
              ))}
          </div>
        </div>
        <span className="flex  mt-10 text-sm justify-center items-center gap-2">
          <div className="w-[510px] h-[1px] bg-[#7D7D7D80]"></div>
          <p className="border-x border-[#7D7D7D80]  px-2">
            ©{currentYear}. All Rights Reserved{" "}
          </p>
          <p className="border-r border-[#7D7D7D80] px-2">
            Designed by{" "}
            <span className="text-[#33ca47] underline">Mayrian</span>
          </p>
          <div className="w-[510px] h-[1px] bg-[#7D7D7D80]"></div>
        </span>
      </footer>
    </>
  );
};

export default Footer;
