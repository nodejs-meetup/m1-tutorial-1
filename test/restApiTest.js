const request = require('supertest')
const express = require('express')
const bodyParser = require('body-parser')
const assert = require('assert')
const restApi = require('../lib/restApi')
let app

beforeEach(() => {
  app = express()
  app.use(bodyParser.json())
  restApi(app)
})

describe('restApi:', () => {
  it('should return 404 and respond with json error if no route matches', (done) => {
    request(app)
    .get('/')
    .end((err, res) => {
      assert.ifError(err)
      assert.equal(res.status, 404, 'status should be 404')
      assert.deepEqual(res.body, {error: 'Not Found'})
      done()
    })
  })
})
