module.exports = (app) => {
  let members = []
  app.get('/members', (req, res, next) => {
    res.json(members)
  })
  app.post('/members', (req, res, next) => {
    members.push(req.body)
    res.json(req.body)
  })
  app.use((err, req, res, next) => {
    res.status(500)
    res.json({error: 'Internal Server Error'})
  })
  app.use((req, res, next) => {
    res.status(404)
    res.json({error: 'Not Found'})
  })
}
