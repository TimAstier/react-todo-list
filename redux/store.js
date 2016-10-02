import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

// es6 syntax for default param if not provided
export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
}