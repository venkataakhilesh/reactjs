import React, { useReducer } from 'react'

const initialstate = {count:0}

const reducer = (state, action)=> {
     switch(action.type){
        case "increment":
            return {
                count :state.count +1
            }
            break;
        case "decrement":
            return {
                count :state.count -1
            }
            break;
            default :
            return state;
     }
     
}



const Counter = () => {
const [state, dispatch] =useReducer(reducer, initialstate);

const increment = () =>{
    dispatch({type:"increment"})
};
const decrement = () =>{
    dispatch({type:"decrement"})
}

  return (
    <>
    
    <h2>count:{state.count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    
    </>
  )
}

export default Counter;