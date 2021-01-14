import React, {useState} from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import './index.css'
import AddTodo from './todo/AddTodo'

function App() {

  const [todos, setTodos] = useState([
    // { id: 1, completed: false, title: 'finally do first react app'},
    // { id: 2, completed: false, title: 'use remember app'},
    // { id: 3, completed: false, title: 'use mental coach app'}
  ])

  function toggleTodo(id){
   setTodos(
     todos.map(todo => {
        if(todo.id  === id){
          todo.completed = !todo.completed;
        }
        return todo
      })
   )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title){
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="container">
        <div className="todo">
            <h1 className="todo__title">My Todo list</h1>
            <AddTodo onCreate={addTodo}/>
            
            {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) : <p>No todos!</p>}
          </div>
      </div>
    </Context.Provider>
  );
}

export default App
