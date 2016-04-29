/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/otherprojects              ->  index
 * POST    /api/otherprojects              ->  create
 * GET     /api/otherprojects/:id          ->  show
 * PUT     /api/otherprojects/:id          ->  update
 * DELETE  /api/otherprojects/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Otherproject = require('./otherproject.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Otherprojects
export function index(req, res) {
  Otherproject.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Otherproject from the DB
export function show(req, res) {
  Otherproject.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Otherproject in the DB
export function create(req, res) {
  Otherproject.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Otherproject in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Otherproject.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Otherproject from the DB
export function destroy(req, res) {
  Otherproject.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
