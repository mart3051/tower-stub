'use strict';


/**
 * Add a new organisation to the Ansible tower
 *
 * api_key String 
 * body Object Organisation to be added
 * no response value expected for this operation
 **/
exports.addOrganisation = function(api_key,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes an organisation from Ansible tower
 *
 * api_key String 
 * orgName String Organisation name to delete
 * no response value expected for this operation
 **/
exports.deleteOrganisation = function(api_key,orgName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates an organisation to add team members
 *
 * api_key String 
 * orgName String Organisation name to be updated
 * body Object Team to be added
 * no response value expected for this operation
 **/
exports.updateOrganisation = function(api_key,orgName,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

