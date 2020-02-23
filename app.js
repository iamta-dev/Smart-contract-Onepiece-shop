var express = require('express');
var app = express();
var path = require('path');
var port = 80;

// viewed at http://localhost:80
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/Public/index.html'));
});

app.get('/Owner', function(req, res) {
    res.sendFile(path.join(__dirname + '/Public/Owner.html'));
});

app.use(express.static('Public'))

app.listen(port,() => console.log(`App listening on port ${port}!`));