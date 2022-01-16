var express = require('express');
var app = express();
var path = require('path');

// homepage view at directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(process.env.PORT || 8080)

// Stat preview card view
app.use("/statcard", express.static(__dirname + '/views/statcard'));