// server.js
var express  = require('express');
var app      = express();                             
app.use(express.static(__dirname));

app.set('port', (process.env.PORT || 3000));

app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

