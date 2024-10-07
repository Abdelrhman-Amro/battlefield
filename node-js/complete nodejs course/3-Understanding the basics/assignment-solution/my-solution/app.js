const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
          '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end()
    }
    if (url === '/users'){
        res.write("<h1>Node js<h1>");
    }
    if (url === "/create-user"){

    }
})

server.listen(3000);