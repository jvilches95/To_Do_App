import React, { useState } from 'react'


function Tasks() {

    const [tasks,setTasks] = useState([]);

    function submitTask(task){
setTasks((prevState)=>{
let tasks = {...prevState}
    tasks = task

    return tasks
})
    }


  return (
      <>
    <div>All Tasks will be here</div>
    <input placeholder='input tasks here'></input> <button onClick={submitTask}> Click me</button>
    </>
  )
}

export default Tasks