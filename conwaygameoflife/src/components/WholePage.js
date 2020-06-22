import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
const WholePage = (props) => {
  const [generation, setGeneration] = useState(0);

  return (
    <div className="wholePage">
      <Canvas />
      <h2>Generations: {generation}</h2>
    </div>
  );
};
export default WholePage;
