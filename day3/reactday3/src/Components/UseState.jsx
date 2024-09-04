import { useState } from "react"

const UseState =()=>{

    const [count,setcount] = useState(0);

    const decrement = ()=>{
        setcount(count -1);
    };
    const increment = ()=>{
        setcount(count +1);
    };
    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={decrement}>mins</button>
            <button onClick={increment}>plus</button>


        </div>
    )
}
export default UseState;