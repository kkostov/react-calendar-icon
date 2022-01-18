import React from 'react'

import ContentIcon from './ContentIcon.js'

const defaultOptions = {
  header: { weekday: 'long' },
  footer: { month: 'long' },
  value: { day: '2-digit' },
  locale: []
}

const formatDate = (date, locale, formatOptions) => {
  return date.toLocaleDateString(locale, formatOptions)
}

const CalendarIcon = ({ date, options }) =>
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

export default CalendarIcon
