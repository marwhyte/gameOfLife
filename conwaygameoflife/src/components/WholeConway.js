import React, { useState, useEffect, useRef } from "react";
import TheMagic from "../gridCreator/TheMagic";
import Box from "./Box";

const WholeConway = () => {
  const [universe, setUniverse] = useState(new TheMagic());
  const [size, setSize] = useState([70, 20]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [timer, setTimer] = useState(100);
  let myInterval = useRef(null);
  const editTime = (e) => {
    if (!isGenerating) {
      setTimer(e.target.value);
    }
  };
  const start = () => {
    if (!isGenerating) {
      setIsGenerating(true);
      myInterval.current = setInterval(() => getNexGen(), timer);
    }
  };
  const stop = () => {
    setIsGenerating(false);
    clearInterval(myInterval.current);
  };
  const getNexGen = () => {
    console.log("hello");
    setUniverse((next) => next.nextGen());
  };
  const cellInfo = (place) => {
    if (!isGenerating) {
      setUniverse(universe.boxMaker(place));
    }
  };
  const setBoard = () => {
    var currentBoard = [];
    var theRow = [];
    for (var i = 0; i < size[0]; i++) {
      for (var j = 0; j < size[1]; j++) {
        if (universe.checkIfAlive(i + " , " + j)) {
          theRow.push(
            <Box
              key={[i, j]}
              place={{ x: i, y: j }}
              live={true}
              cellInfo={cellInfo}
            />
          );
        } else {
          theRow.push(
            <Box
              key={[i, j]}
              place={{ x: i, y: j }}
              live={false}
              cellInfo={cellInfo}
            />
          );
        }
      }
      currentBoard.push(
        <div className="row" key={i}>
          {theRow}
        </div>
      );
      theRow = [];
    }
    return currentBoard;
  };

  return (
    <div className="everything">
      <div className="topInfo">
        <h1>Marco's Game Of Life</h1>

        <div className="editInfo">
          <label>
            speed is
            <input
              className="changeTime"
              type="text"
              value={timer}
              onChange={editTime}
            />
          </label>
        </div>
        <div className="btnGroup">
          <button className="learn-more buttongreen" onClick={start}>
            start Simulation
          </button>
          <button className="learn-more buttonred" onClick={stop}>
            stop Simulation
          </button>
        </div>
      </div>
      <div className="wrapAllBoxes">{setBoard()}</div>
      <p>Generations: {universe.currentGen()}</p>
    </div>
  );
};

export default WholeConway;
