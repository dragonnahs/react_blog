import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd'

import style from './index.module.scss'

import MHeader from '../header/index.jsx'


const {Sider, Header} = Layout

type defaultPorps = {
  name: string
}

const Container: React.FC<defaultPorps> = (props) => {
  
  console.log(props)
  const { children } = props
  return (
    <Layout style={{minHeight: '100%'}}>
      <Header style={{position: "fixed",width:'100%',backgroundColor:'#ffffff',height:'46px',zIndex: 1,borderBottom: '1px solid #f7f4f4'}}>
        <MHeader/>
      </Header>

      <Layout style={{height: '100%',maxWidth: '960px',margin: '66px auto 0',width: '80%'}}>
        <div>
          {children}
        </div>
        
      </Layout>
    </Layout>
  );
}

export default connect(
  
)(Container);