import { SET_TODOS, SELECT_TODO, SET_TASKS } from '../actions'

export const selectTodo = (state = null, action) => {
  switch (action.type) {
    case SELECT_TODO:
      return action.todo;
    default:
      return state
  }
};

export const todosReducer = (state = { todos: [], tasks: [] }, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };
    default:
      return state
  }
};
