// Simple Express Server to power the Angular App

var express = require('express');
var app = express();

app.use('/app/', express.static(__dirname + '/app/'));
app.use('/images/', express.static(__dirname + '/app/assets/img/'));

app.use('*', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, function() {
    console.log("Server Started");
});