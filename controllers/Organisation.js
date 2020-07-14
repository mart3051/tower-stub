'use strict';

var utils = require('../utils/writer.js');
var Organisation = require('../service/OrganisationService');

module.exports.addOrganisation = function addOrganisation (req, res, next) {
  var api_key = req.swagger.params['api_key'].value;
  var body = req.swagger.params['body'].value;
  Organisation.addOrganisation(api_key,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteOrganisation = function deleteOrganisation (req, res, next) {
  var api_key = req.swagger.params['api_key'].value;
  var orgName = req.swagger.params['orgName'].value;
  Organisation.deleteOrganisation(api_key,orgName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOrganisation = function updateOrganisation (req, res, next) {
  var api_key = req.swagger.params['api_key'].value;
  var orgName = req.swagger.params['orgName'].value;
  var body = req.swagger.params['body'].value;
  Organisation.updateOrganisation(api_key,orgName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
