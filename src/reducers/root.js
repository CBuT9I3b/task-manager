import { combineReducers } from 'redux'

import { userReducer, todosReducer } from '.'

export const rootReducer = combineReducers({
  userState: userReducer,
  todosState: todosReducer
});
