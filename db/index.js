const pg = require('pg');
let databaseName = ''
const postgresUrl = `postgres://localhost/${databaseName}`
const client = new pg.Client(postgresUrl);

client.connect();

module.exports = client;
