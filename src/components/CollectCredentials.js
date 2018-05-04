// Frameworks
import React, { Component } from 'react'
import { lab_connector } from '../utilities/uportSetup'

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
    const js = {
      "Naam":badge[3],
      "Badge ID":badge[0],
      "Badge Type":badge[1],
  }
        var jsonData = {};
        jsonData[badge[3]] = js

    return jsonData;
  }

  
  credentialsbtnClickA () {
    var badge = this.props.badgeProperties
    lab_connector.attestCredentials({
      sub: this.props.uport.address,
      claim: this.getBadge(),
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
            </tbody>
          </CredsTable>
          <NextButton onClick={this.props.actions.credentialsCollectComplete}>Volgende</NextButton>
        </CredentialsArea>
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
