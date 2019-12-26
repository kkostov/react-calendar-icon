"use strict";

exports.__esModule = true;
exports.themedConfig = exports.DEFAULT_CONFIG = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DEFAULT_CONFIG = {
  calendarIcon: {
    textColor: 'white',
    // text color of the header and footer
    primaryColor: '#e85650',
    // used as background of the header and footer
    backgroundColor: '#fafafa'
  }
};
exports.DEFAULT_CONFIG = DEFAULT_CONFIG;

var themedConfig = function themedConfig(theme) {
  var config = !theme || !theme.calendarIcon ? _extends({}, DEFAULT_CONFIG.calendarIcon) : _extends({}, DEFAULT_CONFIG.calendarIcon, {}, theme.calendarIcon);
  return config;
};

exports.themedConfig = themedConfig;