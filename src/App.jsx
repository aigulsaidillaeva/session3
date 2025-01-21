import React from "react";
import Counter from "./components/Counter";
import ColoredText from "./components/ColoredText";
import TextToggle from "./components/TextToggle";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Counter val={7} />
      <ColoredText color="red" />
      <TextToggle val="Выключено" />
    </div>
  );
};

export default App;
