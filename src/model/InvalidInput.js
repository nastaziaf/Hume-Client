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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Hume) {
      root.Hume = {};
    }
    root.Hume.InvalidInput = factory(root.Hume.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InvalidInput model module.
   * @module model/InvalidInput
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InvalidInput</code>.
   * @alias module:model/InvalidInput
   * @class
   * @param code {Number} 
   * @param message {Number} 
   */
  var exports = function(code, message) {
    this.code = code;
    this.message = message;
  };

  /**
   * Constructs a <code>InvalidInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvalidInput} obj Optional instance to populate.
   * @return {module:model/InvalidInput} The populated <code>InvalidInput</code> instance.
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
  }

  /**
   * @member {Number} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {Number} message
   */
  exports.prototype.message = undefined;


  return exports;

}));
