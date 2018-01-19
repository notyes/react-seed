const next = require('next')
const routes = require('./routes')
const { createServer } = require('http')

const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
