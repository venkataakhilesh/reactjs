// import React from "react";
// import Mystylesheets from "./Components/Mystylesheets";

// const App =() =>{
//   return (
//     <div>
//        <Mystylesheets data={true}/>
//     </div>
//   );
// };

// export default App;
import Main from "./projects/Main";

import Functional from "./projects/Functional";
import Classcomp from "./projects/Classcomp";

const App = ()=>{
  return(
    
    <div>
      <h1>Styling Using Functional And Class Component</h1>
      <Main/>
      <div className="d-flex align-items-center"> 
      <Functional/>
      <Classcomp/>        
        </div>   

    </div>
   
  )
}

export default App;