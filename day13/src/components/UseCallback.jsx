import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleChange = useCallback(() => {
    console.log("clicked");
    setCount(count + 1);
  }, [count]);
  

  //memoized the handleChange and we want re-render the child component when the state changes in UseCallback component

  //   UseCase - useMemo and useCallback
  //   optimize the performance of the component
  //   to prevent the re-rendering of the child component

  return (
    <>
      <h2>count : {count}</h2>
      <Child onClick={handleChange} />
    </>
  );
};

export default UseCallback;


//useReducer // Material UI(Bootstrap)