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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model', 'api'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddDeviceRequest'), require('./model/AddZoneRequest'), require('./model/AlarmResponse'), require('./model/CreateUserRequest'), require('./model/DeviceResponse'), require('./model/InvalidContact'), require('./model/InvalidDeviceId'), require('./model/InvalidInput'), require('./model/InvalidTemp'), require('./model/InvalidZoneId'), require('./model/SuccessfulDeviceGet'), require('./model/SuccessfulDeviceUpdate'), require('./model/TempResponse'), require('./model/UpdateDeviceRequest'), require('./model/UserResponse'), require('./model/ZoneResponse'), require('./api/AlarmApi'), require('./api/ContactDevsApi'), require('./api/DeviceApi'), require('./api/TemperatureApi'), require('./api/UserApi'), require('./api/ZoneApi'));
  }
}(function(ApiClient, AddDeviceRequest, AddZoneRequest, AlarmResponse, CreateUserRequest, DeviceResponse, InvalidContact, InvalidDeviceId, InvalidInput, InvalidTemp, InvalidZoneId, SuccessfulDeviceGet, SuccessfulDeviceUpdate, TempResponse, UpdateDeviceRequest, UserResponse, ZoneResponse, AlarmApi, ContactDevsApi, DeviceApi, TemperatureApi, UserApi, ZoneApi) {
  'use strict';

  /**
   * This_is_an_API_for_Hume.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Hume = require('index'); // See note below*.
   * var xxxSvc = new Hume.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Hume.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Hume.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Hume.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddDeviceRequest model constructor.
     * @property {module:model/AddDeviceRequest}
     */
    AddDeviceRequest: AddDeviceRequest,
    /**
     * The AddZoneRequest model constructor.
     * @property {module:model/AddZoneRequest}
     */
    AddZoneRequest: AddZoneRequest,
    /**
     * The AlarmResponse model constructor.
     * @property {module:model/AlarmResponse}
     */
    AlarmResponse: AlarmResponse,
    /**
     * The CreateUserRequest model constructor.
     * @property {module:model/CreateUserRequest}
     */
    CreateUserRequest: CreateUserRequest,
    /**
     * The DeviceResponse model constructor.
     * @property {module:model/DeviceResponse}
     */
    DeviceResponse: DeviceResponse,
    /**
     * The InvalidContact model constructor.
     * @property {module:model/InvalidContact}
     */
    InvalidContact: InvalidContact,
    /**
     * The InvalidDeviceId model constructor.
     * @property {module:model/InvalidDeviceId}
     */
    InvalidDeviceId: InvalidDeviceId,
    /**
     * The InvalidInput model constructor.
     * @property {module:model/InvalidInput}
     */
    InvalidInput: InvalidInput,
    /**
     * The InvalidTemp model constructor.
     * @property {module:model/InvalidTemp}
     */
    InvalidTemp: InvalidTemp,
    /**
     * The InvalidZoneId model constructor.
     * @property {module:model/InvalidZoneId}
     */
    InvalidZoneId: InvalidZoneId,
    /**
     * The SuccessfulDeviceGet model constructor.
     * @property {module:model/SuccessfulDeviceGet}
     */
    SuccessfulDeviceGet: SuccessfulDeviceGet,
    /**
     * The SuccessfulDeviceUpdate model constructor.
     * @property {module:model/SuccessfulDeviceUpdate}
     */
    SuccessfulDeviceUpdate: SuccessfulDeviceUpdate,
    /**
     * The TempResponse model constructor.
     * @property {module:model/TempResponse}
     */
    TempResponse: TempResponse,
    /**
     * The UpdateDeviceRequest model constructor.
     * @property {module:model/UpdateDeviceRequest}
     */
    UpdateDeviceRequest: UpdateDeviceRequest,
    /**
     * The UserResponse model constructor.
     * @property {module:model/UserResponse}
     */
    UserResponse: UserResponse,
    /**
     * The ZoneResponse model constructor.
     * @property {module:model/ZoneResponse}
     */
    ZoneResponse: ZoneResponse,
    /**
     * The AlarmApi service constructor.
     * @property {module:api/AlarmApi}
     */
    AlarmApi: AlarmApi,
    /**
     * The ContactDevsApi service constructor.
     * @property {module:api/ContactDevsApi}
     */
    ContactDevsApi: ContactDevsApi,
    /**
     * The DeviceApi service constructor.
     * @property {module:api/DeviceApi}
     */
    DeviceApi: DeviceApi,
    /**
     * The TemperatureApi service constructor.
     * @property {module:api/TemperatureApi}
     */
    TemperatureApi: TemperatureApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The ZoneApi service constructor.
     * @property {module:api/ZoneApi}
     */
    ZoneApi: ZoneApi
  };

  return exports;
}));
