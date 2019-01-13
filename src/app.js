const server = require('./server')

// Start the server
const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
