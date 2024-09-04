import React, { useState } from 'react'

const Counter1 = () => {
 const [count,setcount] =  useState(0);

 const increment = ()=>{
    setcount(count+1)
 }
 const decrement = ()=>{
    setcount(count-1)
 }
  return (
    <>
    <h2>count:{count}</h2>
     <button onMouseOver={increment}>increment</button>
     <button onMouseOver={decrement}>decrement</button>
    </>
  )
}

export default Counter1