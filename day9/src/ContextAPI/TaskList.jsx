import React from 'react'
import TaskItem from './ TaskItem';

const TaskList = ({task}) => {
  return (
    <>
    <div>
        {task.map((task)=>(
             <TaskItem key={task.id} task={task}/>
        ))}
    </div>
    </>
  );
};

export default TaskList;