import {useEffect, useState} from 'react'
import './App.css'
import TodoItem from "./components/TodoItem.jsx";

function App() {
  const [todoList, setTodoList] = useState([])
  const [value, setValue] = useState("")

  const addTodo = () => {
    if(value.length !== 0){
      setTodoList([{id: Math.random(), todo: value, completed: false}, ...todoList])
      setValue("")
    }
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    setTodoList(todos)
    console.log('eff1')
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
    console.log('eff2')
  }, [todoList])

  const deleteTodo = id => {
    const filteredTodos = todoList.filter(item => item.id !== id)
    setTodoList(filteredTodos)
  }

  const finishTodo = id => {
    const copy = [...todoList]
    const index = copy.findIndex(item => item.id === id)
    copy[index].completed = !copy[index].completed
    setTodoList(copy)
  }

  return (
    <div className="App">
      <div className="todo-list__wrapper">
        <div className="todo-list__heading">
          <span>Add todo</span>
          <input type="text"
                 value={value}
                 onChange={e => setValue(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="todo-list__body">
          <div>Todo List</div>
          {todoList.length !== 0 &&<ul>
            {todoList.map((item) => (
                <TodoItem name={item.todo}
                          id={item.id}
                          key={item.id}
                          completed={item.completed}
                          finishTodo={finishTodo}
                          deleteTodo={deleteTodo}
                />
            ))}
          </ul>}
        </div>
      </div>
    </div>
  )
}

export default App
