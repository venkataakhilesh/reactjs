import React, { useState } from "react";
import ExpensiveCalc from "./ExpensiveCalc";

const ParentComp = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <ExpensiveCalc num={count} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setOtherState(otherState + 1)}>
          Increment other state
        </button>
      </div>
    </>
  );
};

export default ParentComp;