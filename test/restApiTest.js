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

  it('should return 500 if error occurs', (done) => {
    let app = express()
    app.use((req, res, next) => {
      next(new Error('test'))
    })
    restApi(app)
    request(app)
    .get('/')
    .end((err, res) => {
      assert.ifError(err)
      assert.equal(res.status, 500, 'status should be 500')
      assert.deepEqual(res.body, {error: 'Internal Server Error'})
      done()
    })
  })

  it('should get members', (done) => {
    request(app)
    .get('/members')
    .end((err, res) => {
      assert.deepEqual(res.body, [], 'should return members')
      done()
    })
  })
})
