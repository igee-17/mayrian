import React, { useEffect, useRef, useState } from "react";
import articleMain from "../assets/article-transition/main.svg";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import { articleSliderData } from "../utils/data";
import { Sticky, StickyContainer } from "react-sticky";
import { FaArrowRightLong } from "react-icons/fa6";
import MouseTracker from "./MouseTracker";
import ImageCarousel from "./ImageCarousel";

const Section1 = () => {
  const repeatCount = 4;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null); // No need to specify type
  const [carouselBounds, setCarouselBounds] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // No need to type event
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updateCarouselBounds = () => {
      if (carouselRef.current) {
        setCarouselBounds(carouselRef.current.getBoundingClientRect());
      }
    };
    updateCarouselBounds();
    window.addEventListener("resize", updateCarouselBounds);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCarouselBounds);
    };
  }, []);

  const [isMouseInCarousel, setIsMouseInCarousel] = useState(false);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const handleMouseMove = (event) => {
      if (isMouseInCarousel) {
        const carouselRect = carouselElement.getBoundingClientRect();
        const relativeMouseY = event.clientY - carouselRect.top;
        setMousePosition({
          x: event.clientX,
          y: relativeMouseY + window.scrollY, // Adjust for window scroll
        });
      }
    };

    const handleMouseEnter = () => {
      setIsMouseInCarousel(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInCarousel(false);
    };

    carouselElement.addEventListener("mousemove", handleMouseMove);
    carouselElement.addEventListener("mouseenter", handleMouseEnter);
    carouselElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      carouselElement.removeEventListener("mousemove", handleMouseMove);
      carouselElement.removeEventListener("mouseenter", handleMouseEnter);
      carouselElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col px-[72px] mx-auto justify-center lg:flex-row gap-14  mt-12">
        <div className="relative">
          <div className="sticky top-[48px] left-0">
            <img
              src={articleMain}
              alt="Main Article"
              className="w-full lg:w-auto"
            />
          </div>
        </div>
        {/* <StickyContainer className="border-2 border-red-900 w-full relative">
          <Sticky relative={false}>
            {({ style }) => (
              <div
                className="w-[630px]"
                style={{
                  ...style,
                  // width: "565px",
                  width: "620px",
                  left: "72px",
                  height: "620px",
                  top: "48px",
                  position: "absolute",
                }}
              >
                <img
                  src={articleMain}
                  alt="Main Article"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </Sticky>
        </StickyContainer> */}
        <article className="flex flex-col w-[620px] max-w-full lg:max-w-2xl">
          <div className="w-[620px] h-[180px] flex-col justify-start items-start inline-flex">
            <div className="w-[620px] h-[60px] justify-center items-center inline-flex">
              <h1 className="w-[620px] text-white text-[40px] font-medium font-['GT Walsheim Trial'] leading-[60px]">
                We are dedicated to addressing{" "}
              </h1>
            </div>
            <div className="w-[620px] h-[60px] justify-center items-center inline-flex">
              <h1 className="w-[620px] text-[#CCCCCC] text-[40px] font-medium font-['GT Walsheim Trial'] leading-[60px]">
                the evolving requirements of the{" "}
              </h1>
            </div>
            <div className="w-[620px] h-[60px] justify-center items-center inline-flex">
              <h1 className="w-[620px] text-[#CCCCCC] text-[40px] font-medium font-['GT Walsheim Trial'] leading-[60px]">
                world's most dynamic companies.
              </h1>
            </div>
          </div>

          <hr className="my-4 sm:my-6 md:my-8" />
          {Array.from({ length: repeatCount }).map((_, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <hr className="my-4 sm:my-6 md:my-8" />}
              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-white text-xl font-medium font-['GT Walsheim Trial'] leading-[30px]">
                  {" "}
                  0{index + 1}
                </p>
                <p className="w-[468px] text-white text-xl font-normal font-['GT Walsheim Trial'] leading-[30px]">
                  Lorem ipsum dolor sit amet consectetur. Metus convallis nulla
                  volutpat tempus. Porta pretium purus risus sed posuere. Elit
                  odio tellus eget duis facilisis in lorem. Parturient et ut
                  quis donec mattis at rhoncus morbi. Neque turpis non orci
                  pulvinar. Luctus proin.
                </p>
              </div>
            </React.Fragment>
          ))}
          <ImageCarousel />
          {/* <Carousel
            ref={carouselRef}
            className="mt-8"
            nextArrow={({ handleNext }) => (
              <IconButton
                onClick={handleNext}
                variant="text"
                color="white"
                size="lg"
                className="!absolute border-2 p2 border-red-white rounded-full"
                style={{
                  left: `${mousePosition.x - 740}px`, // Set left position based on mouse X
                  top: `${mousePosition.y}px`, // Set top position based on mouse Y
                  transform: "translate(-50%, -50%)", // Center the arrow on the cursor
                  // opacity: isMouseInCarousel ? 1 : 0,
                }}
              >
                <Typography>
                  <FaArrowRightLong />
                </Typography>
              </IconButton>
            )}
          >
            {articleSliderData.map((item) => (
              <div className="" key={item.id}>
                <img
                  className="w-full h-full object-cover"
                  src={item.url}
                  alt={item.title || "Slide"}
                />
              </div>
            ))}
          </Carousel> */}
        </article>
      </div>
    </>
  );
};

export default Section1;
