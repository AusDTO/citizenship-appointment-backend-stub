'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  recordNotFoundMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'record_not_found.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcService/Get</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
}