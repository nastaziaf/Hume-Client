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
    root.Hume.TempResponse = factory(root.Hume.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TempResponse model module.
   * @module model/TempResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TempResponse</code>.
   * @alias module:model/TempResponse
   * @class
   * @param value {String} 
   */
  var exports = function(value) {
    this.value = value;
  };

  /**
   * Constructs a <code>TempResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TempResponse} obj Optional instance to populate.
   * @return {module:model/TempResponse} The populated <code>TempResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;


  return exports;

}));