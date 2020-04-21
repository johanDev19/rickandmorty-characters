var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
