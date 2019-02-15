import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from '../reducers'

const loggerMiddlewsre = createLogger();

export const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddlewsre
    )
  )
);
