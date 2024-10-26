const Sequilize = require('sequelize');

const sequelize = new Sequilize('node-complete', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
