import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        title: "default todo",
        id: "default id",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload.index, 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
