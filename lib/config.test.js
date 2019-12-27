import { DEFAULT_CONFIG, themedConfig } from './config';
describe('config', function () {
  describe('DEFAULT_CONFIG', function () {
    it('should be an object', function () {
      expect(DEFAULT_CONFIG).toBeInstanceOf(Object);
    });
    it('should contain calendarIcon property', function () {
      expect(DEFAULT_CONFIG).toHaveProperty('calendarIcon');
    });
  });
  describe('themedConfig', function () {
    it('should be a functon', function () {
      expect(themedConfig).toBeInstanceOf(Function);
    });
  });
});