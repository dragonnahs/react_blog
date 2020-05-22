import React, { Component } from 'react'

import { Route, Redirect } from 'react-router-dom'


class PrivateRoute extends Component{

  render(){
    console.log(this.props)
    const { exact=false, key, component:Component, path } = this.props
    return (
      <Route path={path} exact={exact} key={key} render={props => {
        if(sessionStorage.getItem('token')){
          return (<Component {...props} />)
        }else{
          return (<Redirect to={{
            pathname: '/login',
            state: {from: path}
          }}></Redirect>)
        }
      }}></Route>
    )
  }
}

export default PrivateRoute