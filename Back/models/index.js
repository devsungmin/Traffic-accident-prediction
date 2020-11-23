'use strict'

const Sequelize = require('sequelize');
const db = {};
const path = require('path')
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config'))[env];

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.overtaking = require('./overtaking')(sequelize, Sequelize);
db.intersection = require('./intersection')(sequelize, Sequelize);

module.exports = db;