"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconDiv = _interopRequireDefault(require("./IconDiv"));

var _HeaderDiv = _interopRequireDefault(require("./HeaderDiv"));

var _FooterDiv = _interopRequireDefault(require("./FooterDiv"));

var _ValueDiv = _interopRequireDefault(require("./ValueDiv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContentIcon = function ContentIcon(_ref) {
  var header = _ref.header,
      value = _ref.value,
      footer = _ref.footer;
  return _react["default"].createElement(_IconDiv["default"], null, _react["default"].createElement(_HeaderDiv["default"], null, header), _react["default"].createElement(_ValueDiv["default"], null, value), _react["default"].createElement(_FooterDiv["default"], null, footer));
};

ContentIcon.propTypes = {
  header: _propTypes["default"].any,
  footer: _propTypes["default"].any,
  value: _propTypes["default"].any
};
var _default = ContentIcon;
exports["default"] = _default;