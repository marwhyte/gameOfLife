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
  return (
    <div className="wholePage">
      <Buttons />
      <Canvas changeStatus={changeStatus} isActive={ourGrid} />
      <h2 className="texth2">Generations: {generation}</h2>
    </div>
  );
};
export default WholePage;
