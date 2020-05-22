import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './index.module.scss'

import Left from '../left'
import Header from '../header'




class Container extends Component {
  
  render() {
    console.log(this.props)
    const { children } = this.props
    return (
      <>
        <div className={style.container}>
          <Header/>
          <div className={style.middle}>
            <Left/>
            <div className={style.main}>
              {children}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  
)(Container);