import React, { useState, useRef } from "react";
import TheMagic from "../gridCreator/TheMagic";
import Box from "./Box";

const WholeConway = (props) => {
  const [universe, setUniverse] = useState(new TheMagic());
  const [size, setSize] = useState([70, 20]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [timer, setTimer] = useState(100);
  const inputRef = useRef(null);
  const [switcher, setSwitcher] = useState(false);
  console.log(universe.boxesAlive);
  let myInterval = useRef(null);
  const editTime = (e) => {
    if (!isGenerating) {
      setTimer(e.target.value);
    }
  };
  const editHeight = (e) => {
    if (!isGenerating) {
      var actualSize = [...size];

      if (e.target.value < 20) actualSize[1] = e.target.value;
      else actualSize[1] = 20;

      setSize(actualSize);

      setBoard();
    }
  };
  const editWidth = (e) => {
    if (!isGenerating) {
      var actualSize = [...size];

      if (e.target.value < 70) actualSize[0] = e.target.value;
      else actualSize[0] = 70;

      setSize(actualSize);

      setBoard();
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
  const randomize = () => {
    if (!isGenerating) {
      for (var i = 0; i < size[0]; i++) {
        for (var j = 0; j < size[1]; j++) {
          const randomTrue = Math.random() > 0.7 ? true : false;
          if (randomTrue) {
            universe.createBox({ x: i, y: j });
          } else {
            universe.deleteBox(i + " , " + j);
          }
        }
      }
      setBoard();
      setSwitcher((switcher) => !switcher);
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
  const clearBoard = () => {
    if (!isGenerating) {
      universe.boxesAlive.forEach((value, key) => {
        universe.deleteBox(key);
      });
      universe.currentIteration = 0;
      setSwitcher((value) => !value);
    }
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
          {/* <label>
            width is
            <input
              className="changeTime"
              type="text"
              value={size[0]}
              onChange={editWidth}
            />
          </label> */}
          <label>
            height is
            <input
              className="changeTime"
              type="text"
              value={size[1]}
              onChange={editHeight}
            />
          </label>
          <label>
            width is
            <input
              className="changeTime"
              type="text"
              value={size[0]}
              onChange={editWidth}
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
          <button className="learn-more buttonyellow" onClick={clearBoard}>
            Clear
          </button>
          <button className="learn-more buttonpurple" onClick={randomize}>
            Randomize
          </button>
        </div>
      </div>
      <div className="wrapAllBoxes" ref={inputRef} onChange={() => switcher}>
        {setBoard()}
      </div>
      <p>Generations: {universe.currentGen()}</p>
    </div>
  );
};

export default WholeConway;
