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
    instance = new Hume.DeviceApi();
  });

  describe('(package)', function() {
    describe('DeviceApi', function() {
      describe('addDevice', function() {
        it('should call addDevice successfully', function(done) {
          // TODO: uncomment, update parameter values for addDevice call
          /*
          var username = "username_example";
          var body = new Hume.AddDeviceRequest();
          body.name = "";
          body.deviceType = "";
          body.brand = "";
          body.zone = "";
          body.status = "";
          body.id = 0;

          instance.addDevice(username, body, function(error, data, response) {
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
      describe('deleteDevice', function() {
        it('should call deleteDevice successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteDevice call
          /*
          var username = "username_example";
          var deviceId = 56;

          instance.deleteDevice(username, deviceId, function(error, data, response) {
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
      describe('getDevice', function() {
        it('should call getDevice successfully', function(done) {
          // TODO: uncomment, update parameter values for getDevice call and complete the assertions
          /*
          var username = "username_example";
          var deviceId = 56;

          instance.getDevice(username, deviceId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Hume.SuccessfulDeviceGet);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.deviceType).to.be.a('string');
            expect(data.deviceType).to.be("");
            expect(data.brand).to.be.a('string');
            expect(data.brand).to.be("");
            expect(data.zone).to.be.a('string');
            expect(data.zone).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDevices', function() {
        it('should call getDevices successfully', function(done) {
          // TODO: uncomment, update parameter values for getDevices call and complete the assertions
          /*
          var username = "username_example";

          instance.getDevices(username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Array);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateDevice', function() {
        it('should call updateDevice successfully', function(done) {
          // TODO: uncomment, update parameter values for updateDevice call and complete the assertions
          /*
          var deviceStatus = "deviceStatus_example";
          var username = "username_example";
          var deviceName = "deviceName_example";
          var opts = {};
          opts.body = new Hume.UpdateDeviceRequest();
          opts.body.name = "";
          opts.body.deviceType = "";
          opts.body.brand = "";
          opts.body.zone = "";
          opts.body.status = "";
          opts.body.id = 0;

          instance.updateDevice(deviceStatus, username, deviceName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Hume.SuccessfulDeviceUpdate);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.deviceType).to.be.a('string');
            expect(data.deviceType).to.be("");
            expect(data.brand).to.be.a('string');
            expect(data.brand).to.be("");
            expect(data.zone).to.be.a('string');
            expect(data.zone).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);

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