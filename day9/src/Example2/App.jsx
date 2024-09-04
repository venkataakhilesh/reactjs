// App.jsx(data) =>> TaskList =>> TaskItem =>> Taskdetails(data)
//props drilling

import { useState } from "react";
import TaskList from "./TaskList";
import "../App.css"

const App = () =>{
 const [task,setTask] =useState([
    {id : 1 , title:"Task1", description:"Description1"},
    {id : 2 , title:"Task2", description:"Description2"},
    
    
 ])
    return(
     <>
     <TaskList task={task}/>
     </>
    );
};
export default App;