import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodoInput, addTodo } from '../todoAppSlice'

function Header() {
    const todoInput = useSelector(state => state.todoApp.todoInput)
    const dispatch = useDispatch()

    const handleAddTodo = value => {
        dispatch(addTodo(value))
        dispatch(setTodoInput(''))
    }

    return (
        <header className='header'>
            <h1>todos</h1>
            <input
                className='new-todo'
                placeholder='What needs to be done?'
                value={todoInput}
                onChange={e => dispatch(setTodoInput(e.target.value))}
                onKeyDown={e => e.keyCode === 13 && handleAddTodo(e.target.value)}
            />
        </header>
    )
}

export default Header
