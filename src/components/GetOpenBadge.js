// Frameworks
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import Assertion from './Assertion'
import BadgeClass from './BadgeClass'

import { getBadge, getIssuer, getRecipient, getAssertionProperties } from '../utilities/getAssertion'

import { getProperties } from '../utilities/getBadgeClass'

import styled from 'styled-components'

const OpenBadgeWrap = styled.section`
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: inherit;
  }
`
const OpenBadgeArea = styled.div``
const CurrentOpenBadgeArea = styled.div`
  margin-bottom: 20px;
`
const NextButton = styled.button`
  margin-top: 20px;
`
const SubText = styled.p`
  margin: 0 auto 3em auto;
  font-size: 18px;
`

class GetOpenBadge extends Component {

  constructor (props) {
    super(props)
    this.getAssertion = this.getAssertion.bind(this)
    this.getBadgeProperties = this.getBadgeProperties.bind(this)
  }

  getAssertion () {
    const actions = this.props.actions
    getBadge(actions)
    getRecipient(actions)
    getIssuer(actions)
    //getAssertionProperties(actions)
  }

 getBadgeProperties() {
  const actions = this.props.actions
  getProperties(actions)
 }

  componentDidMount () {
    this.getAssertion()
    //this.getBadgeProperties()
    // // Populate existing badge
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

  renderBadgeClass() {
    return (
      <BadgeClass 
        // badgeId={this.props.badgeId} 
        // badgeIssuer={this.props.badgeIssuer}
        // badgeName={this.props.badgeName}
        // badgeType={this.props.badgeType} 
        // badgeContext={this.props.badgeContext}
        badgeProperties={this.props.badgeProperties}
      />
    );
  }

  render () {
    return (
      <OpenBadgeWrap>
        <h4>OpenBadge Voorbeeld</h4>
        <SubText>Assertion</SubText>

        <OpenBadgeArea>
          <CurrentOpenBadgeArea >
            {this.renderAssertion()}
          </CurrentOpenBadgeArea>
          <SubText>Badge</SubText>
          <CurrentOpenBadgeArea >
            {this.renderBadgeClass()}
          </CurrentOpenBadgeArea>
        </OpenBadgeArea>
        <NextButton onClick={this.getBadgeProperties}>Badge</NextButton>
              <NextButton
                onClick={this.props.actions.getOpenBadgeComplete}>
                Volgende
              </NextButton>

      </OpenBadgeWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    gettingBadge: state.App.gettingBadge,
    badge: state.App.badge,
    gettingIssuer: state.App.gettingIssuer,
    issuer: state.App.issuer,
    gettingRecipient: state.App.gettingRecipient,
    assertionProperties: state.App.assertionProperties,
    recipient: state.App.recipient,
    // badgeId: state.App.badgeId,
    // badgeType: state.App.badgeType,
    // badgeContext: state.App.badgeContext,
    // badgeName: state.App.badgeName,
    // badgeIssuer: state.App.badgeIssuer,
    badgeProperties: state.App.badgeProperties,
    error: state.App.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetOpenBadge)
