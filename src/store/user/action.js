import { LOGIN, LOGOUT } from './type'

export const loginAction = (userInfo) => {
  return dispatch => {
    return dispatch({
      type: LOGIN,
      userInfo
    })
  }
}


export const logoutAction = () => {
  return dispatch => {
    return dispatch({
      type: LOGOUT
    })
  }
}