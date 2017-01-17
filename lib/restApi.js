module.exports = (app) => {
  app.use((err, req, res, next) => {
    res.status(500)
    res.json({error: 'Internal Server Error'})
  })
  app.use((req, res, next) => {
    res.status(404)
    res.json({error: 'Not Found'})
  })
}
