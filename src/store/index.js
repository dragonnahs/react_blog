import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import user from './user/reducer'

const reducers = combineReducers({
  user
})

export default createStore(reducers, applyMiddleware(thunk))