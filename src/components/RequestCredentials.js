// Frameworks
import React, { Component } from 'react'
import { verifier1, verifier2, verifier3 } from '../utilities/uportSetup'
import { Credentials, SimpleSigner} from 'uport'
import OpenBadge from './OpenBadge'

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

var credentials = new Credentials({
  appName: 'Rabobank',
  address: '2otfT9XykJx5HJEquMhg4WTeLNKkx8ZkjBE',
  network: 'rinkeby',
  signer: SimpleSigner('13b1ed7eb7d0af503dd5f9e292356d58ece0e50221c3ba65ec8ce4c5a3b99c51')
})

class RequestCredentials extends Component {

  constructor (props) {
    super(props)
    this.credentialsbtnClick1 = this.credentialsbtnClick1.bind(this)
    this.credentialsbtnClick2 = this.credentialsbtnClick2.bind(this)
    this.credentialsbtnClick3 = this.credentialsbtnClick3.bind(this)
    this.state = {
      issuer: {image: {contentUrl: ''}}
    };
  }

  renderOpenBadge() {
    return (
      <OpenBadge
        issuer={this.state.issuer}
      />
    );
  }

  credentialsbtnClick1 () {
    verifier1.requestCredentials(
      { verified: ['OpenBadge1'],
        notifications: true }
    ).then((profile) => {
        console.log(profile)
        credentials.lookup(profile.verified[0].iss).then(profile => {
          console.log("Issuer ", profile)
          this.setState({issuer: profile});
        })
    }).catch (err => {
      console.log("Niet gedeeld: ", err)
    })
  }

  credentialsbtnClick2 () {
    verifier2.requestCredentials(
      { verified: ['OpenBadge2'],
        notifications: true }
    ).then((profile) => {
        console.log(profile)
        credentials.lookup(profile.verified[0].iss).then(profile => {
          console.log("Issuer ", profile)
          this.setState({issuer: profile});
        })
    }).catch (err => {
      console.log("Niet gedeeld: ", err)
    })
  }

  credentialsbtnClick3 () {
    verifier3.requestCredentials(
      { verified: ['Verblijfsvergunning'],
        notifications: true }
    ).then((profile) => {
        console.log(profile)
        credentials.lookup(profile.verified[0].iss).then(profile => {
          console.log("Issuer ", profile)
          this.setState({issuer: profile});
        })
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
                  <CredsLabel>OpenBadge1</CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.credentialsbtnClick1}>Deel met {verifier1.name}</CredsButton>
                </td>
              </tr> 
            </tbody>
          </CredsTable>
          <CredsTable>
          <tbody>
          <tr>
            <td style={{"paddingRight":"8em"}}>
              <CredsLabel>OpenBadge2</CredsLabel>
            </td>
            <td>
              <CredsButton onClick={this.credentialsbtnClick2}>Deel met {verifier2.name}</CredsButton>
            </td>
          </tr> 
        </tbody>
          </CredsTable>
          <CredsTable>
          <tbody>
          <tr>
            <td style={{"paddingRight":"8em"}}>
              <CredsLabel>Verblijfsvergunning</CredsLabel>
            </td>
            <td>
              <CredsButton onClick={this.credentialsbtnClick3}>Deel met {verifier3.name}</CredsButton>
            </td>
          </tr> 
        </tbody>
          </CredsTable>
          {this.renderOpenBadge()}
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
