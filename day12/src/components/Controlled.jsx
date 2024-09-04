import React from 'react'
import { useState } from 'react'

const Controlled = () => {
  const [data,setData] =  useState("")

  const handleChange = (e) =>{
    setData(e.target.value);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`the name is ${data}`);
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={data} onChange={handleChange} />
            </label>
            <button>submit</button>
        </form>

    </div>
  )
}

export default Controlled;