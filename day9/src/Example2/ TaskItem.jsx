import React from 'react'
import TaskDetails from './TaskDetails';

const  TaskItem = ({task}) => {
  return (
    <TaskDetails task={task}/>
  )
}

export default  TaskItem