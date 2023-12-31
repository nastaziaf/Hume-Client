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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Hume);
  }
}(this, function(expect, Hume) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AddZoneRequest', function() {
      beforeEach(function() {
        instance = new Hume.AddZoneRequest();
      });

      it('should create an instance of AddZoneRequest', function() {
        // TODO: update the code to test AddZoneRequest
        expect(instance).to.be.a(Hume.AddZoneRequest);
      });

      it('should have the property zoneId (base name: "zone_id")', function() {
        // TODO: update the code to test the property zoneId
        expect(instance).to.have.property('zoneId');
        // expect(instance.zoneId).to.be(expectedValueLiteral);
      });

      it('should have the property zoneName (base name: "zone_name")', function() {
        // TODO: update the code to test the property zoneName
        expect(instance).to.have.property('zoneName');
        // expect(instance.zoneName).to.be(expectedValueLiteral);
      });

      it('should have the property zoneAlarm (base name: "zone_alarm")', function() {
        // TODO: update the code to test the property zoneAlarm
        expect(instance).to.have.property('zoneAlarm');
        // expect(instance.zoneAlarm).to.be(expectedValueLiteral);
      });

      it('should have the property zoneTemp (base name: "zone_temp")', function() {
        // TODO: update the code to test the property zoneTemp
        expect(instance).to.have.property('zoneTemp');
        // expect(instance.zoneTemp).to.be(expectedValueLiteral);
      });

    });
  });

}));
