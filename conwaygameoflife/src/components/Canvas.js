import React, { Component, useEffect, useState } from "react";
import Square from "./Square";
const Canvas = (props) => {
  const [rows, setRows] = useState([]);
  const [whichClass, setWhichClass] = "";
  useEffect(() => {
    var temp = [];
    for (var i = 0; i < 31; i++) {
      for (var j = 0; j < 50; j++) {
        const ID = i + "-" + j;
        const isActive =
          props.isActive[i][j] === true ? "square inUse" : "square notInUse";
        const jvar = j;
        const ivar = i;
        temp.push(
          <Square
            key={ID}
            id={ID}
            currentClass={isActive}
            changeStatus={props.changeStatus}
            row={ivar}
            col={jvar}
          />
        );
      }
    }
    setRows(temp);
  }, [props.changeStatus, props.isActive]);
  return <div className="canvas">{rows}</div>;
};

export default Canvas;
