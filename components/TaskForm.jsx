import React, { useState, useEffect, useRef } from 'react'


function TaskForm(props) {

  const [task,setTask] = useState(props.edit ? props.edit.value : '');

  /**
   * When the submit button is clicked, prevent the default action, then call the onSubmit function
   * with an object containing a random id and the text of the task.
   */
  const submitButton = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: task
    });

    setTask('');
  };

  const taskInput = (e) => {
    setTask(e.target.value)
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });


  return (
    <>
    
    <form className="task-form" onSubmit={submitButton}>

    {props.edit ? (
        <>
          <input
            placeholder='Update task'
            value={task}
            onChange={taskInput}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={submitButton} className='task-button edit'>
            Update task
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Enter your task'
            value={task}
            onChange={taskInput}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={submitButton} className='task-button'>
            Add task
          </button>
        </>
      )}

  
    </form>
    
    </>
  )
}

export default TaskForm