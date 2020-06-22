import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import gridData from "../data/OurGrid";
import Buttons from "./Buttons";
const WholePage = (props) => {
  const [generation, setGeneration] = useState(0);
  const [ourGrid, setOurGrid] = useState(gridData);
  console.log(ourGrid);
  const changeStatus = (row, col) => {
    var temp = [...ourGrid];
    temp[row][col] = !temp[row][col];
    setOurGrid(temp);
    console.log("hello", ourGrid);
  };
  const randomize = () => {
    var temp = [...ourGrid];
    for (var i = 0; i < 31; i++) {
      for (var j = 0; j < 50; j++) {
        temp[i][j] = false;
        if (Math.floor(Math.random() * (5 - 0 + 1) + 0) === 1) {
          temp[i][j] = true;
        }
      }
    }
    setOurGrid(temp);
  };
  const clear = () => {
    var temp = [...ourGrid];
    for (var i = 0; i < 31; i++) {
      for (var j = 0; j < 50; j++) {
        temp[i][j] = false;
      }
    }
    setOurGrid(temp);
  };
  return (
    <div className="wholePage">
      <Buttons randomize={randomize} clear={clear} />
      <Canvas changeStatus={changeStatus} isActive={ourGrid} />
      <h2 className="texth2">Generations: {generation}</h2>
    </div>
  );
};
export default WholePage;
