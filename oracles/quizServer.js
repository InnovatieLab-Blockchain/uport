const express = require('express')
const app = express()
const port = 4000

app.get('/', (request, response) => {
   //let score = [ true, false, true, false, true, false, true, true, true, true ]
   let score = 10

    response.send({"Score": score })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})