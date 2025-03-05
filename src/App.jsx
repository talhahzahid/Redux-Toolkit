// import React, { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "./config/redux-config/reducers/todoSlice";  // Adjust the import path as needed

// const App = () => {
//   const todo = useRef();  // Reference to the input field
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state.todos);  // Get todos from the Redux store

//   const addTodos = (event) => {
//     event.preventDefault();  // Prevent the default form submission

//     // const todoValue = todo.current.value.trim();  // Get and trim the input value
//     // if (todoValue) {
//     //   // Dispatch the action to add the new todo
//     //  // Log the current todos in the console (optional)
//     // }
//     dispatch(
//       addTodo({
//         title: todo.current.value,
//       })
//     );
//     todo.current.value = "";  // Clear the input field after dispatching

//     console.log(selector);
//   };

//   return (
//     <div>
//       <h1>hello redux toolkit</h1>
//       <form onSubmit={addTodos}>
//         <input type="text" ref={todo} />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default App;





import { useState , } from "react";
import React from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState(["Example Todo 1", "Example Todo 2"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center border border-gray-400">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Todo List</h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter todo"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
        <ul className="mt-4 text-left bg-gray-100 p-4 rounded-lg shadow-inner">
          {todos.map((todo, index) => (
            <li key={index} className="border-b py-2 last:border-none text-gray-800 flex items-center justify-between">
              <span>{todo}</span>
              <button className="text-red-500 hover:text-red-700">&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

