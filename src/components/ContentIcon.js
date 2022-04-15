import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

const ContentIcon = ({ header, value, footer, className, ...props }) =>
  <span className={`calendar-icon ${className || ''}`} {...props}>
    <span className='calendar-header'>
      {header}
    </span>
    <span className='calendar-value'>
      {value}
    </span>
    <span className='calendar-footer'>
      {footer}
    </span>
  </span>

ContentIcon.propTypes = {
  header: PropTypes.any,
  footer: PropTypes.any,
  value: PropTypes.any
}

export default ContentIcon
