import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import filters from '../filters'
import { changeFilter, removeTodoCompleted } from '../todoAppSlice'

function Footer() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.todoApp)

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{state.todoList.filter(todo => !todo.completed).length}</strong> item left
            </span>
            <ul className='filters'>
                {Object.keys(filters).map(filter => (
                    <li key={filter}>
                        <a
                            className={clsx({
                                selected: filter === state.filter
                            })}
                            href={`#/${filter}`}
                            onClick={() => dispatch(changeFilter(filter))}
                        >
                            {filter[0].toUpperCase() + filter.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            {state.todoList.filter(todo => todo.completed).length > 0 && (
                <button className='clear-completed' onClick={() => dispatch(removeTodoCompleted())}>
                    Clear completed
                </button>
            )}
        </footer>
    )
}

export default Footer
