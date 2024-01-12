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

const commonModuleLoader = require('../commonModuleLoader');

commonModuleLoader(this, function(ApiClient) {
  'use strict';

  /**
   * The InvalidTemp model module.
   * @module model/InvalidTemp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InvalidTemp</code>.
   * @alias module:model/InvalidTemp
   * @class
   * @param code {Number} 
   * @param message {Number} 
   */
  var exports = function(code, message) {
    this.code = code;
    this.message = message;
  };

  /**
   * Constructs a <code>InvalidTemp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvalidTemp} obj Optional instance to populate.
   * @return {module:model/InvalidTemp} The populated <code>InvalidTemp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (Object.prototype.hasOwnProperty.call(data, 'code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (Object.prototype.hasOwnProperty.call(data, 'message'))
        obj.message = ApiClient.convertToType(data['message'], 'Number');
    }
    return obj;
  };

  /**
   * @member {Number} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {Number} message
   */
  exports.prototype.message = undefined;

}, 'InvalidTemp', ['ApiClient']);
