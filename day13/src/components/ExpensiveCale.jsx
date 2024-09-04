import { useMemo } from "react";

const ExpensiveCalc = ({ num }) => {
  const expensiveResult = useMemo(() => {
    console.log("running expensive calculation");
    return num - 2;
  }, [num]);
  return (
    <>
      <div>Result : {expensiveResult}</div>
    </>
  );
};

export default ExpensiveCalc;