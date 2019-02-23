import { combineReducers } from 'redux'

import { userReducer, todosReducer, selectTodo } from '.'

export const rootReducer = combineReducers({
  userState: userReducer,
  todosState: todosReducer,
  selectedTodo: selectTodo
});
