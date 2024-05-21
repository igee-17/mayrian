// eslint-disable-next-line no-unused-vars
import React from "react";
import { projectsSliderData } from "../utils/data";

const Section3 = () => {
  return (
    <div className="bg-[#222] pt-40 pb-[198px] max-w-[1248px] mx-auto">
      <h1 className="text-center text-white text-5xl font-medium font-['GT Walsheim Trial'] leading-[56px]">
        Selected Projects
      </h1>
      <div className="flex flex-col lg:flex-row mt-8 gap-6">
        <div className="flex flex-col gap-6">
          {projectsSliderData.slice(0, 2).map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden w-[411px] h-[360px] shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500 w-[411px] h-[360px] object-contain"
                  alt=""
                />
              </div>
              <div className="absolute bottom-5 left-4 flex flex-col gap-1">
                <h2 className="text-white text-2xl font-medium font-['GT Walsheim Trial']">
                  Project Title
                </h2>
                <p className="text-white text-base font-medium font-['GT Walsheim Trial']">
                  Category
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center ">
          {projectsSliderData.slice(2, 3).map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden w-[411px] h-[746px] shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500 w-[411px] h-[746px] object-contain"
                  alt=""
                />
              </div>
              <div className="absolute bottom-5 left-4 flex flex-col gap-1">
                <h2 className="text-white text-2xl font-medium font-['GT Walsheim Trial']">
                  Project Title
                </h2>
                <p className="text-white text-base font-medium font-['GT Walsheim Trial']">
                  Category
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 flex-col">
          {projectsSliderData.slice(3, 5).map((item) => (
            <div key={item.id} className="group h-fit relative overflow-hidden">
              <div className="relative overflow-hidden w-[411px] h-[360px] shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500 w-[411px] h-[360px] object-contain"
                  alt=""
                />
              </div>
              <div className="absolute bottom-5 left-4 flex flex-col gap-1">
                <h2 className="text-white text-2xl font-medium font-['GT Walsheim Trial']">
                  Project Title
                </h2>
                <p className="text-white text-base font-medium font-['GT Walsheim Trial']">
                  Category
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
