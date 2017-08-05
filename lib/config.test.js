import { DEFAULT_CONFIG, themedConfig } from './config'

describe('config', () => {
  describe('DEFAULT_CONFIG', () => {
    it('should be an object', () => {
      expect(DEFAULT_CONFIG).toBeInstanceOf(Object)
    })
    it('should contain calendarIcon property', () => {
      expect(DEFAULT_CONFIG).toHaveProperty('calendarIcon')
    })
  })

  describe('themedConfig', () => {
    it('should be a functon', () => {
      expect(themedConfig).toBeInstanceOf(Function)
    })
  })
})
