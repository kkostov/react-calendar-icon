"use strict";

var _config = require("./config");

describe('config', function () {
  describe('DEFAULT_CONFIG', function () {
    it('should be an object', function () {
      expect(_config.DEFAULT_CONFIG).toBeInstanceOf(Object);
    });
    it('should contain calendarIcon property', function () {
      expect(_config.DEFAULT_CONFIG).toHaveProperty('calendarIcon');
    });
  });
  describe('themedConfig', function () {
    it('should be a functon', function () {
      expect(_config.themedConfig).toBeInstanceOf(Function);
    });
  });
});