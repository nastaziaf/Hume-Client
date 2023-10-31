/*
 * Hume
 * This is an API for Hume
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InvalidContact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InvalidContact'));
  } else {
    // Browser globals (root is window)
    if (!root.Hume) {
      root.Hume = {};
    }
    root.Hume.ContactDevsApi = factory(root.Hume.ApiClient, root.Hume.InvalidContact);
  }
}(this, function(ApiClient, InvalidContact) {
  'use strict';

  /**
   * ContactDevs service.
   * @module api/ContactDevsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ContactDevsApi. 
   * @alias module:api/ContactDevsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contactDevs operation.
     * @callback module:api/ContactDevsApi~contactDevsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Contact developers
     * FR10 - Τhe user must be able to contact with developers
     * @param {String} fullname (Required) The user's fullname
     * @param {String} email (Required) The user's email
     * @param {String} textMessage (Required) The user's message for the developers
     * @param {String} username (Required) The username
     * @param {module:api/ContactDevsApi~contactDevsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contactDevs = function(fullname, email, textMessage, username, callback) {
      var postBody = null;

      // verify the required parameter 'fullname' is set
      if (fullname === undefined || fullname === null) {
        throw new Error("Missing the required parameter 'fullname' when calling contactDevs");
      }

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactDevs");
      }

      // verify the required parameter 'textMessage' is set
      if (textMessage === undefined || textMessage === null) {
        throw new Error("Missing the required parameter 'textMessage' when calling contactDevs");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling contactDevs");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
        'fullname': fullname,
        'email': email,
        'text_message': textMessage,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/{username}/contact', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));