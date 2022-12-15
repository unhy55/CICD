var express = require('express');
var app = express();
var server = require('http').Server(app);

server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
    res.send('CICD practice!');
});