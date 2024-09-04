import {useState}  from "react";

const App = ()=>{
  const [isvalid, setisvalid]= useState(true);
  //  Element variable
//    let age ;
//    if(isvalid){
//     age = <h2>you can drive</h2>
//    }else{
//     age = <h2>you cannot drive</h2>
//    }
// }

// return <>{age}</>;

// not the ideal way - if statement 
// if (isvalid){
//   return <h1>you can drive</h1>;

// }else{
//   return <h1>you cannot drive</h1>
// }

// ternary operator 
// prederred way 
// return <>{isvalid ? <h2>you can drive</h2>: <h2>sorry you cannot</h2>}</>

//short circuit
return<>{isvalid && <h2>you can drive</h2> }</>
};

export default App;