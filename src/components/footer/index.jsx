import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import './index.scss'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Link to={{
          pathname: '/'
        }}>首页</Link>
        <Link to={{
          pathname: '/mine',
          state: {token: 'mine1'}
        }}>个人中心</Link>
      </div>
    );
  }
}

export default Footer