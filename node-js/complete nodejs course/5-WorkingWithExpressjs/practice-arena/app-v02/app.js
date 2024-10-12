// 1st -> import core modules
const path = require('path');

// 2nd -> import packages
const express = require('express');
const bodyParser = require('body-parser');

// 3rd -> import project modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Handle not found routes
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT);
