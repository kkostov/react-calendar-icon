try {
  module.exports = require('styled-components').default
} catch (e) {
  try {
    module.exports = require('styled-jss').default
  } catch (e) {
    throw new Error('Either styled-components or styled-jss must be installed')
  }
}
