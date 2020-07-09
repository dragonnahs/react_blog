import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import user from './user/reducer.js'
import siderInfo from './siderInfo/reducer'

const reducers = combineReducers({
  user,
  siderInfo
})

export default createStore(reducers, applyMiddleware(thunk))