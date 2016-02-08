'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  slotTakenMessage: {
    status: 500,
    file: path.join(__dirname, 'responses', 'slot_taken.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcService/SetAppointment</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
}