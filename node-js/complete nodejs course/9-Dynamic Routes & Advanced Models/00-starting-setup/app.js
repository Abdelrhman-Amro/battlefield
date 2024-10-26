// Import core modules
const path = require('path');

// Import third-party modules
const express = require('express');
const bodyParser = require('body-parser');

// Import custom modules
const errorController = require('./controllers/error');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Set middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Default route for 404 error
app.use(errorController.get404);

app.listen(3000);
