"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("../styled"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeaderDiv = _styled["default"].div({
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

var _default = HeaderDiv;
exports["default"] = _default;