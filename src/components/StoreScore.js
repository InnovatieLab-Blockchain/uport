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
import Score from './Score'

import {getScoreProperties} from '../utilities/getScore'

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

class StoreScore extends Component {

  constructor (props) {
    super(props)
    this.verifyScore = this.verifyScore.bind(this)
    this.storeScore = this.storeScore.bind(this)
    this.getTitleAndScore = this.getTitleAndScore.bind(this)
  }

  verifyScore () {
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

  storeScore () {
    lab_connector.requestCredentials(
      { verified: ['Blockchainquiz'],
      notifications: true }
    ).then((profile) => {
      console.log(profile)
      let address = checkAddressMNID(profile.address)
      const actions = this.props.actions
      let title = profile.Blockchainquiz.Titel
      let score = Math.floor(profile.Blockchainquiz.Score)
      actions.storeScoreREQUEST()
      QuizContract.setScore(address, title, score, {from: address}, (error, txHash) => {
        if (error) { actions.storeScoreERROR(error) }
        waitForMined(address, txHash, { blockNumber: null }, actions,
          () => {
            actions.storeScorePENDING()
          },
          () => {
            console.log('waitForMined complete')
            actions.storeScoreSUCCESS(txHash)
          }
        )
      })
    }).catch(err => {
      console.log('Niet opgeslagen: ', err)
    })
  }

  getTitleAndScore () {
      let address = checkAddressMNID(lab_connector.address)
      const actions = this.props.actions
      getScoreProperties(actions, address)
  }


  // getTitleAndScore () {
  //   lab_connector.requestCredentials(
  //     { verified: ['Blockchainquiz'],
  //     notifications: true }
  //   ).then((profile) => {
  //     let address = checkAddressMNID(profile.address)
  //     const actions = this.props.actions
  //     getScoreProperties(actions, address)
  //   }).catch(err => {
  //     console.log('Niet gedeeld: ', err)
  //   })
  // }

  renderScore() {
    return (
      <Score 
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
                    Score?
                  </CredsLabel>
                </td>
                <td>
                  <CredsButton onClick={this.getTitleAndScore}>
                    Haal Score op
                  </CredsButton>
                </td>
              </tr>

            {
            this.props.storeScoreInProgress
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
                      Score en Titel opslaan
                    </CredsLabel>
                  </td>
                  <td>
                    <CredsButton onClick={this.storeScore}>
                      Sla Score op
                    </CredsButton>
                  </td>
                </tr>
              )
            }
              </tbody>
              {this.renderScore}
          </CredsTable>

            {this.renderScore()}

          <NextButton onClick={this.props.actions.storeScoreDemoComplete}>
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
    storeScoreInProgress: state.App.storeScoreInProgress,
    scoreProperties: state.App.scoreProperties
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreScore)
