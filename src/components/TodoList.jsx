import React from "react";

function TodoList({ todos, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center my-2 p-2 border-b">
          <span className="font-mono font-bold text-2xl" >{todo.inp}</span>
          <button
            onClick={() => onDelete(todo.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
