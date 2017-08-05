import React from 'react'
import PropTypes from 'prop-types'

import IconDiv from './IconDiv'
import HeaderDiv from './HeaderDiv'
import FooterDiv from './FooterDiv'
import ValueDiv from './ValueDiv'

const ContentIcon = ({ header, value, footer }) =>
  <IconDiv>
    <HeaderDiv>
      {header}
    </HeaderDiv>
    <ValueDiv>
      {value}
    </ValueDiv>
    <FooterDiv>
      {footer}
    </FooterDiv>
  </IconDiv>

ContentIcon.propTypes = {
  header: PropTypes.any,
  footer: PropTypes.any,
  value: PropTypes.any
}

export default ContentIcon
