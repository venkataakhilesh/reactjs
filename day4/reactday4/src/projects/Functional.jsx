// import "./Mystylesheets.css";
// import  styles from "./Mysheet.module.css";
const Functional =()=>{
    return(
        <div className="border border-primary border-5 my-5 py-5 w-50 ms-3">
          <h1 style={{color:"red", }}>External using Functional</h1>
          <h1 className={`secondary fonts text`}>Internal using Functional</h1>
          {/* <h1 className={styles.primary}>module using Functional</h1> */}
          <h1 className="text-warning">bootstrap using Functional</h1>
        </div>
    )
}
export default Functional;