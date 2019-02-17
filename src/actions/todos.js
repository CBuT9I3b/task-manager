export const SET_TODOS = 'SET_TODOS'
export const SET_TASKS = 'SET_TASKS'

export const setTodos = todos => ({
  type: SET_TODOS,
  todos
})

export const setTasks = (todo, tasks) => ({
  type: SET_TASKS,
  todo,
  tasks
})
