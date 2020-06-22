import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import gridData from "../data/OurGrid";
const WholePage = (props) => {
  const [generation, setGeneration] = useState(0);
  const [ourGrid, setOurGrid] = useState(gridData);
  console.log(ourGrid);
  const changeStatus = () => {};
  return (
    <div className="wholePage">
      <Canvas changeStatus={changeStatus} isActive={ourGrid} />
      <h2 className="texth2">Generations: {generation}</h2>
    </div>
  );
};
export default WholePage;
