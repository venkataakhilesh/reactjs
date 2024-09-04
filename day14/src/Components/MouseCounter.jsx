import React, { useState } from "react";

const MouseCounter = () => {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  const decr = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>MouseCounter counter:{count}</h2>
      <button onMouseOver={incr}>incerement</button>
      <button onMouseOver={decr}>decrement</button>
    </>
  );
};
export default MouseCounter;
