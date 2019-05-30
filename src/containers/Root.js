import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from '../store'

import { Firebase, FirebaseContext } from '../services'

import { App } from '../components'

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>
);

export default Root
