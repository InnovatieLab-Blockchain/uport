// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import styled from 'styled-components'
import { uport, lab_connector, uport2, attester2, attester3} from '../utilities/uportSetup'
import checkAddressMNID from '../utilities/checkAddressMNID'

const WelcomeWrap = styled.section``
const ConnectUport = styled.button``
const SubText = styled.p`
  margin: 0 auto 3em auto;
  font-size: 18px;
`

class Welcome extends Component {

  constructor (props) {
    super(props)
    this.connectUport = this.connectUport.bind(this)
  }

  connectUport () {
    lab_connector.requestCredentials(
      { requested: ['name', 'phone', 'country', 'avatar'],
        notifications: true }
    ).then((credentials) => {
        console.log({credentials})
        // console.log('Decoded uport address:', checkAddressMNID(credentials.address))
        this.props.actions.connectUport(credentials)
    })
  }

  render () {
    return (
      <WelcomeWrap>
        <h4>InnovatieLab Demo Blockchain</h4>
        <SubText>Identiteit en transactie infrastructuur voor Ethereum Blockchain</SubText>
        <ConnectUport
          onClick={this.connectUport}>
          Verbind via uPort
        </ConnectUport>
      </WelcomeWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
