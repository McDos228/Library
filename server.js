const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const config = require('./config');
const routes = require('./routes/index');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

var whitelist = ['http://localhost:3000', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//     next()
// })
app.use(cors(corsOptions));
// app.use(expressValidator());
app.use(express.static(__dirname + '/uploads'));
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