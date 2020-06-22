import React from "react";

const Square = (props) => {
  const changeStatusSquare = () => {
    props.changeStatus(props.row, props.col);
  };
  return (
    <div
      className={props.currentClass}
      id={props.id}
      onClick={() => {
        props.changeStatus(props.row, props.col);
      }}
    >
      <p style={{ fontSize: 6 }}>{props.id}</p>
    </div>
  );
};

export default Square;
