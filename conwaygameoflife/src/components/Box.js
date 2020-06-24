import React from "react";
const Box = (props) => {
  return (
    <div
      className={props.live ? "aliveBox" : "deadBox"}
      onClick={() => props.cellInfo(props.place)}
    ></div>
  );
};

export default Box;
