'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var themedConfig = (theme => ({
  textColor: 'white',
  // text color of the header and footer
  primaryColor: '#e85650',
  // used as background of the header and footer
  backgroundColor: '#fafafa',
  ...(theme === null || theme === void 0 ? void 0 : theme.calendarIcon)
}));

const IconDiv = styled__default["default"]('div')(props => ({
  fontSize: '0.7em',
  backgroundColor: themedConfig(props.theme).backgroundColor,
  height: '8em',
  width: '8em',
  borderRadius: '0.7em',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between'
}));
const HeaderDiv = styled__default["default"]('div')(props => ({
  color: themedConfig(props.theme).textColor,
  backgroundColor: themedConfig(props.theme).primaryColor,
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em'
}));
const ValueDiv = styled__default["default"]('div')({
  letterSpacing: '-0.05em',
  fontSize: '2.6rem',
  marginRight: '0.15em',
  marginTop: '0.1em'
});
const FooterDiv = styled__default["default"]('div')(props => ({
  color: themedConfig(props.theme).textColor,
  backgroundColor: themedConfig(props.theme).primaryColor,
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em'
}));
const defaultOptions = {
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

function formatDate(date, locale, formatOptions) {
  return date.toLocaleDateString(locale, formatOptions);
}

function CalendarIcon(_ref) {
  let {
    date,
    options = defaultOptions
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(IconDiv, null, /*#__PURE__*/React__default["default"].createElement(HeaderDiv, null, formatDate(date, options.locale, options.header)), /*#__PURE__*/React__default["default"].createElement(ValueDiv, null, formatDate(date, options.locale, options.value)), /*#__PURE__*/React__default["default"].createElement(FooterDiv, null, formatDate(date, options.locale, options.footer)));
}

exports.CalendarIcon = CalendarIcon;
exports["default"] = CalendarIcon;
