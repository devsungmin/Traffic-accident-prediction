'use strict'

const Sequelize = require('sequelize');
const db = {};

let sequelize;

sequelize = new Sequelize('mysql', 'root', 'PW', {
    host: 'localhost',
    dialect: 'mysql'

});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;