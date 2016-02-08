'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessageWithEmailAndMobile: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success_with_email_and_mobile.xml')
  },
  successMessageWithoutEmailAndMobile: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success_no_email_no_mobile.xml')
  },
  invalidSessionIdMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'invalid_session_id.xml')
  },
  recordNotFoundMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'record_not_found.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessageWithEmailAndMobile;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcCustomer/GetByPersonalId</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
};
  