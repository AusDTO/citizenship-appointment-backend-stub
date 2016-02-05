'use strict';

var express = require('express');
var app = express();

var formsSignInHandler = require('./forms_signin/request_handler');

app.get('/', function(req, res) {
    res.send('This is a stub for the backend of Citizenship Appointment application');  
});

app.post('/FormsSignIn', function(request, response) {
	formsSignInHandler(request, response);
});

let server = app.listen(process.env.PORT || 3030, () => {
  let port = server.address().port;
  console.log('Listening on port ' + port);
});