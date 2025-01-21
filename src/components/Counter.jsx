import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.val);

  const minus = () => {
    setCounter(counter - 1);
  };

  const plus = () => {
    setCounter(counter + 1);
  };

  const clear = () => {
    setCounter(counter - counter);
  };

  if (counter < 0) {
    setCounter(counter - counter);
  }

  return (
    <div className="count">
      <div>{counter} </div>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <button onClick={clear}>x</button>
    </div>
  );
};

export default Counter;
