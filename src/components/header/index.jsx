import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import style from './index.module.scss'

import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;


class Header extends Component{
  constructor(props){
    super(props)
  }
  state = {
    current: '/',
  }

  handleClick(e){
    const { history } = this.props
    this.setState({
      current: e.key
    })
    history.push({
      pathname: e.key
    })
  }
  componentWillMount(){
    const { pathname } = this.props.location
    this.setState({
      current: pathname
    })
  }
  render() {
    return (
      <div className={style.header}>
        <div className={style.left}>广告投放</div>
        <div className={style.right}>
          <div className={style.login}>登陆</div>
          <div className={style.register}>注册</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
