import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './index.module.scss'

import Left from '../left'
import Header from '../header'

import { Layout } from 'antd'

const { Sider } = Layout


class Container extends Component {
  
  render() {
    console.log(this.props)
    const { children } = this.props
    return (
      <Layout style={{height: '100%'}}>
        <Header />
        <Layout style={{height: '100%'}}>
          <Sider width={200} className={style['site-layout-background']}>
            <Left/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <div className={style.main}>
              {children}
            </div>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  
)(Container);