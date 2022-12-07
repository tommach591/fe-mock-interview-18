import "./Circle.css";

function Circle({ x, y, color }) {
  return (
    <div className="Circle" style={{ background: color, top: y, left: x }} />
  );
}

export default Circle;
