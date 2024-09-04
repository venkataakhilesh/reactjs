import React from 'react'
import { useCustom }from '../Hooks/useCustom';

const Counter2 = () => {
 const [count,increment,decrement] =  useCustom();
  return (
    <>
     <h2>count:{count}</h2>
     <button onMouseOver={increment}>increment</button>
     <button onMouseOver={decrement}>decrement</button>
    </>
  );
};

export default Counter2;