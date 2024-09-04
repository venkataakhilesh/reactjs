import Cards from "./Components/Cards";
import "./App.css";

const App = () => {
  return (
    <div style={{ display: "flex" , gap: "20px"}}>
      <Cards
        title="Porsche"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1eqAPParvbitbFq6vAk9wJxxIbwr2Ox6og&s"
        description="Choose boldly. · Models · The mid-engine sports car for two made for pure driving pleasure. · The iconic, rear-engine sports car with exceptional performance."
       />
      <Cards  
      title="bugatti" 
      img ="https://newsroom.cdn.bugatti-media.com/93471544-a546-4b8b-a4a6-f8ac327a23aa/original" 
      description = "DISCOVER THE HOME OF BUGATTI: EXPERIENCE THE INCOMPARABLE NATURE OF THE HYPER LUXURY BRAND AND ALL ITS OFFERING. FROM MOLSHEIM TO THE"
      />
      <Cards 
      title="lamborghini" 
      img="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MoOjj6q08IOQbpYGR2RRYjGrExO9Qwo2Cw&s"
      description = "Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."
      />
      <Cards 
      title="Ferrari" 
      img ="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDf2OKaEVf2E/v0/-1x-1.jpg" 
      description = "Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official Ferrari dealers, ..."
      />
    </div>
  );
};
export default App;

// import { useState } from "react";
// import UseState from "./Components/UseState";

// const App =()=>{
//   return(
//     <UseState/>
//   )
// }
// export default App;