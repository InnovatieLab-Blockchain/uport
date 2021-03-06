let initialState = {
  sharesInput: 0 // Stupid FB warning about controlled inputs
}

export default(state = initialState, payload) => {
  switch (payload.type) {

    case 'CONNECT_UPORT':
      return {
        ...state,
        uport: payload.data,
        //signTransactionPage: true, storeScorePage: true,
        getOpenBadgePage: true,
        //revokeCredentialsPage: true,
        collectCredentialsPage: false
      }

    case 'GET_BADGE_REQUEST':
      return {
        ...state,
        gettingBadge: true
      }
    case 'GET_BADGE_SUCCESS':
      return {
        ...state,
        gettingBadge: false,
        badge: payload.data
      }
    case 'GET_BADGE_ERROR':
      return {
        ...state,
        gettingBadge: false,
        error: payload.data
      }
    case 'GET_ISSUER_REQUEST':
      return {
        ...state,
        gettingIssuer: true
      }
    case 'GET_ISSUER_SUCCESS':
      return {
        ...state,
        gettingIssuer: false,
        issuer: payload.data
      }
    case 'GET_ISSUER_ERROR':
      return {
        ...state,
        gettingIssuer: false,
        error: payload.data
      }
    case 'GET_ASSERTION_PROPERTIES_REQUEST':
      return {
        ...state,
        gettingAssertionProperties: true
      }
    case 'GET_ASSERTION_PROPERTIES_SUCCESS':
      return {
        ...state,
        gettingAssertionProperties: false,
        assertionProperties: payload.data
      }
    case 'GET_ASSERTION_PROPERTIES_ERROR':
      return {
        ...state,
        gettingAssertionProperties: false,
        error: payload.data
      }

    case 'GET_RECIPIENT_REQUEST':
      return {
        ...state,
        gettingRecipient: true
      }
    case 'GET_RECIPIENT_SUCCESS':
      return {
        ...state,
        gettingRecipient: false,
        recipient: payload.data
      }
    case 'GET_RECIPIENT_ERROR':
      return {
        ...state,
        gettingRecipient: false,
        error: payload.data
      }
    case 'GET_SCORE_REQUEST':
      return {
        ...state,
        gettingScore: true
      }
    case 'GET_SCORE_SUCCESS':
      return {
        ...state,
        gettingScore: false,
        scoreProperties: payload.data
      }
    case 'GET_SCORE_ERROR':
      return {
        ...state,
        gettingScore: false,
        error: payload.data
      }
    case 'STORE_SCORE_REQUEST':
      return {
        ...state,
        storeScoreInProgress: true
      }
    case 'STORE_SCORE_PENDING':
      return {
        ...state
      }
    case 'STORE_SCORE_SUCCESS':
      return {
        ...state,
        storeScoreInProgress: false,
        score: payload.data
      }
    case 'STORE_SCORE_ERROR':
      return {
        ...state,
        storeScoreInProgress: false,
        error: payload.data
      }
    case 'GET_BADGE_PROPERTIES_REQUEST':
      return {
        ...state,
        gettingBadgeProperties: true
      }
    case 'GET_BADGE_PROPERTIES_SUCCESS':
      return {
        ...state,
        gettingBadgeProperties: false,
        badgeProperties: payload.data
      }
    case 'GET_BADGE_PROPERTIES_ERROR':
      return {
        ...state,
        gettingBadgeProperties: false,
        error: payload.data
      }

    case 'BUY_SHARES_DEMO_COMPLETE':
      return {
        ...state,
        collectCredentialsPage: true
      }
    case 'CREDENTIALS_COLLECT_COMPLETE':
      return {
        ...state,
        registerYourAppPage: false,
        collectCredentialsPage: false,
        requestCredentialsPage: true
      }
    case 'CREDENTIALS_DEMO_COMPLETE':
      return {
        ...state,
        requestCredentialsPage: false,
        storeScorePage: true,
        logOutPage: false
      }
    case 'STORE_SCORE_DEMO_COMPLETE':
      return {
        ...state,
        storeScorePage: false,
        logOutPage: true
      }
    case 'GET_OPENBADGE_COMPLETE':
      return {
        ...state,
        getOpenBadgePage: false,
        collectCredentialsPage: true
      }
    case 'LOGOUT':
      return {
        ...state,
        uport: null,
        logOutPage: true
      }
    default:
      return state
  }
}
