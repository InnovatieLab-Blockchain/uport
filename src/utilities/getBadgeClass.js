import BadgeClassContract from './BadgeClassContract'

export async function getId(actions) {
  actions.getBadgeIdREQUEST()
  BadgeClassContract.getId
    .call((error, id) => {
      if (error) {
        actions.getBadgeIdERROR(error)
        throw error
      }
      actions.getBadgeIdSUCCESS(id)
      return id
    })
}

export async function getType(actions) {
  actions.getBadgeTypeREQUEST()
  BadgeClassContract.getType
    .call((error, type) => {
      if (error) {
        actions.getBadgeTypeERROR(error)
        throw error
      }
      actions.getBadgeTypeSUCCESS(type)
      return type
    })
}

export async function getContext(actions) {
  actions.getBadgeContextREQUEST()
  BadgeClassContract.getContext
    .call((error, context) => {
      if (error) {
        actions.getBadgeContextERROR(error)
        throw error
      }
      actions.getBadgeContextSUCCESS(context)
      return context
    })
}

export async function getName(actions) {
  actions.getBadgeNameREQUEST()
  BadgeClassContract.getName
    .call((error, name) => {
      if (error) {
        actions.getBadgeNameERROR(error)
        throw error
      }
      actions.getBadgeNameSUCCESS(name)
      return name
    })
}

export async function getBadgeIssuer(actions) {
  actions.getBadgeIssuerREQUEST()
  BadgeClassContract.getIssuer
    .call((error, issuer) => {
      if (error) {
        actions.getBadgeIssuerERROR(error)
        throw error
      }
      actions.getBadgeIssuerSUCCESS(issuer)
      return issuer
    })
}

export async function getProperties(actions) {
  actions.getBadgePropertiesREQUEST()
  BadgeClassContract.getProperties
    .call((error, props) => {
      if (error) {
        actions.getBadgePropertiesERROR(error)
        throw error
      }
      actions.getBadgePropertiesSUCCESS(props)
      console.log("Props: ", props)
      return props
    })
}