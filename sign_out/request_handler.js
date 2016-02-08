'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  sessionTerminatedByServerMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'session_terminated_by_server.xml')
  },
  formatterExceptionMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'formatter_exception.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcAppUser/SignOut</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
}