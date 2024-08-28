import { useState } from "react";
import Input from "./components/TodoInput";
import Todos from "./components/TodoList";

function App() {
  const [inp, setInp] = useState("");
  const [todos, setTodos] = useState([
    {
      inp: "Coding",
      id: Date.now(),
      isCompleted: false,
    },
  ]);

  // Function to add a new todo
  const addTodo = () => {
    const allTodos = [
      ...todos,
      {
        inp,
        id: Date.now(),
        isCompleted: false,
      },
    ];

    setTodos(allTodos);
    setInp("");
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id); // Filters out the todo with the given id
    setTodos(filteredTodos);
  };

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-5">Todo App</h1>
      <Input onClick={addTodo} onChange={(e) => setInp(e.target.value)} value={inp} />

      <Todos todos={todos} onDelete={deleteTodo} /> {/* Pass delete function as a prop */}
    </div>
  );
}

export default App;
