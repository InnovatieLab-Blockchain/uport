// Frameworks
import React, { Component } from 'react'
import { Connect, SimpleSigner } from 'uport-connect'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'

import Assertion from './Assertion'
import AssertionContract from '../utilities/AssertionContract'
import waitForMined from '../utilities/waitForMined'
import checkAddressMNID from '../utilities/checkAddressMNID'
import { getBadge, getIssuer, getRecipient, getAssertionProperties } from '../utilities/getAssertion'

import styled from 'styled-components'

const SharesWrap = styled.section`
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: inherit;
  }
`
const SharesArea = styled.div``
const CurrentSharesArea = styled.div`
  margin-bottom: 20px;
`
const CurrentSharesNumber = styled.span`
  color: white;
`
const FormBuyshares = styled.form``
const FormRow = styled.div``
const BtnBuyShares = styled.button``
const NextButton = styled.button`
  margin-top: 20px;
`
const SubText = styled.p`
  margin: 0 auto 3em auto;
  fontSize: 18px;
`

class SignTransaction extends Component {

  constructor (props) {
    super(props)
    this.getCurrentBadge = this.getCurrentBadge.bind(this)
    this.buyShares = this.buyShares.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  

getCurrentBadge () {
  const actions = this.props.actions
  getBadge(actions)
  getRecipient(actions)
  getIssuer(actions)
}

renderAssertion() {
  return (
    <Assertion 
      badge={this.props.badge} 
      issuer={this.props.issuer}
      recipient={this.props.recipient}
      //assertionProperties={this.props.assertionProperties}
    />
  );
}

  buyShares (e) {
    e.preventDefault()

    console.log('buyshares')

    const addr = checkAddressMNID(this.props.uport.address)
    const actions = this.props.actions

    console.log({addr})

    // const txobject = {
    //   to: '0xaa588d3737b611bafd7bd713445b314bd453a5c8',
    //   value: '0.1',
    //   function: setIssuer(),
    //   appName: 'DUO'
    // }

    // const connect = new Connect('DUO', {
    //   clientId: '2oynp4geSgBwqkQebaYtexB32rCNbPmLu5K',
    //   network: 'rinkeby',
    //   signer: SimpleSigner('69c9446852693c00bd0a8825fad8297e4f9db34c9562a660585a0e767f993bd7')
    // })

    // const txRequest = AssertionContract.setIssuer({from: addr});
    // connect.sendTransaction(txRequest).then(txID => {
    //   console.log(txID)
    // })



    AssertionContract.setIssuer({from: addr}, (error, txHash) => {
      console.log('setIssuer')
      if (error) { this.props.actions.buySharesERROR(error) }
      console.log(txHash)
      waitForMined(addr, txHash, { blockNumber: null }, actions,
        () => {
          this.props.actions.buySharesPENDING()
        },
        (total) => {
          console.log('waitForMined complete')
          this.props.actions.buySharesSUCCESS(txHash, total)
        }
      )
    })
  }

  handleInputChange (event) {
    this.props.actions.updatesharesInput(event.target.value)
  }

  componentDidMount () {
    // Populate existing shares
    this.getCurrentBadge()
  }

  render () {
    return (
      <SharesWrap>
        <h4>Sign a transaction</h4>
        <SubText>Set Issuer</SubText>

        <SharesArea>
          <CurrentSharesArea >
          {this.renderAssertion()}
          </CurrentSharesArea>

          {
            this.props.buyingInProgress
              ? (
                <div>
                  <br />
                  <div className="spinner center">
                    {[...Array(12)].map((x,i) =>
                      <div className="spinner-blade"key={i}/>
                    )}
                  </div>
                  <br />
                </div>
              )
              : (
                <FormBuyshares>
                  <FormRow>
                  </FormRow>
                  <FormRow>
                    <br />
                    <BtnBuyShares
                      onClick={this.buyShares}>
                      Set Issuer
                    </BtnBuyShares>
                  </FormRow>
                  <FormRow>
                    <br />
                    {
                      this.props.buyingInProgress
                        ? <div>Please wait for transaction card on phone</div>
                        : null
                    }
                  </FormRow>
                </FormBuyshares>
              )
          }
        </SharesArea>
        {
          this.props.confirmingInProgress
            ? <div>Please confirm the transaction card on your phone</div>
            : null
        }

              <NextButton
                onClick={this.props.actions.buySharesDemoComplete}>
                Next
              </NextButton>

      </SharesWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    sharesInput: state.App.sharesInput,
    gettingBadge: state.App.gettingBadge,
    badge: state.App.badge,
    gettingIssuer: state.App.gettingIssuer,
    issuer: state.App.issuer,
    gettingRecipient: state.App.gettingRecipient,
    recipient: state.App.recipient,
    confirmingInProgress: state.App.confirmingInProgress,
    sharesTotal: state.App.sharesTotal,
    buyingInProgress: state.App.buyingInProgress,
    tx: state.App.tx,
    error: state.App.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignTransaction)
