import styled from '@emotion/styled'
import themedConfig from './config.js'

const IconDiv = styled('div')(props => ({
  fontSize: '0.7em',
  backgroundColor: themedConfig(props.theme).backgroundColor,
  height: '8em',
  width: '8em',
  borderRadius: '0.7em',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export default IconDiv
