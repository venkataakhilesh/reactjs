// import { useState } from "react";

// const Counter = ()=>{

//  const[Counter,setCounter]= useState (0); 
 
//  const incr = ()=>{
//     setCounter(Counter+1)  
//  }
//  const decr = ()=>{
//     setCounter(Counter-1)
//  }
//    return(
//     <>
//      <button onClick={incr}>minus</button>
//      <p>{Counter}</p>
//      <button onClick={decr}>plus</button>
//     </>
//    )
// }
// export default Counter;

import React from "react";
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        };
    }
 incr = () =>{
    this.setState({
        count: this.state.count + 1,
    });
 };
 decr = () => { 
    this.setState({
        count: this.state.count - 1,
    });
 };
   
 render(){
    return(
        <>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.incr}>plus</button>
        <button onClick={this.decr}>mins</button>
        
        </>
    );
 }

}
export default Counter;
