import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Toodlist = () => {
 const [Tood ,setTood]  = useState("");
 const [Toods,settoods] = useState([]);
 
    const handlechange = (e) =>{
    setTood(e.target.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault()
        settoods([...Toods,Tood])
        setTood("");
        console.log(Toods);
        
    }
            
 
  return (
    <>
    <h1>Toodlist</h1>
    <div className='container'>
        <div className='col-md-3'>
    <form onSubmit={handlesubmit}>
        <label>
            <input type="text" placeholder='Enter your Tood.....' className='form-control' value={Tood} onChange={handlechange}/>
            <button className='btn btn-warning'>submit</button>
        </label>
    </form>
    </div>
    </div>
    <ul>
        {
            Toods.map((Tood,index)=>(
                <li key={index}>{Tood}</li>
            ))
        }
    </ul>
    </>
  )
}

export default Toodlist;