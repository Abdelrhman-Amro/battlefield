const Sequelize = require('sequelize').Sequelize;

/** CHANGE USERNAME AND PASSWORD */
const sequelize = new Sequelize('node-complete', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;
