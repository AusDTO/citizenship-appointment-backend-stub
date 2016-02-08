'use strict';

var fs = require('fs');
var path = require('path');

var formsSignInHandler = require('./forms_signin/request_handler');
var appointmentTypeHandler = require('./get_appointment_type_by_external_reference/request_handler');
var calendarsHandler = require('./get_calendars/request_handler');
var customerHandler = require('./get_customer_by_personal_id/request_handler');
var customerCustomPropertiesHandler = require('./get_customer_custom_properties/request_handler');
var dynamicSuggestedSlotsHandler = require('./get_dynamic_suggested_slots2/request_handler');
var expectedAppointmentsHandler = require('./get_expected_appointments/request_handler');
var serviceHandler = require('./get_service/request_handler');
var serviceByExternalReferenceHandler = require('./get_service_by_external_reference/request_handler');
var unitHandler = require('./get_unit/request_handler');
var unitLocalTimeHandler = require('./get_unit_local_time/request_handler');
var rescheduleAppointmentHandler = require('./reschedule_appointment/request_handler');
var setAppointmentHandler = require('./set_appointment/request_handler');
var signOutHandler = require('./sign_out/request_handler');


function readFileToSend(fileToSend){
  return fs.readFileSync(fileToSend);
}

function populateAndSendResponse(response, responseContent, status) {
    response.writeHead(status, {'Content-Type': 'application/soap+xml'});
    response.end(responseContent);
};

var handlers = [formsSignInHandler(), signOutHandler(), appointmentTypeHandler(), calendarsHandler(), customerHandler(), 
      customerCustomPropertiesHandler(), dynamicSuggestedSlotsHandler(), expectedAppointmentsHandler(), serviceHandler(), 
      serviceByExternalReferenceHandler(), unitHandler(), unitLocalTimeHandler(), rescheduleAppointmentHandler(), 
      setAppointmentHandler()];

module.exports = (request, response) => {
  var body = "";

  request.on('data', function (chunk) {
    body += chunk;
  });

  request.on('end', function () {
    var responsePopulated = false;

    for (let requestHandler of handlers) {
      if(body.indexOf(requestHandler.actionName) >= 0){
          var responseData = requestHandler.getResponseData(body);
          populateAndSendResponse(response, readFileToSend(responseData.file), responseData.status);
          responsePopulated = true;
          break;
      }
    };
    if(!responsePopulated){
      response.writeHead(500, {'Content-Type': 'application/soap+xml'});
      response.end("Invalid query");
    } 
  });
};