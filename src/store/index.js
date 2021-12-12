
import { configureStore } from "@reduxjs/toolkit"
import TodoAppReducer from "../components/TodoApp/todoAppSlice"

const rootReducer = {
    todoApp: TodoAppReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store