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

  beforeEach(function() {
    instance = new Hume.TemperatureApi();
  });

  describe('(package)', function() {
    describe('TemperatureApi', function() {
      describe('getTemp', function() {
        it('should call getTemp successfully', function(done) {
          // TODO: uncomment, update parameter values for getTemp call and complete the assertions
          /*
          var username = "username_example";
          var zoneId = 56;

          instance.getTemp(username, zoneId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Hume.TempResponse);
            expect(data.value).to.be.a('string');
            expect(data.value).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('modifyTemp', function() {
        it('should call modifyTemp successfully', function(done) {
          // TODO: uncomment, update parameter values for modifyTemp call
          /*
          var temperatureStatus = 1.2;
          var username = "username_example";
          var zoneId = 56;

          instance.modifyTemp(temperatureStatus, username, zoneId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));