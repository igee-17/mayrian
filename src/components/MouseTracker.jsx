import * as React from "react";
import { useMouse } from "@uidotdev/usehooks";

export default function MouseTracker() {
  const [mouse, ref] = useMouse();
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const isInside =
    mouse.elementX >= 0 &&
    mouse.elementX <= 300 &&
    mouse.elementY >= 0 &&
    mouse.elementY <= 300;

  const style = {
    position: "absolute",
    left: mouse.elementX,
    top: mouse.elementY,
    width: "100px",
    height: "100px",
    backgroundColor: "lightblue",
  };

  return (
    <div
      className="w-full bg-white relative"
      style={{
        width: 300,
        height: 300,
        border: "1px solid black",
        backgroundColor: isInside ? "lightblue" : "white",
      }}
    >
      <div ref={ref}>a{isInside && <div style={style}>hello</div>}</div>
    </div>
  );
}
