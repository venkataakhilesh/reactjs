// import React from 'react'
// import { useRef } from 'react';


// const UnControlled = () => {
  
//  const  nameRef = useRef(null);

  
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     alert(`the name is ${nameRef.current.value}`);
//   };
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" ref={nameRef}/>
//             </label>
//             <button>submit</button>
//         </form>

//     </div>
//   )
// }

// export default UnControlled;

import React from 'react'
import { useRef } from 'react'

const Uncontrolled = () => {
    
  const EmailRef =   useRef(null);
  const passwordRef =   useRef(null);
  const handleSubmit =(e) =>{
    e.preventDefault();
    alert(`your email is ${EmailRef.current.value}
your password ${passwordRef.current.value} `)
  }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <label >
             Email:
                <input type="text" ref={EmailRef} /> 
            </label>
            <br /> <br />
            <label>
            password:
            <input type="password" ref={passwordRef} />
            </label>
            <br /> <br />
            <button>submit</button>
        </form>
    </div>
    </>
  )
}

export default Uncontrolled