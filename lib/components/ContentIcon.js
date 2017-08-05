'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconDiv = require('./IconDiv');

var _IconDiv2 = _interopRequireDefault(_IconDiv);

var _HeaderDiv = require('./HeaderDiv');

var _HeaderDiv2 = _interopRequireDefault(_HeaderDiv);

var _FooterDiv = require('./FooterDiv');

var _FooterDiv2 = _interopRequireDefault(_FooterDiv);

var _ValueDiv = require('./ValueDiv');

var _ValueDiv2 = _interopRequireDefault(_ValueDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentIcon = function ContentIcon(_ref) {
  var header = _ref.header,
      value = _ref.value,
      footer = _ref.footer;
  return _react2.default.createElement(
    _IconDiv2.default,
    null,
    _react2.default.createElement(
      _HeaderDiv2.default,
      null,
      header
    ),
    _react2.default.createElement(
      _ValueDiv2.default,
      null,
      value
    ),
    _react2.default.createElement(
      _FooterDiv2.default,
      null,
      footer
    )
  );
};

ContentIcon.propTypes = {
  header: _propTypes2.default.any,
  footer: _propTypes2.default.any,
  value: _propTypes2.default.any
};

exports.default = ContentIcon;
module.exports = exports['default'];