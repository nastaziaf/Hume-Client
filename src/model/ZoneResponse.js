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
   * The ZoneResponse model module.
   * @module model/ZoneResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ZoneResponse</code>.
   * @alias module:model/ZoneResponse
   * @class
   * @param zoneId {Number} 
   * @param zoneName {String} 
   * @param zoneAlarm {Boolean} 
   * @param zoneTemp {Number} 
   */
  var exports = function(zoneId, zoneName, zoneAlarm, zoneTemp) {
    this.zoneId = zoneId;
    this.zoneName = zoneName;
    this.zoneAlarm = zoneAlarm;
    this.zoneTemp = zoneTemp;
  };

  /**
   * Constructs a <code>ZoneResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZoneResponse} obj Optional instance to populate.
   * @return {module:model/ZoneResponse} The populated <code>ZoneResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (Object.prototype.hasOwnProperty.call(data, 'zone_id'))
        obj.zoneId = ApiClient.convertToType(data['zone_id'], 'Number');
      if (Object.prototype.hasOwnProperty.call(data, 'zone_name'))
        obj.zoneName = ApiClient.convertToType(data['zone_name'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'zone_alarm'))
        obj.zoneAlarm = ApiClient.convertToType(data['zone_alarm'], 'Boolean');
      if (Object.prototype.hasOwnProperty.call(data, 'zone_temp'))
        obj.zoneTemp = ApiClient.convertToType(data['zone_temp'], 'Number');
    }
    return obj;
  };

  /**
   * @member {Number} zoneId
   */
  exports.prototype.zoneId = undefined;

  /**
   * @member {String} zoneName
   */
  exports.prototype.zoneName = undefined;

  /**
   * @member {Boolean} zoneAlarm
   */
  exports.prototype.zoneAlarm = undefined;

  /**
   * @member {Number} zoneTemp
   */
  exports.prototype.zoneTemp = undefined;

}, 'ZoneResponse', ['ApiClient']);
