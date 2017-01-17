const express = require('express')
const restApi = require('./lib/restApi')
const config = require('./config')

let app = express()
restApi(app)

app.listen(config.port)
console.log(`listening on port ${config.port}`)
