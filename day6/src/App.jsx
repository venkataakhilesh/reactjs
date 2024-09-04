// class component
import React from "react";
import Greeting from "./Component/Greeting";
import Counter from "./Component/Counter";


class App extends React.Component{
  render(){
    return(
      <>
      {/* <Greeting  name = "Akhilesh"/> */}
      <Counter/>
      </>
    )
  }
}
export default App;