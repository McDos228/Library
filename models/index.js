const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const config    = require('../config/index.js');

const db        = {};
const basename  = path.basename(__filename);

const options = {
    host: config.database.host,
    dialect: config.database.dialect
};

if (config.env !== 'development') {
    options.logging = null
}

db.sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, options);

fs
    .readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        let model = db.sequelize['import'](path.join(__dirname, file));
        db[model.name] = model
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;

module.exports = db;