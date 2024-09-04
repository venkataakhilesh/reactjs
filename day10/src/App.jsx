import React from "react";
import NameInput from "./Components/Nameinput";
import NameOutput from "./Components/NameOutput";
import NameProvider from "./Components/NameProvider";
import "./App.css";

const App = () => {
  return (
    <NameProvider>
      <div>
        <NameInput />
        <NameOutput />
      </div>
    </NameProvider>
  );
};

export default App;