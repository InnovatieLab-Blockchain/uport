// Frameworks
import React, { Component } from 'react'
import { lab_connector } from '../utilities/uportSetup'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'

import styled from 'styled-components'
import checkAddressMNID from '../utilities/checkAddressMNID'
import waitForMined from '../utilities/waitForMined'

import QuizContract from '../utilities/QuizContract'
import Badge from './Badge'

import {getBadgeProperties, getBadgeEvents} from '../utilities/getBadge'

const CredentialsWrap = styled.section`
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: inherit
  }
`
const CredentialsArea = styled.section`
  text-align: center
`
const CredsTable = styled.table`
  margin: auto
  text-align: left
`
const CredsLabel = styled.label`
  position: relative
  top: 10px
`

const CredsButton = styled.button`
  margin-top: 20px
`

const NextButton = styled.button`
  margin-top: 20px
`

class StoreBadge extends Component {

  constructor (props) {
    super(props)
    this.verifyBadge = this.verifyBadge.bind(this)
    this.storeBadge = this.storeBadge.bind(this)
    this.getTitleAndBadge = this.getTitleAndBadge.bind(this)
  }

  verifyBadge () {
    lab_connector.requestCredentials(
      { verified: ['Blockchainquiz'],
      notifications: true }
    ).then((profile) => {
      console.log(profile)
    // credentials.lookup(profile.verified[0].iss).then(profile => {
    //   console.log("Issuer ", profile)
    //   this.setState({issuer: profile})
    // })
    }).catch(err => {
      console.log('Niet gedeeld: ', err)
    })
  }

  storeBadge () {
    lab_connector.requestCredentials(
      { verified: ['Blockchainquiz'],
      notifications: true }
    ).then((profile) => {
      console.log(profile)
      let address = checkAddressMNID(profile.address)
      const actions = this.props.actions
      let title = profile.Blockchainquiz.Titel
      let score = Math.floor(profile.Blockchainquiz.Badge)
      actions.storeBadgeREQUEST()
      QuizContract.setBadge(address, title, score, {from: address}, (error, txHash) => {
        if (error) { actions.storeBadgeERROR(error) }
        waitForMined(address, txHash, { blockNumber: null }, actions,
          () => {
            actions.storeBadgePENDING()
          },
          () => {
            console.log('waitForMined complete')
            actions.storeBadgeSUCCESS(txHash)
          }
        )
      })
    }).catch(err => {
      console.log('Niet opgeslagen: ', err)
    })
  }

  getTitleAndBadge () {
      let address = checkAddressMNID(lab_connector.address)
      const actions = this.props.actions
      getBadgeProperties(actions, address)
      getBadgeEvents()
  }


  // getTitleAndBadge () {
  //   lab_connector.requestCredentials(
  //     { verified: ['Blockchainquiz'],
  //     notifications: true }
  //   ).then((profile) => {
  //     let address = checkAddressMNID(profile.address)
  //     const actions = this.props.actions
  //     getBadgeProperties(actions, address)
  //   }).catch(err => {
  //     console.log('Niet gedeeld: ', err)
  //   })
  // }

  renderBadge() {
    return (
      <Badge 
        scoreProperties={this.props.scoreProperties}
      />
    );
  }



  render (props) {
    return (
      <CredentialsWrap>
        <h4>Sla Badge titel en score op</h4>
        <CredentialsArea>
          <CredsTable>
            <tbody>
              <tr>
                <td style={{'paddingRight': '8em'}}>
                  <CredsLabel>
                    Badge?
                  </CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.getTitleAndBadge}>
                    Haal Badge op
                  </CredsButton>
                </td>
              </tr>

            {
            this.props.storeBadgeInProgress
              ? (
                <tr>
                <td>
                  <div className="spinner center">
                    {[...Array(12)].map((x,i) =>
                      <div className="spinner-blade"key={i}/>
                    )}
                  </div>
                </td>
                </tr>
              )
              : (
                  <tr>
                  <td style={{'paddingRight': '8em'}}>
                    <CredsLabel>
                      Badge en Titel opslaan
                    </CredsLabel>
                  </td>
                  <td>
                    <CredsButton onClick={this.storeBadge}>
                      Sla Badge op
                    </CredsButton>
                  </td>
                </tr>
              )
            }
              </tbody>
              {this.renderBadge}
          </CredsTable>

            {this.renderBadge()}

          <NextButton onClick={this.props.actions.storeBadgeDemoComplete}>
            Volgende
          </NextButton>
        </CredentialsArea>
      </CredentialsWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    storeBadgeInProgress: state.App.storeBadgeInProgress,
    scoreProperties: state.App.scoreProperties
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreBadge)
