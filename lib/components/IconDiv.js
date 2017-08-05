'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: 0.7em;\n  background-color: ', ';\n  height: 7em;\n  width: 7em;\n  border-radius: 0.7em;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-between;\n'], ['\n  font-size: 0.7em;\n  background-color: ', ';\n  height: 7em;\n  width: 7em;\n  border-radius: 0.7em;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-between;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var IconDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _config.themedConfig)(props.theme).backgroundColor;
});

exports.default = IconDiv;
module.exports = exports['default'];