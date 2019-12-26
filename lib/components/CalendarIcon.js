import React from 'react';
import PropTypes from 'prop-types';
import ContentIcon from './ContentIcon';
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
  return React.createElement(ContentIcon, {
    header: options ? formatDate(date, options.locale, options.header) : formatDate(date, defaultOptions.locale, defaultOptions.header),
    value: options ? formatDate(date, options.locale, options.value) : formatDate(date, defaultOptions.locale, defaultOptions.value),
    footer: options ? formatDate(date, options.locale, options.footer) : formatDate(date, defaultOptions.locale, defaultOptions.footer)
  });
};

CalendarIcon.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  theme: PropTypes.object,
  options: PropTypes.object
};
export default CalendarIcon;