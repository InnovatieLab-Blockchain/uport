import IssuerContract from '../utilities/IssuerContract'

async function getId() {
  IssuerContract.id
    .call((error, id) => {
      if (error) {
        throw error
      }
      return id
    })
}

async function getType() {
  IssuerContract.typeOb
    .call((error, type) => {
      if (error) {
        throw error
      }
      return type
    })
}

async function getContext() {
  IssuerContract.context
    .call((error, context) => {
      if (error) {
        throw error
      }
      return context
    })
}

async function getName() {
  IssuerContract.name
    .call((error, name) => {
      if (error) {
        throw error
      }
      return name
    })
}

export default { getId, getType, getContext, getName }