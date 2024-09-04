import React, { useState } from 'react'


const ClickCounter = () => {
  const [count,setCount]  =useState(0)
  const incr = () =>{
    setCount(count+1)
  }
  const decr = () =>{
    setCount(count-1)
  }
  return (
    <>
    <h2>click counter:{count}</h2>
    <button onClick={incr}>incerement</button>
    <button onClick={decr}>decrement</button>
    
    </>
  )
}

export default ClickCounter;