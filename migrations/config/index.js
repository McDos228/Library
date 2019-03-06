const config = require('../../config');

module.exports = {
    [config.env]: {
        username: config.database.username,
        password: config.database.password,
        database: config.database.database,
        host: config.database.host,
        port: config.database.port,
        dialect: config.database.dialect
    }
};