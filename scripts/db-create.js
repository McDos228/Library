const { Client } = require('pg');

const config = require('../config');

const CONNECTION_STRING = `postgres://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/postgres`;
const client = new Client(CONNECTION_STRING);

client.connect();
client.query(`CREATE DATABASE "${config.database.database}"`, () => {
    client.end()
});