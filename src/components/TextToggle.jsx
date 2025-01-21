import React, { useState } from "react";

const TextToggle = (props) => {
  const [text, setText] = useState(props.val);
  const changeText = () => {
    if (text === "Выключено") {
      setText("Включено");
    } else {
      setText("Выключено");
    }
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={changeText}>Переключить</button>
    </div>
  );
};

export default TextToggle;
