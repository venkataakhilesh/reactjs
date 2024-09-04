import React, { useState } from "react";

const useFormInput = () => {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

export default useFormInput;