import React, { useState, useEffect } from "react";

const Buttons = (props) => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (props.clearPress === false) {
      setStart(false);
    }
  }, [props.clearPress]);
  return (
    <div className="buttons">
      <button className="button clear" onClick={() => props.clear()}>
        Clear
      </button>
      <button className="button randomize" onClick={() => props.randomize()}>
        Randomize
      </button>
      {start ? (
        <button
          onClick={() => {
            setStart(!start);
            props.stop();
          }}
          className="button stop"
        >
          Stop
        </button>
      ) : (
        <button
          onClick={() => {
            setStart(!start);
            props.start();
          }}
          className="button start"
        >
          Start
        </button>
      )}
    </div>
  );
};
export default Buttons;
