module.exports = {
    port: process.env.PORT || 4200,
    secret : 'cool-library-secret-key',
    env: process.env.NODE_ENV || 'development',
    database: {
        // username: process.env.DB_USERNAME || "ivtmegtrgcqbqz",
        username: process.env.DB_USERNAME || "postgres",
        // password: process.env.DB_PASSWORD || "a2d63f3a20032eabb34df42b98e9e9f7af8c9f380e4d475a3358dae6f8c907af",
        password: process.env.DB_PASSWORD || "postgres",
        // database: process.env.DB_NAME || "dbs2eq6gdqo41c",
        database: process.env.DB_NAME || "lib-db",
        // host: process.env.DB_HOST || "ec2-54-228-243-238.eu-west-1.compute.amazonaws.com",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        dialect: process.env.DB_DIALECT || "postgres"
    }
}