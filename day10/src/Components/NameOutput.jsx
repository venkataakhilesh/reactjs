import React, { useContext } from "react";
import { NameContext } from "./NameProvider";

const NameOutput = () => {
  const { name } = useContext(NameContext);
  const reversedName = name.split("").reverse().join("");

  return (
    // <NameContext.Consumer>

    <div>
      <h3>Reversed Name </h3>
      <p>{reversedName}</p>
    </div>
  );

  // </NameContext.Consumer>
};

export default NameOutput;