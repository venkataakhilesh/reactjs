import "./MYstylesheets.css";
import style from "./Mysheet.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Mystylesheets = (props) =>{
    let className = props.data ? "primary" :"";
    const newstyle={
        color: "blue",
        fontsize:"30px",
        fontfamily:"cursive",
        textAlign: "center",
        
    }
    return (
        <div>
            <h3 style={newstyle}>Inline styling</h3>
            <h1 className={`${className} fonts text` }>My stylesheet</h1>
            <h3 className={style.success}>Hello world</h3>

            <button className="btn btn-success">submit</button>
        </div>
    )
}
export default Mystylesheets;