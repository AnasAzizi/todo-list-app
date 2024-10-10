import { createSlice } from "@reduxjs/toolkit";
import TodoList from "../components/TodoList";


const initialState={
    todoList:[],
};
const TodoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
        state.todoList.push(action.payload);
        },
        setCheck:(state,action)=>{
            state.todoList.map((todo)=>{
                if(action.payload== todo.id){
                    todo.done ? (todo.done=false):(todo.done=true);
                }
            })
        }
    }
})

export const {addTodo,setCheck}=TodoSlice.actions;
export default TodoSlice.reducer;

