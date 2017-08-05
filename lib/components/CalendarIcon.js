'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContentIcon = require('./ContentIcon');

var _ContentIcon2 = _interopRequireDefault(_ContentIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  header: { weekday: 'long' },
  footer: { month: 'long' },
  value: { day: '2-digit' },
  locale: []
};

var formatDate = function formatDate(date, locale, formatOptions) {
  return date.toLocaleDateString(locale, formatOptions);
};

var CalendarIcon = function CalendarIcon(_ref) {
  var date = _ref.date,
      theme = _ref.theme,
      options = _ref.options;
  return _react2.default.createElement(_ContentIcon2.default, {
    header: options ? formatDate(date, options.locale, options.header) : formatDate(date, defaultOptions.locale, defaultOptions.header),
    value: options ? formatDate(date, options.locale, options.value) : formatDate(date, defaultOptions.locale, defaultOptions.value),
    footer: options ? formatDate(date, options.locale, options.footer) : formatDate(date, defaultOptions.locale, defaultOptions.footer)
  });
};

CalendarIcon.propTypes = {
  date: _propTypes2.default.instanceOf(Date).isRequired,
  theme: _propTypes2.default.object,
  options: _propTypes2.default.object
};

exports.default = CalendarIcon;
module.exports = exports['default'];