import QuizContract from './QuizContract'

export async function getScoreProperties(actions, address) {
  actions.getScoreREQUEST()
  QuizContract.getTitleAndScore
    .call(address, (error, props) => {
      if (error) {
        actions.getScoreERROR(error)
        throw error
      }
      actions.getScoreSUCCESS(props)
      console.log("Score: ", props)
      return props
    })
}