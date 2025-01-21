import React, { useState } from "react";

const ColoredText = (props) => {
  const [color, setColor] = useState(props.color);

  const changeColor = () => {
    if (color === "red") {
      setColor("black");
    } else {
      setColor("red");
    }
  };
  return (
    <div>
      <p style={{ color: color }}>Этот текст меняет цвет!</p>
      <button onClick={changeColor}>Сменить текст</button>
    </div>
  );
};

export default ColoredText;
