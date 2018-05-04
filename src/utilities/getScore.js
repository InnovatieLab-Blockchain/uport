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

export async function getScoreEvents() {
  //actions.getScoreEventsREQUEST()
  var scoreEventAll = QuizContract.Scored({}, {fromBlock: 1998837, toBlock: 1999811})
  scoreEventAll.watch(function(err, result) {
    if (err) {
      console.log(err)
      return;
    }
    // append details of result.args to UI
    console.log("Events: ", result)

  })

}