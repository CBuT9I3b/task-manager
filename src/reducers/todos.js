import { SET_TODOS, SET_TASKS } from '../actions'

const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks
      }
    default:
      return state
  }
}

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        [action.todos]: tasksReducer(state[action.todos], action)
      }
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos
      }
    default:
      return state
  }
}
