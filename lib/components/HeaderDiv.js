'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  background-color: ', ';\n  width: 100%;\n  text-align: center;\n  font-size: 1.2em;\n  line-height: 1.4em;\n'], ['\n  color: ', ';\n  background-color: ', ';\n  width: 100%;\n  text-align: center;\n  font-size: 1.2em;\n  line-height: 1.4em;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HeaderDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _config.themedConfig)(props.theme).textColor;
}, function (props) {
  return (0, _config.themedConfig)(props.theme).primaryColor;
});

exports.default = HeaderDiv;
module.exports = exports['default'];