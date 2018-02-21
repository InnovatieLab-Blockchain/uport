// Frameworks
import React, { Component } from 'react'
import { uport } from '../utilities/uportSetup'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'

import styled from 'styled-components'

const CredentialsWrap = styled.section`
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: inherit;
  }
`
const CredentialsArea = styled.section`
  text-align: center;
`
const CredsTable = styled.table`
  margin: auto;
  text-align: left;
`

const CredsLabel = styled.label`
  position: relative;
  top: 10px;
`

const CredsButton = styled.button`
  margin-top: 20px;
`

const NextButton = styled.button`
  margin-top: 20px;
`

const SubText = styled.p`
  margin: 20px auto 3em auto;
  font-size: 18px;
`

const RELATIONSHIPCLAIM = 'LabJas begeerder'
const CERTIFICATECLAIM = 'InnovatieLab DUO LabJas Badge'

class CollectCredentials extends Component {

  constructor (props) {
    super(props)
    this.credentialsbtnClickA = this.credentialsbtnClickA.bind(this)
    this.credentialsbtnClickB = this.credentialsbtnClickB.bind(this)
    this.credentialsbtnClickC = this.credentialsbtnClickC.bind(this)
  }

  credentialsbtnClickA () {
    uport.attestCredentials({
      sub: this.props.uport.address,
      claim: {uPort: this.props.uport},
      exp: new Date().getTime() + 1 * 24 * 60 * 60 * 1000,  // 1 days from now
      uriHandler: (log) => { console.log(log) }
    })
  }
  credentialsbtnClickB () {
    uport.attestCredentials({
      sub: this.props.uport.address,
      claim: {Relatie: RELATIONSHIPCLAIM},
      exp: new Date().getTime() + 1 * 24 * 60 * 60 * 1000,  // 1 days from now
      uriHandler: (log) => { console.log(log) }
    })
  }
  credentialsbtnClickC () {
    uport.attestCredentials({
      sub: this.props.uport.address,
      claim: {Certificaat: CERTIFICATECLAIM},
      exp: new Date().getTime() + 1 * 24 * 60 * 60 * 1000,  // 1 days from now
      uriHandler: (log) => { console.log(log) }
    })
  }

  render (props) {
    return (
      <CredentialsWrap>
        <h4>Claim eigen gegevens</h4>
        <CredentialsArea>
          <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>Naam: {this.props.uport.name}</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickA}>Haal op</CredsButton>
                </td>
              </tr>
              <tr>
                <td>
                  <CredsLabel>Relatie: LabJas begeerder</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickB}>Haal op</CredsButton>
                </td>
              </tr>
              <tr>
                <td>
                  <CredsLabel>Certificate: DUO Demo</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickC}>Haal op</CredsButton>
                </td>
              </tr>
            </tbody>
          </CredsTable>
          <NextButton onClick={this.props.actions.credentialsCollectComplete}>Volgende</NextButton>
        </CredentialsArea>
        <SubText>Credentials duren even voordat ze op de telefoon verschijnen.</SubText>
      </CredentialsWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CollectCredentials)
