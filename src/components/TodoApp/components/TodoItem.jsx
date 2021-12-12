import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, updateTodo } from '../todoAppSlice'

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onEditing: PropTypes.func
}

TodoItem.defaultProps = {
    onEditing: null
}

function TodoItem({ todo, index, onEditing }) {
    const dispatch = useDispatch()
    const inputEditRef = useRef(null)

    const handleEditing = () => {
        if (onEditing) {
            onEditing(index)
            setTimeout(() => inputEditRef.current.focus(), 0)
        }
    }

    const handleCancelEditing = () => {
        if (onEditing) onEditing(null)
    }

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            if (inputEditRef.current.value !== todo.title) {
                dispatch(
                    updateTodo({
                        index,
                        newTitle: inputEditRef.current.value
                    })
                )
            }

            if (onEditing) onEditing(null)
        }
        if (e.keyCode === 27) if (onEditing) onEditing(null)
    }

    return (
        <>
            <div className='view'>
                <input
                    className='toggle'
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(index))}
                />
                <label onDoubleClick={handleEditing}>{todo.title}</label>
                <button className='destroy' onClick={() => dispatch(removeTodo(index))}></button>
            </div>
            <input
                ref={inputEditRef}
                className='edit'
                onBlur={handleCancelEditing}
                defaultValue={todo.title}
                onKeyDown={handleKeyDown}
            />
        </>
    )
}

export default TodoItem
