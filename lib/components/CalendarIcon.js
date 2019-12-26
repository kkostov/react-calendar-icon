"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContentIcon = _interopRequireDefault(require("./ContentIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultOptions = {
  header: {
    weekday: 'long'
  },
  footer: {
    month: 'long'
  },
  value: {
    day: '2-digit'
  },
  locale: []
};

var formatDate = function formatDate(date, locale, formatOptions) {
  return date.toLocaleDateString(locale, formatOptions);
};

var CalendarIcon = function CalendarIcon(_ref) {
  var date = _ref.date,
      theme = _ref.theme,
      options = _ref.options;
  return _react["default"].createElement(_ContentIcon["default"], {
    header: options ? formatDate(date, options.locale, options.header) : formatDate(date, defaultOptions.locale, defaultOptions.header),
    value: options ? formatDate(date, options.locale, options.value) : formatDate(date, defaultOptions.locale, defaultOptions.value),
    footer: options ? formatDate(date, options.locale, options.footer) : formatDate(date, defaultOptions.locale, defaultOptions.footer)
  });
};

CalendarIcon.propTypes = {
  date: _propTypes["default"].instanceOf(Date).isRequired,
  theme: _propTypes["default"].object,
  options: _propTypes["default"].object
};
var _default = CalendarIcon;
exports["default"] = _default;