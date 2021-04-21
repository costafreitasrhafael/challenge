const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Profession = require('../models/Profession');
const Professional = require('../models/Professional');

const connection = new Sequelize(dbConfig);

Profession.init(connection);
Professional.init(connection);

Professional.associate(connection.models);

module.exports = connection;
