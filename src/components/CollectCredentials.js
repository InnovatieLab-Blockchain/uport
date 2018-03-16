// Frameworks
import React, { Component } from 'react'
import { attester1, attester2, attester3 } from '../utilities/uportSetup'

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

class CollectCredentials extends Component {

  constructor (props) {
    super(props)
    this.credentialsbtnClickA = this.credentialsbtnClickA.bind(this)
    this.credentialsbtnClickB = this.credentialsbtnClickB.bind(this)
    this.credentialsbtnClickC = this.credentialsbtnClickC.bind(this)
  }

  getBadge() {
    var badge = this.props.badgeProperties
    var badge1 =  {
      "Badge" : {
          "naam":badge[0],
          "issuer":badge[1],
      }
   }
    return badge1;
  }

  
  credentialsbtnClickA () {
    var badge = this.props.badgeProperties
    attester1.attestCredentials({
      sub: this.props.uport.address,
      claim: this.getBadge(),
      exp: new Date().getTime() + 1 * 24 * 60 * 60 * 1000,  // 1 days from now
      uriHandler: (log) => { console.log(log) }
    })
  }
  credentialsbtnClickB () {
    attester2.attestCredentials({
      sub: this.props.uport.address,
      claim: {OpenBadge2: {naam: 'OpenBadge2', description: 'Dit is OpenBadge 2' }},
      exp: new Date().getTime() + 1 * 24 * 60 * 60 * 1000,  // 1 days from now
      uriHandler: (log) => { console.log(log) }
    })
  }
  credentialsbtnClickC () {
    attester3.attestCredentials({
      sub: this.props.uport.address,
      claim: {Verblijfsvergunning: {naam: 'Verblijfsvergunning', description: 'Dit is een Verblijfsvergunning'} },
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
                  <CredsLabel>OpenBadge 1</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickA}>Haal op</CredsButton>
                </td>
              </tr>
              <tr>
                <td>
                  <CredsLabel>OpenBadge2</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickB}>Haal op</CredsButton>
                </td>
              </tr>
              <tr>
                <td>
                  <CredsLabel>Verblijfsvergunning</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickC}>Haal op</CredsButton>
                </td>
              </tr>
            </tbody>
          </CredsTable>
          <NextButton onClick={this.props.actions.credentialsCollectComplete}>Volgende</NextButton>
        </CredentialsArea>
        <SubText>Credentials duren even voordat ze in de uPort smartphone App verschijnen.</SubText>
      </CredentialsWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    badgeProperties: state.App.badgeProperties,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CollectCredentials)
