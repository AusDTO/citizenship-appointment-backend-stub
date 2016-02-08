'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  emptyRecordMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'empty_record.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcService/GetCalendars</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
};
  