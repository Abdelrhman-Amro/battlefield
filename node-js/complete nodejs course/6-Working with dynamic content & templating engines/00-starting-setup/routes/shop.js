const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const products = require('./admin').products

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
