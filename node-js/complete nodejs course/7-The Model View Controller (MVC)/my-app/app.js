const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const HOST = 'localhost';
const app = express();

// SET UP //
// templating engine
app.set('view engine', ejs)
app.set('view', 'views')

// essential middlewares
app.use(bodyParser.urlencoded({extends: false}))


// ROUTES //
// import routes


// use routes


app.use((req, res, next) => {
  console.log('I am listening');
  res.send();
});

app.listen(3000, HOST);
