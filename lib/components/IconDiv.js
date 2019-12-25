'use strict';

exports.__esModule = true;

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconDiv = _styled2.default.div({
  fontSize: '0.7em',
  backgroundColor: function backgroundColor(props) {
    return (0, _config.themedConfig)(props.theme).backgroundColor;
  },
  height: '8em',
  width: '8em',
  borderRadius: '0.7em',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between'
});

exports.default = IconDiv;
module.exports = exports['default'];