/**
 * Otherproject model events
 */

'use strict';

import {EventEmitter} from 'events';
var Otherproject = require('./otherproject.model');
var OtherprojectEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OtherprojectEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Otherproject.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OtherprojectEvents.emit(event + ':' + doc._id, doc);
    OtherprojectEvents.emit(event, doc);
  }
}

export default OtherprojectEvents;
