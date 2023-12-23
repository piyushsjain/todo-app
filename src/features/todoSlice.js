import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1, text: "Welcome"}]
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            console.log(action.payload.updatedText);
            for (let i = 0; i < state.todos.length; i++) {
                if(state.todos[i].id === action.payload.id){
                    state.todos[i].text = action.payload.updatedText
                }
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;