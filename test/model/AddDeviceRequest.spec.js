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

  // Variable to hold an instance of the AddDeviceRequest
  var instance;

  // Test suite for the AddDeviceRequest
  describe('(package)', function() {
    describe('AddDeviceRequest', function() {

      // Setup a new instance before each test
      beforeEach(function() {
        instance = new Hume.AddDeviceRequest();
      });

      // Test case to check if it creates an instance of AddDeviceRequest
      it('should create an instance of AddDeviceRequest', function() {
        // TODO: update the code to test AddDeviceRequest
        expect(instance).to.be.a(Hume.AddDeviceRequest);
      });

      // Test case to check the 'name' property
      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      // Test case to check the 'deviceType' property
      it('should have the property deviceType (base name: "deviceType")', function() {
        // TODO: update the code to test the property deviceType
        expect(instance).to.have.property('deviceType');
        // expect(instance.deviceType).to.be(expectedValueLiteral);
      });

      // Test case to check the 'brand' property
      it('should have the property brand (base name: "brand")', function() {
        // TODO: update the code to test the property brand
        expect(instance).to.have.property('brand');
        // expect(instance.brand).to.be(expectedValueLiteral);
      });

      // Test case to check the 'zone' property
      it('should have the property zone (base name: "zone")', function() {
        // TODO: update the code to test the property zone
        expect(instance).to.have.property('zone');
        // expect(instance.zone).to.be(expectedValueLiteral);
      });

      // Test case to check the 'status' property
      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      // Test case to check the 'id' property
      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });
    });
  });

});
