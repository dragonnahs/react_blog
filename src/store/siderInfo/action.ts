import {SETARTICLES} from './type'

export const setArticles = (articles:object[]) => {
  return (dispatch:any) => {
    dispatch({
      type: SETARTICLES,
      articles
    })
  }
}