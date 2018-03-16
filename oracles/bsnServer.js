const express = require('express')
const app = express()
const port = 4000

app.get('/', (request, response) => {
    //let score = [ true, false, true, false, true, false, true, true, true, true ]
    response.send({"BSN": '123456789' })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})