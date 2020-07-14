'use strict';

var utils = require('../utils/writer.js');
var Team = require('../service/TeamService');

module.exports.joinTeam = function joinTeam (req, res, next) {
  var api_key = req.swagger.params['api_key'].value;
  var body = req.swagger.params['body'].value;
  Team.joinTeam(api_key,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
