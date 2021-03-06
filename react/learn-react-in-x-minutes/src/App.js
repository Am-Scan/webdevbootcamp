import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()


  //At 22:13 using local storage, can't get it to save!

  useEffect(() => {
    localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])
 
  function handleAddTodo(e) {
     const name = todoNameRef.current.value
     if (name === '') return
     setTodos(prevTodos => {
       return [...prevTodos,  {id: uuidv4(), name: name, complete:false }]
     })
     todoNameRef.current.value = null

  }
 
  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add 'to do'</button>
      <button>Clear completed</button>
      <div> 0 left to do</div>
    </>
    
  )
  
}

export default App;
