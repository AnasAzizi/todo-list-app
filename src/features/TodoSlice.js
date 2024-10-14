import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todoList: [],
};
const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        setCheck: (state, action) => {
            state.todoList.map((todo) => {
                if (action.payload == todo.id) {
                    todo.done ? (todo.done = false) : (todo.done = true);
                }
            })
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const { id, title } = action.payload;
            const todo = state.todoList.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
            }
        }
    }
})

export const { addTodo, setCheck, removeTodo, editTodo} = TodoSlice.actions;
export default TodoSlice.reducer;

