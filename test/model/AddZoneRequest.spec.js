/*
 * Hume
 * This is an API for Hume
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto-generated by the Swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

// Import the module loader utility function
const configureModule = require('../moduleLoaderUtils');

// Use the module loader utility function to configure the module
configureModule(function (expect, Hume) {
  'use strict';

  // Variable to hold an instance of the AddZoneRequest
  var instance;

  // Test suite for the AddZoneRequest
  describe('(package)', function() {
    describe('AddZoneRequest', function() {

      // Setup a new instance before each test
      beforeEach(function() {
        instance = new Hume.AddZoneRequest();
      });

      // Test case to check if it creates an instance of AddZoneRequest
      it('should create an instance of AddZoneRequest', function() {
        // TODO: update the code to test AddZoneRequest
        expect(instance).to.be.a(Hume.AddZoneRequest);
      });

      // Test case to check the 'zoneId' property
      it('should have the property zoneId (base name: "zone_id")', function() {
        // TODO: update the code to test the property zoneId
        expect(instance).to.have.property('zoneId');
        // expect(instance.zoneId).to.be(expectedValueLiteral);
      });

      // Test case to check the 'zoneName' property
      it('should have the property zoneName (base name: "zone_name")', function() {
        // TODO: update the code to test the property zoneName
        expect(instance).to.have.property('zoneName');
        // expect(instance.zoneName).to.be(expectedValueLiteral);
      });

      // Test case to check the 'zoneAlarm' property
      it('should have the property zoneAlarm (base name: "zone_alarm")', function() {
        // TODO: update the code to test the property zoneAlarm
        expect(instance).to.have.property('zoneAlarm');
        // expect(instance.zoneAlarm).to.be(expectedValueLiteral);
      });

      // Test case to check the 'zoneTemp' property
      it('should have the property zoneTemp (base name: "zone_temp")', function() {
        // TODO: update the code to test the property zoneTemp
        expect(instance).to.have.property('zoneTemp');
        // expect(instance.zoneTemp).to.be(expectedValueLiteral);
      });
    });
  });

});
