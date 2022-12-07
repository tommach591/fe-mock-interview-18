import "./Toolbar.css";
import Button from "../Button/";

function Toolbar({ undoAction, redoAction, switchColor, clearBoard }) {
  const colors = [
    "black",
    "red",
    "orange",
    "yellow",
    "greenyellow",
    "green",
    "blue",
    "violet",
    "purple",
  ];

  return (
    <div className="Toolbar">
      <Button doSomething={undoAction}>Undo</Button>
      <Button doSomething={redoAction}>Redo</Button>
      <div className="Palette">
        {colors.map((c, i) => {
          return (
            <div
              className="Color"
              key={i}
              style={{ background: c }}
              onClick={() => switchColor(c)}
            />
          );
        })}
      </div>
      <Button doSomething={clearBoard}>Reset</Button>
    </div>
  );
}

export default Toolbar;
