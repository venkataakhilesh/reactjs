import React from "react";
import useFormInput from "../Hooks/useFormInput";

const FormInput = () => {
  const name = useFormInput("");
  const email = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name : ${name.value} and Email : ${email.value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name : 
            <input type="text" placeholder="enter your name..." {...name} />
          </label>
        </div>

        <div>
          <label>
            Email :
             <input type="email" placeholder="enter your email..." {...email} />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormInput;