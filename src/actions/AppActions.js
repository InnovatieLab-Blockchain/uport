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

export const getBadgeIdREQUEST = () => {
  return {
    type: 'GET_BADGE_ID_REQUEST'
  }
}
export const getBadgeIdSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_ID_SUCCESS',
    data
  }
}
export const getBadgeIdERROR = (data) => {
  return {
    type: 'GET_BADGE_ID_ERROR',
    data
  }
}

export const getBadgeTypeREQUEST = () => {
  return {
    type: 'GET_BADGE_TYPE_REQUEST'
  }
}
export const getBadgeTypeSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_TYPE_SUCCESS',
    data
  }
}
export const getBadgeTypeERROR = (data) => {
  return {
    type: 'GET_BADGE_TYPE_ERROR',
    data
  }
}

export const getBadgeContextREQUEST = () => {
  return {
    type: 'GET_BADGE_CONTEXT_REQUEST'
  }
}
export const getBadgeContextSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_CONTEXT_SUCCESS',
    data
  }
}
export const getBadgeContextERROR = (data) => {
  return {
    type: 'GET_BADGE_CONTEXT_ERROR',
    data
  }
}

export const getBadgeNameREQUEST = () => {
  return {
    type: 'GET_BADGE_NAME_REQUEST'
  }
}
export const getBadgeNameSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_NAME_SUCCESS',
    data
  }
}
export const getBadgeNameERROR = (data) => {
  return {
    type: 'GET_BADGE_NAME_ERROR',
    data
  }
}

export const getBadgeIssuerREQUEST = () => {
  return {
    type: 'GET_BADGE_ISSUER_REQUEST'
  }
}
export const getBadgeIssuerSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_ISSUER_SUCCESS',
    data
  }
}
export const getBadgeIssuerERROR = (data) => {
  return {
    type: 'GET_BADGE_ISSUER_ERROR',
    data
  }
}


export const getBadgeAlignmentREQUEST = () => {
  return {
    type: 'GET_BADGE_ALIGNMENT_REQUEST'
  }
}
export const getBadgeAlignmentSUCCESS = (data) => {
  return {
    type: 'GET_BADGE_ALIGNMENT_SUCCESS',
    data
  }
}
export const getBadgeAlignmentERROR = (data) => {
  return {
    type: 'GET_BADGE_ALIGNMENT_ERROR',
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
// Buy Shares
// //////////////////////////////////////////////

export const buySharesREQUEST = (tx, amount) => {
  return {
    type: 'BUY_SHARES_REQUEST',
    amount: amount,
    buyingInProgress: true
  }
}
export const buySharesPENDING = () => {
  return {
    type: 'BUY_SHARES_PENDING'
  }
}
export const buySharesSUCCESS = (tx, data) => {
  return {
    type: 'BUY_SHARES_SUCCESS',
    tx: tx,
    data
  }
}
export const buySharesERROR = (data) => {
  return {
    type: 'BUY_SHARES_ERROR',
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
// Complete Buy Shares Demo
// //////////////////////////////////////////////

export const buySharesDemoComplete = (data) => {
  return {
    type: 'BUY_SHARES_DEMO_COMPLETE'
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
