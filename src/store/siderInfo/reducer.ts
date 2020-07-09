import {SETARTICLES} from './type'

type stateType = {
  articles: object[]
}
const defaultState:stateType = {
  articles: []
}

export default (state = defaultState, action:any) => {
  let newState = {...state}
  switch(action.type){
    case SETARTICLES:
      newState.articles = action.articles
      return newState
    default:
      return newState;
  }
}