import { createSlice } from '@reduxjs/toolkit'
import { getStorage, setStorage } from '../../storage'

const TodoAppSlice = createSlice({
    name: 'todoApp',
    initialState: {
        todoList: getStorage(),
        todoInput: '',
        filter: 'all'
    },
    reducers: {
        setTodoInput: (state, action) => {
            state.todoInput = action.payload
        },
        addTodo: (state, action) => {
            state.todoList.push({
                title: action.payload,
                completed: false
            })
            setStorage(state.todoList)
        },
        toggleTodo: (state, action) => {
            state.todoList[action.payload].completed = !state.todoList[action.payload].completed
            setStorage(state.todoList)
        },
        removeTodo: (state, action) => {
            state.todoList.splice(action.payload, 1)
            setStorage(state.todoList)
        },
        removeTodoCompleted: state => {
            state.todoList = state.todoList.filter(todo => !todo.completed)
            setStorage(state.todoList)
        },
        updateTodo: (state, action) => {
            state.todoList[action.payload.index].title = action.payload.newTitle
            setStorage(state.todoList)
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
        toggleAllTodo: (state, action) => {
            state.todoList.forEach(todo => (todo.completed = action.payload))
            setStorage(state.todoList)
        }
    }
})

const { actions, reducer } = TodoAppSlice

export const {
    setTodoInput,
    toggleTodo,
    removeTodo,
    updateTodo,
    addTodo,
    removeTodoCompleted,
    changeFilter,
    toggleAllTodo
} = actions

export default reducer
