// import express from 'express'
// import React from 'react'
// import ReactDOM from 'react-dom/server'

// import App from './app'

// const port = 8080
// const app = express()

// app.listen(port)
// app.use(express.static('public'))

// app.get('*', function(req, res) {
//   const content = ReactDOM.renderToString(<App />)

//   const html = `
//     <html>
//       <head>
//         <title>JavaScript Tutorial</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1"/>
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
//         <style>
//           * {
//             box-sizing: border-box;
//             margin: 0px;
//             padding: 0px;
//           }
//           html {
//             font-size: 87.5%;
//           }
//           body {
//             font-family: arial, 'sans-serif';
//             font-size: 1em;
//           }
//         </style>
//       </head>
//       <body>
//         <div id="root">${content}</div>
//         <script src="./build/client.bundle.js"></script>
//       </body>
//     </html>
//   `

//   res.send(html)
// })

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
