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



class RequestCredentials extends Component {

  constructor (props) {
    super(props)
    this.credentialsbtnClickA = this.credentialsbtnClickA.bind(this)
  }

  credentialsbtnClickA () {
    uport.requestCredentials(
      { verified: ['Relatie'],
        notifications: true }
    ).then((credentials) => {
        console.log(credentials)
    }).catch (err => {
      console.log("Niet gedeeld: ", err)
    })
  }


  render (props) {
    return (
      <CredentialsWrap>
        <h4>Verzoek om gegevens</h4>
        <CredentialsArea>
          <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>Naam: {this.props.uport.name}</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickA}>Deel credential</CredsButton>
                </td>
              </tr>
            </tbody>
          </CredsTable>
          <NextButton onClick={this.props.actions.credentialsDemoComplete}>Volgende</NextButton>
        </CredentialsArea>
        <SubText>Let op met delen van credentials</SubText>
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
export default connect(mapStateToProps, mapDispatchToProps)(RequestCredentials)
