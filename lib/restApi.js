module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404)
    res.json({error: 'Not Found'})
  })
}
