import React from 'react'
import Child from '../Child';

const App = () => {
  const data = "Hello form parent component";
  return (
    <>
    <Child data={data} />
    </>
  );
};

export default App;