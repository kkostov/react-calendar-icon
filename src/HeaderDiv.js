import styled from '@emotion/styled'
import themedConfig from './config.js'

const HeaderDiv = styled('div')(props => ({
  color: themedConfig(props.theme).textColor,
  backgroundColor: themedConfig(props.theme).primaryColor,
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em',
}));

export default HeaderDiv
