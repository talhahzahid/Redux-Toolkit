import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// // dispatch
// // redux mein value bhj na ke liya dispatch

// // useSelector
// // redux se value mangwana ke liya
