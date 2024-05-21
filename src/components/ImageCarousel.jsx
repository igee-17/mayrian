import * as React from "react";
import { useMouse } from "@uidotdev/usehooks";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { articleSliderData } from "../utils/data";

export default function ImageCarousel() {
  const [mouse, ref] = useMouse();

  const isInside =
    mouse.elementX >= 0 &&
    mouse.elementX <= 620 &&
    mouse.elementY >= 0 &&
    mouse.elementY <= 800;

  const style = {
    position: "absolute",
    left: mouse.elementX - 50,
    top: mouse.elementY - 50,
    width: "100px",
    height: "100px",
  };

  return (
    <Carousel
      className="mt-8 h-[800px] w-[620px]"
      prevArrow={({ handlePrev }) => (
        <div ref={ref}>
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
          >
            <Typography
              style={style}
              className="!absolute border-2 p2 border-red-white rounded-full z-10 flex justify-center items-center text-[30px]"
            >
              <FaArrowRightLong />
            </Typography>
          </IconButton>
        </div>
      )}
    >
      {articleSliderData.map((item) => (
        <div
          className="relative  bg-white"
          key={item.id}
          style={{
            border: "1px solid black",
            backgroundColor: isInside ? "lightblue" : "white",
          }}
        >
          <img
            className=" w-full h-full object-cover"
            src={item.url}
            alt={item.title || "Slide"}
          />
        </div>
      ))}
    </Carousel>
  );
}

// export default function MouseTracker() {
//     const [mouse, ref] = useMouse();
//     const [position, setPosition] = React.useState({ x: 0, y: 0 });

//     React.useEffect(() => {
//       // Update the component's position based on mouse movement
//       setPosition({
//         x: mouse.x - ref.current.offsetWidth / 2,
//         y: mouse.y - ref.current.offsetHeight / 2,
//       });
//     }, [mouse.x, mouse.y, ref]);

//     const style = {
//       position: "absolute",
//       left: position.x,
//       top: position.y,
//       width: "100px",
//       height: "100px",
//       backgroundColor: "lightblue",
//     };

//     return (
//         <div ref={ref} style={style}>
//           Drag me!
//         </div>
//     );
//   }
