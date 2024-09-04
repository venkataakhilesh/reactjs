// import "./MyStylesSheet.css";
// import styles from "./style.module.css";
import React from "react";
class Classcomp extends React.Component{
 render(){
    return(
        <div>
            <div className="border border-primary rounded border-5 my-5 py-5 box mx-2">
            <h2 style={{color: "red"}}>Internal CSS Using Class Component</h2>
            <h2 className={`secondary font text`}>External CSS Using Class Component</h2>
            {/* <h2 className={primary}>Module CSS Using Class Component</h2> */}
            <h2 className="text-warning">Bootstrap CSS Using Class Component</h2>
        </div>
        </div>
    )
 }   
}
export default Classcomp;