import { combineReducers } from 'redux'

import { userReducer, todosReducer } from '.'

export const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer
});
