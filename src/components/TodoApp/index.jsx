import { useDispatch, useSelector } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoList from './components/TodoList'
import filters from './filters'
import './style.css'
import { toggleAllTodo } from './todoAppSlice'

function TodoApp() {
    const state = useSelector(state => state.todoApp)
    const dispatch = useDispatch()

    const todoList = state.todoList.length > 0 ? state.todoList.filter(filters[state.filter]) : []

    return (
        <section className='todoapp'>
            <Header />
            <section className='main'>
                <input
                    id='toggle-all'
                    className='toggle-all'
                    type='checkbox'
                    onClick={e => dispatch(toggleAllTodo(e.target.checked))}
                />
                <label htmlFor='toggle-all'>Mark all as complete</label>
                <TodoList todoList={todoList} />
            </section>
            {state.todoList.length > 0 && <Footer />}
        </section>
    )
}

export default TodoApp
