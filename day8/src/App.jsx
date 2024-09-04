import React from "react";
// import "./App.css";
import Products from "./Components/Products/Product";

const App = () =>{
  // const fruits = ["ducati","kawasaki","tiumph","jawa","bmw","royal enfield"]

  return(
    <>
    {/* <ul>
       {
        fruits.map((fruit,index)=>
           <li key={index}>{fruit}</li>
        )
       }
      </ul>   */}
      <Products/> 
      
    </>
  )
}
export default App;