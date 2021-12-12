import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import clsx from 'clsx'

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired
}

function TodoList({ todoList }) {
    const [editing, setEditing] = useState(null)

    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li
                    key={index}
                    className={clsx({
                        completed: todo.completed,
                        editing: editing === index
                    })}
                >
                    <TodoItem todo={todo} index={index} onEditing={setEditing} editing={editing} />
                </li>
            ))}
        </ul>
    )
}

export default TodoList
