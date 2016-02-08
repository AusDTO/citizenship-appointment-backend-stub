'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  invalidUserIdMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'invalid_user_id.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
};

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcCustomer/GetCustomProperties</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
};