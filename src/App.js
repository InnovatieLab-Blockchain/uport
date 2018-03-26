// Frameworks
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from './actions/AppActions'

import styled from 'styled-components'

// Components
import AppNavbar from './components/AppNavbar'
import Welcome from './components/Welcome'
import SignTransaction from './components/SignTransaction'
import CollectCredentials from './components/CollectCredentials'
import RequestCredentials from './components/RequestCredentials'
import RevokeCredentials from './components/RevokeCredentials'
import GetOpenBadge from './components/GetOpenBadge'
import LogOut from './components/LogOut'
import StoreScore from './components/StoreScore'

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const AppBody = styled.div`
  flex: 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 100%;
  padding: 20px;
`

class App extends Component {
  render () {
    return (
      <AppWrap>
        <AppNavbar />
        <AppBody>
          {
            !this.props.uport &&
            !this.props.signTransactionPage
              ? <Welcome />
              : null
          }
          {
            this.props.storeScorePage === true &&
            !this.props.collectCredentialsPage
              ? <StoreScore />
              : null
          }     
          {
            this.props.signTransactionPage === true &&
            !this.props.collectCredentialsPage
              ? <SignTransaction />
              : null
          }          
          {
            this.props.revokeCredentialsPage === true &&
            !this.props.collectCredentialsPage
              ? <RevokeCredentials />
              : null
          }
          {
            this.props.getOpenBadgePage &&
            !this.props.registerYourAppPage
              ? <GetOpenBadge />
              : null
          }
          {
            this.props.requestCredentialsPage &&
            !this.props.registerYourAppPage
              ? <RequestCredentials />
              : null
          }
          {
            this.props.collectCredentialsPage &&
            !this.props.registerYourAppPage
              ? <CollectCredentials />
              : null
          }
          {
            this.props.logOutPage
              ? <LogOut />
              : null
          }
        </AppBody>
      </AppWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    signTransactionPage: state.App.signTransactionPage,
    collectCredentialsPage: state.App.collectCredentialsPage,
    requestCredentialsPage: state.App.requestCredentialsPage,
    revokeCredentialsPage: state.App.revokeCredentialsPage,    
    getOpenBadgePage: state.App.getOpenBadgePage,
    storeScorePage: state.App.storeScorePage,
    logOutPage: state.App.logOutPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
