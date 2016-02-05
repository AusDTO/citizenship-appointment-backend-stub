'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: 'success.xml'
  },
  invalidCredentialsMessage: {
    status: 500,
    file: 'invalid_credentials.xml'
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

function populateAndSendResponse(response, responseMsg) {
    var successFilePath = path.join(__dirname, 'responses', responseMsg.file);
    var data = fs.readFileSync(successFilePath);

    response.writeHead(responseMsg.status, {'Content-Type': 'application/soap+xml'});
    response.end(data);
};

module.exports = (request, response) => {
    var responseMsg = determineResponse(request);
    populateAndSendResponse(response, responseMsg);
};