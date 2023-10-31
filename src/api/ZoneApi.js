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
    define(['ApiClient', 'model/AddZoneRequest', 'model/InvalidInput', 'model/InvalidZoneId', 'model/ZoneResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddZoneRequest'), require('../model/InvalidInput'), require('../model/InvalidZoneId'), require('../model/ZoneResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Hume) {
      root.Hume = {};
    }
    root.Hume.ZoneApi = factory(root.Hume.ApiClient, root.Hume.AddZoneRequest, root.Hume.InvalidInput, root.Hume.InvalidZoneId, root.Hume.ZoneResponse);
  }
}(this, function(ApiClient, AddZoneRequest, InvalidInput, InvalidZoneId, ZoneResponse) {
  'use strict';

  /**
   * Zone service.
   * @module api/ZoneApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ZoneApi. 
   * @alias module:api/ZoneApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addZone operation.
     * @callback module:api/ZoneApi~addZoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new zone
     * FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system
     * @param {String} username (Required) The username
     * @param {module:model/AddZoneRequest} body 
     * @param {module:api/ZoneApi~addZoneCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addZone = function(username, body, callback) {
      var postBody = body;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addZone");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addZone");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
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
        '/user/{username}/zone', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteZone operation.
     * @callback module:api/ZoneApi~deleteZoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete zone
     * FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system
     * @param {String} username (Required) The username
     * @param {Number} zoneId (Required) The ID of zone
     * @param {module:api/ZoneApi~deleteZoneCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteZone = function(username, zoneId, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteZone");
      }

      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling deleteZone");
      }


      var pathParams = {
        'username': username,
        'zone_id': zoneId
      };
      var queryParams = {
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
        '/user/{username}/zone/{zone_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZone operation.
     * @callback module:api/ZoneApi~getZoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ZoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve zone
     * FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system
     * @param {String} username (Required) The username
     * @param {Number} zoneId (Required) The ID of the zone
     * @param {module:api/ZoneApi~getZoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ZoneResponse}
     */
    this.getZone = function(username, zoneId, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getZone");
      }

      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling getZone");
      }


      var pathParams = {
        'username': username,
        'zone_id': zoneId
      };
      var queryParams = {
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
      var returnType = ZoneResponse;

      return this.apiClient.callApi(
        '/user/{username}/zone/{zone_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZones operation.
     * @callback module:api/ZoneApi~getZonesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ZoneResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all smart zones
     * FR3 - Τhe user must be able to modify temperature >- FR5 - Τhe user must be able to handle alarm system
     * @param {String} username (Required) The username
     * @param {module:api/ZoneApi~getZonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ZoneResponse>}
     */
    this.getZones = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getZones");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
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
      var returnType = [ZoneResponse];

      return this.apiClient.callApi(
        '/user/{username}/zone', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));