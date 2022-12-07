import "./App.css";
import Whiteboard from "../Whiteboard/";
import Toolbar from "../Toolbar/";
import { useCallback, useState } from "react";

function App() {
  const [undos, setUndos] = useState([]);
  const [redos, setRedos] = useState([]);
  const [color, setColor] = useState("black");
  const mouseOffset = 8;

  const undoAction = useCallback(() => {
    let newUndos = [...undos];
    let newRedos = [...redos];

    if (newUndos.length > 0) newRedos.push(newUndos.pop());

    setUndos(newUndos);
    setRedos(newRedos);
  }, [redos, undos]);

  const redoAction = useCallback(() => {
    let newUndos = [...undos];
    let newRedos = [...redos];

    if (newRedos.length > 0) newUndos.push(newRedos.pop());

    setUndos(newUndos);
    setRedos(newRedos);
  }, [redos, undos]);

  const clearBoard = useCallback(() => {
    setUndos([]);
    setRedos([]);
  }, []);

  const clickAction = useCallback(
    (x, y) => {
      let newUndos = [...undos];

      newUndos.push([`${x - mouseOffset}px`, `${y - mouseOffset}px`, color]);

      setUndos(newUndos);
      setRedos([]);
    },
    [undos, color]
  );

  const switchColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App">
      <h1 className="Title">My Whiteboard</h1>
      <Whiteboard undos={undos} clickAction={clickAction} />
      <Toolbar
        undoAction={undoAction}
        redoAction={redoAction}
        switchColor={switchColor}
        clearBoard={clearBoard}
      />
    </div>
  );
}

export default App;
