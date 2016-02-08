'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  invalidUnitIdMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'invalid_unit_id.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcUnit/GetLocalTime</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
}