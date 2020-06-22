import React from "react";

const Square = (props) => {
  const changeStatusSquare = () => {
    props.changeStatus(props.row, props.col);
  };
  return (
    <div
      className={props.currentClass}
      id={props.key}
      onClick={() => props.changeStatus(props.row, props.col)}
    ></div>
  );
};

export default Square;
