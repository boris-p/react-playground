/* global process */
import { applyMiddleware, createStore, compose } from 'redux'

import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers/index'

let composeEnhancers = compose

let store
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers(applyMiddleware(promise(), thunk, createLogger())))
} else {
  store = createStore(reducer, composeEnhancers(applyMiddleware(promise())))
}
export default store
