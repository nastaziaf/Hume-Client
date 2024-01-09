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
    root.Hume.CreateUserRequest = factory(root.Hume.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateUserRequest model module.
   * @module model/CreateUserRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateUserRequest</code>.
   * @alias module:model/CreateUserRequest
   * @class
   * @param fullname {String} 
   * @param email {String} 
   * @param address {String} 
   * @param phone {String} 
   * @param city {String} 
   * @param username {String} 
   * @param password {String} 
   */
  var exports = function(fullname, email, address, phone, city, username, password) {
    this.fullname = fullname;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.city = city;
    this.username = username;
    this.password = password;
  };

  /**
   * Constructs a <code>CreateUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserRequest} obj Optional instance to populate.
   * @return {module:model/CreateUserRequest} The populated <code>CreateUserRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (Object.prototype.hasOwnProperty.call(data, 'fullname'))
        obj.fullname = ApiClient.convertToType(data['fullname'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} fullname
   */
  exports.prototype.fullname = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} username
   */
  exports.prototype.username = undefined;

  /**
   * @member {String} password
   */
  exports.prototype.password = undefined;


  return exports;

}));
