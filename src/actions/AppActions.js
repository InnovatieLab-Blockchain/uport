// //////////////////////////////////////////////
// Connect uPort
// //////////////////////////////////////////////

export const connectUport = (data) => {
  return {
    type: 'CONNECT_UPORT',
    data
  }
}

// //////////////////////////////////////////////
// Get Assertion props
// //////////////////////////////////////////////

export const getBadgeREQUEST = () => {
  return {
    type: 'GET_BADGE_REQUEST'
  }
}
export const getBadgeSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_SUCCESS',
    data
  }
}
export const getBadgeERROR = (data) => {
  return {
    type: 'GET_BADGE_ERROR',
    data
  }
}


export const getRecipientREQUEST = () => {
  return {
    type: 'GET_RECIPIENT_REQUEST'
  }
}
export const getRecipientSUCCESS = (data) => {
  return {
    type: 'GET_RECIPIENT_SUCCESS',
    data
  }
}
export const getRecipientERROR = (data) => {
  return {
    type: 'GET_RECIPIENT_ERROR',
    data
  }
}

export const getScoreREQUEST = () => {
  return {
    type: 'GET_SCORE_REQUEST'
  }
}
export const getScoreSUCCESS = (data) => {
  return {
    type: 'GET_SCORE_SUCCESS',
    data
  }
}
export const getScoreERROR = (data) => {
  return {
    type: 'GET_SCORE_ERROR',
    data
  }
}


export const getAssertionPropertiesREQUEST = () => {
  return {
    type: 'GET_ASSERTION_PROPERTIES_REQUEST'
  }
}
export const getAssertionPropertiesSUCCESS = (data) => {
  return {
    type: 'GET_ASSERTION_PROPERTIES_SUCCESS',
    data
  }
}
export const getAssertionPropertiesERROR = (data) => {
  return {
    type: 'GET_ASSERTION_PROPERTIES_ERROR',
    data
  }
}


export const getIssuerREQUEST = () => {
  return {
    type: 'GET_ISSUER_REQUEST'
  }
}
export const getIssuerSUCCESS = (data) => {
  return {
    type: 'GET_ISSUER_SUCCESS',
    data
  }
}
export const getIssuerERROR = (data) => {
  return {
    type: 'GET_ISSUER_ERROR',
    data
  }
}

// //////////////////////////////////////////////
// Get BadgeClass props
// //////////////////////////////////////////////


export const getBadgePropertiesREQUEST = () => {
  return {
    type: 'GET_BADGE_PROPERTIES_REQUEST'
  }
}
export const getBadgePropertiesSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_PROPERTIES_SUCCESS',
    data
  }
}
export const getBadgePropertiesERROR = (data) => {
  return {
    type: 'GET_BADGE_PROPERTIES_ERROR',
    data
  }
}

// //////////////////////////////////////////////
// Get Current Shares
// //////////////////////////////////////////////

export const getCurrentSharesREQUEST = () => {
  return {
    type: 'GET_CURRENT_SHARES_REQUEST'
  }
}
export const getCurrentSharesSUCCESS = (data) => {
  return {
    type: 'GET_CURRENT_SHARES_SUCCESS',
    data
  }
}
export const getCurrentSharesERROR = (data) => {
  return {
    type: 'GET_CURRENT_SHARES_ERROR',
    data
  }
}

export const updatesharesInput = (data) => {
  return {
    type: 'UPDATE_SHARES_INPUT',
    data
  }
}

// //////////////////////////////////////////////
// Set Score
// //////////////////////////////////////////////

export const storeScoreREQUEST = () => {
  return {
    type: 'STORE_SCORE_REQUEST',
    storeScoreInProgress: true
  }
}
export const storeScorePENDING = () => {
  return {
    type: 'STORE_SCORE_PENDING'
  }
}
export const storeScoreSUCCESS = (tx, data) => {
  return {
    type: 'STORE_SCORE_SUCCESS',
    tx: tx,
    data
  }
}
export const storeScoreERROR = (data) => {
  return {
    type: 'STORE_SCORE_ERROR',
    data
  }
}

// //////////////////////////////////////////////
// Complete Buy Shares Demo
// //////////////////////////////////////////////

export const getOpenBadgeComplete = (data) => {
  return {
    type: 'GET_OPENBADGE_COMPLETE'
  }
}

// //////////////////////////////////////////////
// Complete Set Score  Demo
// //////////////////////////////////////////////

export const storeScoreDemoComplete = (data) => {
  return {
    type: 'STORE_SCORE_DEMO_COMPLETE'
  }
}

// //////////////////////////////////////////////
// Complete Credentials Demo
// //////////////////////////////////////////////

export const credentialsDemoComplete = (data) => {
  return {
    type: 'CREDENTIALS_DEMO_COMPLETE'
    //type: 'LOGOUT'
  }
}

// //////////////////////////////////////////////
// Complete Credentials Collect
// //////////////////////////////////////////////

export const credentialsCollectComplete = (data) => {
  return {
    type: 'CREDENTIALS_COLLECT_COMPLETE'
  }
}

// //////////////////////////////////////////////
// Register App Area Complete
// //////////////////////////////////////////////

export const registerAppAreaComplete = (data) => {
  return {
    type: 'LOGOUT'
    //type: 'CREDENTIALS_DEMO_COMPLETE'
  }
}
