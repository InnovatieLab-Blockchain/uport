import RecipientContract from '../utilities/RecipientContract'

async function getId() {
  RecipientContract.id
    .call((error, id) => {
      if (error) {
        throw error
      }
      return id
    })
}

async function getType() {
  RecipientContract.typeOb
    .call((error, type) => {
      if (error) {
        throw error
      }
      return type
    })
}

async function getContext() {
  RecipientContract.context
    .call((error, context) => {
      if (error) {
        throw error
      }
      return context
    })
}

async function getName() {
  RecipientContract.name
    .call((error, name) => {
      if (error) {
        throw error
      }
      return name
    })
}

export default { getId, getType, getContext, getName }