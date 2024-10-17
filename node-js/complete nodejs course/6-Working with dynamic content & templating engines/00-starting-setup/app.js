// Importing core modules
const path = require('path');

// Importing remote modules
const express = require('express');
const bodyParser = require('body-parser');

// Importing local modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Create the app
const app = express();

// Settings
app.set('view engine', 'pug')
app.set('views', 'views')

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
