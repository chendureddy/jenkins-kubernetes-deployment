var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello This Is Chendureddy" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello  This Is Achyuth Reddy" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Hello This Is Deepika Reddy " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
