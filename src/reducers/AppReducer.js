let initialState = {
  sharesInput: 0 // Stupid FB warning about controlled inputs
}

export default(state = initialState, payload) => {
  switch (payload.type) {

    case 'CONNECT_UPORT':
      return {
        ...state,
        uport: payload.data,
        //signTransactionPage: true,
        getOpenBadgePage: true,
        //revokeCredentialsPage: true,
        collectCredentialsPage: false,
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

      case 'GET_BADGE_ID_REQUEST':
      return {
        ...state,
        gettingBadgeId: true
      }
    case 'GET_BADGE_ID_SUCCESS':
      return {
        ...state,
        gettingBadgeId: false,
        badgeId: payload.data
      }
    case 'GET_BADGE_ID_ERROR':
      return {
        ...state,
        gettingBadgeId: false,
        error: payload.data
      }  

      case 'GET_BADGE_TYPE_REQUEST':
      return {
        ...state,
        gettingBadgeType: true
      }
    case 'GET_BADGE_TYPE_SUCCESS':
      return {
        ...state,
        gettingBadgeType: false,
        badgeType: payload.data
      }
    case 'GET_BADGE_TYPE_ERROR':
      return {
        ...state,
        gettingBadgeType: false,
        error: payload.data
      }  

      case 'GET_BADGE_CONTEXT_REQUEST':
      return {
        ...state,
        gettingBadgeContext: true
      }
    case 'GET_BADGE_CONTEXT_SUCCESS':
      return {
        ...state,
        gettingBadgeContext: false,
        badgeContext: payload.data
      }
    case 'GET_BADGE_CONTEXT_ERROR':
      return {
        ...state,
        gettingBadgeId: false,
        error: payload.data
      }  

      case 'GET_BADGE_NAME_REQUEST':
      return {
        ...state,
        gettingBadgeName: true
      }
    case 'GET_BADGE_NAME_SUCCESS':
      return {
        ...state,
        gettingBadgeName: false,
        badgeName: payload.data
      }
    case 'GET_BADGE_NAME_ERROR':
      return {
        ...state,
        gettingBadgeId: false,
        error: payload.data
      }  
    case 'GET_BADGE_ISSUER_REQUEST':
      return {
        ...state,
        gettingBadgeIssuer: true
      }
    case 'GET_BADGE_ISSUER_SUCCESS':
      return {
        ...state,
        gettingBadgeIssuer: false,
        badgeIssuer: payload.data
      }
    case 'GET_BADGE_ISSUER_ERROR':
      return {
        ...state,
        gettingBadgeIssuer: false,
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
        getOpenBadgePage: true
      }
    case 'CREDENTIALS_DEMO_COMPLETE':
      return {
        ...state,
        registerYourAppPage: false,
        requestCredentialsPage: false,
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
