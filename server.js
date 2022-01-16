var express = require('express');
var app = express();
var path = require('path');

// Landing page view at http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(process.env.PORT || 8080)

// Project views
app.use("/statcard", express.static(__dirname + '/views/statcard'));
app.use("/ordersum", express.static(__dirname + '/views/ordersum'));
