import { useState } from 'react'   
import './App.css'



// todo application
// it's state will look like this
// {
//      todos: [{title: "todo1", description: "first todo", completed: false}]
// }


// anytime a parent re-render, its child re-renders as well

function App() {
    const [todos, setTodos] = useState([{      // todos is the current state and setTodos is the way to update the state, arrays in a state variable
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false
    }, {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true
    }, {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true
    }, ]); 
  
    function addTodo() {
      // arr= [1, 2]
      // [...arr, 3] => [1, 2, 3]
      setTodos([...todos, {    // updating the state
        title: "new Todo",
        description: "desc of new todo"
      }])
    }
  
    return (
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {todos.map(function(todo) {     // similar to doing for loop
          return <Todo title={todo.title} description={todo.description} />
        })}
  
      </div>
    )
  }
  
  function Todo(props) {
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  }

export default App