import React from 'react'
import { render } from 'react-dom'
import App from './component'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer, undefined)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document)


