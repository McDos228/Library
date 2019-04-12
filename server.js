const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const config = require('./config');
const routes = require('./routes/index');
const cors = require('cors');
const path =require('path');
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(express.static(path.join(__dirname + '/uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        status: err.status || 500,
        message: err.message,
        errors: err.errors
    })
});

server.listen(config.port, () => {
    console.log(`Running on port ${config.port}`);
});

module.exports = app;