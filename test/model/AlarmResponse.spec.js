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

  // Variable to hold an instance of the AlarmResponse
  var instance;

  // Test suite for the AlarmResponse
  describe('(package)', function() {
    describe('AlarmResponse', function() {

      // Setup a new instance before each test
      beforeEach(function() {
        instance = new Hume.AlarmResponse();
      });

      // Test case to check if it creates an instance of AlarmResponse
      it('should create an instance of AlarmResponse', function() {
        // TODO: update the code to test AlarmResponse
        expect(instance).to.be.a(Hume.AlarmResponse);
      });

      // Test case to check the 'value' property
      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });
    });
  });

});
