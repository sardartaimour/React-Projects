import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo: string) => {},
    updateTodo: (id: number | string, todo: any) => {},
    deleteTodo: (id: number | string) => {},
    toggleTodo: (id: number | string) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;