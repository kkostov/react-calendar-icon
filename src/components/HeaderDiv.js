import styled from 'styled-components'
import { themedConfig } from '../config'

const HeaderDiv = styled('div')({
  color: props => themedConfig(props.theme).textColor,
  backgroundColor: props => themedConfig(props.theme).primaryColor,
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em',
})

export default HeaderDiv
