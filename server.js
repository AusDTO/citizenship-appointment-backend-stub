'use strict';

var express = require('express');
var app = express();
var requestHandler = require('./request_handler');

app.get('/', function(req, res) {
    res.send('This is a stub for the backend of Citizenship Appointment application');  
});

app.post('/', function(request, response) {
	requestHandler(request, response);
});

let server = app.listen(process.env.PORT || 3030, () => {
  let port = server.address().port;
  console.log('Listening on port ' + port);
});