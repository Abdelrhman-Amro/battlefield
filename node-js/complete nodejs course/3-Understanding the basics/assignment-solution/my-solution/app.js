const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  console.log(`Running -> ${req.url}`)

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write("<html>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    )
    res.write('</html>')
    return res.end()
  }
  if (url === '/users') {
    res.write('<h1>List of Dummy users<h1>')
  }

  // Create user
  if (url === '/create-user', method === 'POST') {
    console.log('Hello i am in the create-user')

    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })

    req.on('end', () => {
      console.log(body.toString())
      res.end()
    })
  }
})

server.listen(3000)
