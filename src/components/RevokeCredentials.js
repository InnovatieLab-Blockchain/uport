// Frameworks
import React, { Component } from 'react'
import { web3, attester1, attester2, attester3 } from '../utilities/uportSetup'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'

import styled from 'styled-components'
import checkAddressMNID from '../utilities/checkAddressMNID'
import waitForMined from '../utilities/waitForMined'

const registryArtifact = require('uport-registry')
const Contract = require('truffle-contract')
const Registry = Contract(registryArtifact)
Registry.setProvider(web3.currentProvider)

console.log(checkAddressMNID(attester1.clientId))

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

class RevokeCredentials extends Component {

  constructor (props) {
    super(props)
    this.revokebtnClickA = this.revokebtnClickA.bind(this)
    this.revokebtnClickB = this.revokebtnClickB.bind(this)
  }

  revokebtnClickA () {
    //const addr = checkAddressMNID(this.props.uport.address)
    const addr = checkAddressMNID(attester1.clientId)
    Registry.deployed().then(function(instance) {
      //console.log('Registry: ', instance)
      let key = 'revoked'     // a string (bytes32) value used for namespacing
      let subject = '0x3f3e3a6fc9d9ea03808313b3a4363f59a82ea0f0' // an address, if you want to register something to
                          // your own identity you should use your own address.
      let value = web3.fromAscii('OpenBadge 1') // a string (bytes32), the data you want to register.
                          // Could be an ipfs hash for example.
      
      instance.set(key, subject, value, {from:addr}).then(function(txhash) {
        console.log(txhash)
      })
    
    }).catch(error => {
      console.log("Error in registry: ", error)
    })

  }

  revokebtnClickB () {
    const addr = checkAddressMNID(this.props.uport.address)
    //const addr = checkAddressMNID(attester1.clientId)
    Registry.deployed().then(function(instance) {
      console.log('Registry: ', instance)
      let key = 'revoked'     // a string (bytes32) value used for namespacing
      let subject = '0x3f3e3a6fc9d9ea03808313b3a4363f59a82ea0f0' // an address, if you want to register something to
                          // your own identity you should use your own address.
      let value = 'OpenBadge 1' // a string (bytes32), the data you want to register.
                          // Could be an ipfs hash for example.
      
      instance.get(key, addr, subject).then(function(res) {
        console.log(web3.toAscii(res))
      })
    
    }).catch(error => {
      console.log("Error in registry: ", error)
    })

  }

  render (props) {
    return (
      <CredentialsWrap>
        <h4>Trek claim in (Revoke)</h4>
        <CredentialsArea>
          <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>OpenBadge 1</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.revokebtnClickA}>Zet</CredsButton>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>OpenBadge 1</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.revokebtnClickB}>Haal op</CredsButton>
                </td>
              </tr>
            </tbody>
          </CredsTable>
          <NextButton onClick={this.props.actions.revokeRevokeComplete}>Volgende</NextButton>
        </CredentialsArea>
        <SubText>Credentials duren even voordat ze in de uPort smartphone App verschijnen.</SubText>
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
export default connect(mapStateToProps, mapDispatchToProps)(RevokeCredentials)
