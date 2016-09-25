const app = require('./server')

// ROUTES
app.get('/hello', (req, res) => {
  res.json({greeting:'Hello', name: 'Doug'})
})
