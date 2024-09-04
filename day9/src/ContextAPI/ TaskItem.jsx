import React, { useContext } from 'react'
import TaskDetails from './TaskDetails';
import { MyContext } from './App';

const  TaskItem = () => {

const tasks = useContext(MyContext)
  return (
    <TaskDetails task={task}/>
  )
}

export default  TaskItem