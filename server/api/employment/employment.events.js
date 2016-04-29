/**
 * Employment model events
 */

'use strict';

import {EventEmitter} from 'events';
var Employment = require('./employment.model');
var EmploymentEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EmploymentEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Employment.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EmploymentEvents.emit(event + ':' + doc._id, doc);
    EmploymentEvents.emit(event, doc);
  }
}

export default EmploymentEvents;
