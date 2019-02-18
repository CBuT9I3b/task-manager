import { SET_TODOS } from '../actions'

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos
      }
    default:
      return state
  }
}
