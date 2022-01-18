import themedConfig from './config'

describe('config', () => {
  it('should be a function', () => {
    expect(themedConfig).toBeInstanceOf(Function)
  })

  it('should have default props', () => {
    expect(Object.keys(themedConfig())).toStrictEqual(['textColor', 'primaryColor', 'backgroundColor'])
  })
})
