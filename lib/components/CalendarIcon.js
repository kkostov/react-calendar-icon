import React from 'react'
import PropTypes from 'prop-types'

import ContentIcon from './ContentIcon'

const defaultOptions = {
  header: { weekday: 'long' },
  footer: { month: 'long' },
  value: { day: '2-digit' },
  locale: []
}

const formatDate = (date, locale, formatOptions) => {
  return date.toLocaleDateString(locale, formatOptions)
}

const CalendarIcon = ({ date, theme, options }) =>
  <ContentIcon
    header={
      options
        ? formatDate(date, options.locale, options.header)
        : formatDate(date, defaultOptions.locale, defaultOptions.header)
    }
    value={
      options
        ? formatDate(date, options.locale, options.value)
        : formatDate(date, defaultOptions.locale, defaultOptions.value)
    }
    footer={
      options
        ? formatDate(date, options.locale, options.footer)
        : formatDate(date, defaultOptions.locale, defaultOptions.footer)
    }
  />

CalendarIcon.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  theme: PropTypes.object,
  options: PropTypes.object
}

export default CalendarIcon
