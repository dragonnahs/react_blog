import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loginAction } from '../../store/user/action'

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from './index.module.scss'

import axios from '../../axios/index'

class Login extends Component {
  state = {
    name: '',
    password: ''
  }
  async onFinish(values) {
    console.log(values, 222, this.props)
    const { history } = this.props
    const { state } = this.props.location
    sessionStorage.setItem('token', values.name)
    history.replace({
      pathname: (state && state.pathname) ? state.pathname : '/cms/home'
    })
    // let res = await axios({
    //   url: '/api/v1/user/login',
    //   method: 'get'
    // })
    // console.log(res)
  };
  
  handleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className={style.login}>
        <Form
          name="normal_login"
          className={style['login-form']}
          initialValues={{ remember: true }}
          onFinish={this.onFinish.bind(this)}
        >
          <Form.Item
            name="username"
            className='login-form'
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit"
            className={style['login-form-button']}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {

  }
}

export default connect(
  mapStateToProps,
  { loginAction }
)(Login)