const express = require('express')
const restApi = require('./lib/restApi')
const bodyParser = require('body-parser')
const config = require('./config')

let app = express()
app.use(bodyParser.json())
restApi(app)

app.listen(config.port)
console.log(`listening on port ${config.port}`)
