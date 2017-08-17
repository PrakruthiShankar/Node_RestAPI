const express = require('express');

var app= express();

var port = process.env.PORT || 3000;

app.get('/', function functionName(req,res) {
  res.send('welcome!!!');
});

app.listen(port, function () {
  console.log('running on port:' + port);
})
