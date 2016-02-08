'use strict';

var fs = require('fs');
var path = require('path');

var responseMsgs = {
  successMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'success.xml')
  },
  pastCalendarMessage: {
    status: 200,
    file: path.join(__dirname, 'responses', 'past_calendar.xml')
  }
};

function determineResponse(request){
  return responseMsgs.successMessage;
}

module.exports = () => {
  return {
    actionName: '<a:Action>http://www.qnomy.com/Services/IsvcCalendar/GetDynamicSuggestedSlots2</a:Action>',
    getResponseData: (request) => determineResponse(request)
  }
}