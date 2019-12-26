"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("../styled"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconDiv = _styled["default"].div({
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

var _default = IconDiv;
exports["default"] = _default;