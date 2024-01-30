import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1, 
        text: 'Hello world'
    }],
    selectedTodo: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo: any = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(item => item.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
                state.selectedTodo = null;
            }
        },
        selectedTodo: (state, action) => {
            state.selectedTodo = action.payload;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload);
        }
    }
});

export const { addTodo, updateTodo, selectedTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;