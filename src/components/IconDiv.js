import styled from 'styled-components'
import { themedConfig } from '../config'

const IconDiv = styled.div`
  font-size: 0.7em;
  background-color: ${props => themedConfig(props.theme).backgroundColor};
  height: 8em;
  width: 8em;
  border-radius: 0.7em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default IconDiv
