import React, {useState} from 'react'
import TaskForm from './TaskForm'
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  /**
   * If the todo.text is empty or contains only whitespace, then return; otherwise, add the todo to the
   * todos array and set the todos state to the new array.
   * @returns The newTodos array.
   */

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);  
  };

  /**
   * If the newValue.text is empty or contains only whitespace, then return. Otherwise, update the todo
   * with the newValue.
   * @returns The return value is the updated todo item.
   */
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  /**
   * The removeTodo function takes an id as an argument, creates a new array from the todos array,
   * filters out the todo with the matching id, and then sets the todos array to the new filtered
   * array.
   */
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  /**
   * If the todo.id is equal to the id passed in, then toggle the isComplete property.
   */
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TaskForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList