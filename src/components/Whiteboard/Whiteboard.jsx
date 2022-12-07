import "./Whiteboard.css";
import Circle from "../Circle";
import { useEffect, useRef } from "react";

function Whiteboard({ undos, clickAction }) {
  const whiteboardRef = useRef();

  useEffect(() => {
    const handleMouseClick = (event) => {
      if (whiteboardRef.current.contains(event.target)) {
        clickAction(
          event.clientX - whiteboardRef.current.offsetLeft,
          event.clientY - whiteboardRef.current.offsetTop
        );
      }
    };

    window.addEventListener("mousedown", handleMouseClick);

    return () => {
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, [clickAction]);

  return (
    <div className="Whiteboard" ref={whiteboardRef}>
      {undos.map(([x, y, color], i) => {
        return <Circle key={i} x={x} y={y} color={color} />;
      })}
    </div>
  );
}

export default Whiteboard;
