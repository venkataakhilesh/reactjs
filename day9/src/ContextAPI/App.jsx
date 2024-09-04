// App.jsx(data) =>> TaskList =>> TaskItem =>> Taskdetails(data)
//props drilling

import {  useState,createContext } from "react";
import TaskList from "./TaskList";
import "../App.css";

export const MyContext = createContext()

const App = () =>{
 const [task,setTask] =useState([
    {id : 1 , title:"Task1", description:"Description1"},
    {id : 2 , title:"Task2", description:"Description2"},
    
    
 ])
    return(
     <>
     <MyContext.Provider value={tasks}>
     <TaskList />
     </MyContext.Provider>
     </>
    );
};
export default App;