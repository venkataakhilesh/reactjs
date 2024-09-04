import React, { useContext } from "react";
import { NameContext } from "./NameProvider";

const NameInput = () => {
  const { setName } = useContext(NameContext);

  return (
    <>
      {/* <NameContext.Consumer> */}

      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      {/* </NameContext.Consumer> */}
    </>
  );
};

export default NameInput;
