const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error')

const PORT = 3000;
const HOST = 'localhost';
const app = express();

// SET UP //
// templating engine
app.set('view engine', 'ejs')
app.set('views', 'views')

// essential middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));


// ROUTES //
// import routes
const shopRoutes = require('./routes/shop');

// use routes
app.use(shopRoutes);

app.use(errorController.get404);


// Page not found

app.listen(3000, HOST);
