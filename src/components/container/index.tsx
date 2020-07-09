import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd'

import style from './index.module.scss'

import MHeader from '../header/index.jsx'
import Right from '../right/index.tsx'

const {Sider, Header} = Layout

type defaultPorps = {
  name: string
}

const Container: React.FC<defaultPorps> = (props) => {
  
  console.log(props)
  const { children } = props
  return (
    <Layout style={{minHeight: '100%'}}>
      
      <Header style={{position: "fixed",width:'100%',backgroundColor:'#ffffff',height:'46px',zIndex: 1}}>
        <MHeader/>
      </Header>

      <Layout style={{height: '100%',maxWidth: '960px',margin: '66px auto 0',width: '80%'}}>
        <div className={style.main}>
          {children}
        </div>
        <Sider style={{backgroundColor: 'transparent'}}>
          <Right/>
        </Sider>
      </Layout>
    </Layout>
  );
}

export default connect(
  
)(Container);