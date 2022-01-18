import React from 'react'

import IconDiv from './IconDiv.js'
import HeaderDiv from './HeaderDiv.js'
import FooterDiv from './FooterDiv.js'
import ValueDiv from './ValueDiv.js'

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

export default ContentIcon
