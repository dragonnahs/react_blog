import React, { Component } from 'react';
import { connect } from 'react-redux'

import Container from '../../components/container'

import { logoutAction } from '../../store/user/action.js'



class Mine extends Component {
  
  render() {
    
    return (
      <Container>
        mine
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.user }
}

export default connect(
  mapStateToProps,
  { logoutAction }
)(Mine)