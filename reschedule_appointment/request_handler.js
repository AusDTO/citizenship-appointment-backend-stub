'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  cannotRescheduleMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'cannot_reschedule.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcProcess/RescheduleAppointment</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
}