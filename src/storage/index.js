const TODO_APP_KEY = 'todo_app'

export const getStorage = () => JSON.parse(localStorage.getItem(TODO_APP_KEY)) || []
export const setStorage = (data) => localStorage.setItem(TODO_APP_KEY, JSON.stringify(data))