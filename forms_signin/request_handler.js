'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  invalidCredentialsMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'invalid_credentials.xml')
  },
  alreadySignedInMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'already_signed_in.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
};

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcAppUser/FormsSignIn</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
};