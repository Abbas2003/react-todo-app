// import './App.css'

import { useState } from "react"
import Input from "./components/TodoInput"
import Todos from "./components/TodoList"

function App() {

  const [inp, setInp] = useState("")
  const [todos, setTodos] = useState([
    {
      todo: "Coding",
      id: Date.now(),
      isCompleted: false,
    },
  ])

  const addTodo = () => {
    const allTodos = [...todos, {
      inp,
      id: Date.now(),
      isCompleted: false
    },
  ]

    setTodos([...allTodos])
    setInp("")
  }

  // console.log("Value in the input", inp);
  console.log(inp); 
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-5">Todo App</h1>
      <Input 
        onClick={addTodo} 
        onChange={(e) => setInp(e.target.value)}
        value={inp}
      />

      <Todos todos={todos} />
    </div>
  )
}

export default App
