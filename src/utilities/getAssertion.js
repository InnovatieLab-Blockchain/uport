import AssertionContract from '../utilities/AssertionContract'


console.log(AssertionContract )

export async function getBadge(actions) {
  actions.getBadgeREQUEST()
  AssertionContract.badge
    .call((error, badge) => {
      if (error) {
        actions.getBadgeERROR(error)
        throw error
      }
      actions.getBadgeSUCCESS(badge)
      console.log("Badge: ", badge)
      return badge
    })
}

export async function getRecipient(actions) {
  actions.getRecipientREQUEST()
  AssertionContract.recipient
    .call((error, recipient) => {
      if (error) {
        actions.getRecipientERROR(error)
        throw error
      }
      actions.getRecipientSUCCESS(recipient)
      return recipient
    })
}

export async function getIssuer(actions) {
  actions.getIssuerREQUEST()
  AssertionContract.issuer
    .call((error, issuer) => {
      if (error) {
        actions.getIssuerERROR(error)
        throw error
      }
      actions.getIssuerSUCCESS(issuer)
      return issuer
    })
}

export async function getAssertionProperties(actions) {
  actions.getAssertionPropertiesREQUEST()
  AssertionContract.getProperties
    .call((error, props) => {
      if (error) {
        actions.getAssertionPropertiesERROR(error)
        throw error
      }
      actions.getAssertionPropertiesSUCCESS(props)
      return props
    })
}


// function Unix_timestamp(t)
// {
//   var dt = new Date(t*1000);
//   var m = dt.getMonth();
//   var d = dt.getDay();
//   var y = dt.getFullYear();
//   return d + '-' + m + '-' + y;  
// }

// async function getIssuedOn() {
//   AssertionContract.issuedOn
//     .call((error, issuedOn) => {
//       if (error) {
//         throw error
//       }
//       return Unix_timestamp(issuedOn)
//     })
// }

// async function getVerificationType() {
//   AssertionContract.verificationType
//     .call((error, verificationType) => {
//       if (error) {
//         throw error
//       }
//       return verificationType
//     })
// }

//export default getBadge , getRecipient, getIssuer  //, getIssuedOn, getVerificationType }