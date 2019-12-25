'use strict';

exports.__esModule = true;

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterDiv = _styled2.default.div({
  color: function color(props) {
    return (0, _config.themedConfig)(props.theme).textColor;
  },
  backgroundColor: function backgroundColor(props) {
    return (0, _config.themedConfig)(props.theme).primaryColor;
  },
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em'
});

exports.default = FooterDiv;
module.exports = exports['default'];