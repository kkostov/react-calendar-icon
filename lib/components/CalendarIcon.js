import React from 'react'
import PropTypes from 'prop-types'

import IconDiv from './IconDiv'
import HeaderDiv from './HeaderDiv'
import FooterDiv from './FooterDiv'
import ValueDiv from './ValueDiv'

import { themedConfig } from '../config'

const CalendarIcon = ({ date, theme }) =>
  <IconDiv>
    <HeaderDiv>
      {date.toLocaleDateString(
        themedConfig({ theme }).dateOptions.locale,
        themedConfig({ theme }).dateOptions.header
      )}
    </HeaderDiv>
    <ValueDiv>
      {date.toLocaleDateString(
        themedConfig({ theme }).dateOptions.locale,
        themedConfig({ theme }).dateOptions.value
      )}
    </ValueDiv>
    <FooterDiv>
      {date.toLocaleDateString(
        themedConfig({ theme }).dateOptions.locale,
        themedConfig({ theme }).dateOptions.footer
      )}
    </FooterDiv>
  </IconDiv>

CalendarIcon.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  theme: PropTypes.object
}

export default CalendarIcon
