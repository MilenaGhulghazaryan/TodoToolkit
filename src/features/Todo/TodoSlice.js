import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
        value: '',
        editId: null
    },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        },
        addTodo: (state, action) => {
            state.todoList = [...state.todoList, { id: Math.random(), element: action.payload }]
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(val => val.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todoList.find(val => val.id == action.payload.editId).element = action.payload.value
        },
        changeEditId: (state, action) => {
            state.editId = action.payload
        }
    }
})
export const { changeValue, addTodo, deleteTodo, editTodo, changeEditId } = TodoSlice.actions
export default TodoSlice.reducer


