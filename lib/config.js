'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DEFAULT_CONFIG = exports.DEFAULT_CONFIG = {
  calendarIcon: {
    textColor: 'white', // text color of the header and footer
    primaryColor: '#e85650', // used as background of the header and footer
    backgroundColor: '#fafafa'
  }
};

var themedConfig = exports.themedConfig = function themedConfig(theme) {
  var config = !theme || !theme.calendarIcon ? _extends({}, DEFAULT_CONFIG.calendarIcon) : _extends({}, DEFAULT_CONFIG.calendarIcon, theme.calendarIcon);
  return config;
};