// server.js
var express  = require('express');
var app      = express();                             
app.use(express.static(__dirname));

app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(__dirname + '/index.html');
});

app.listen(8888);
console.log("App listening on port 8888" , ": http://localhost:8888");
