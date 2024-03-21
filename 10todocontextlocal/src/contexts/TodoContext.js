import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "Learn React",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  removeTodo: (id) => {},
  toggleComplete: (id) => {},
});




export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  jjjj;
};
