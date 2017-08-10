import styled from 'styled-components'
import { themedConfig } from '../config'

const IconDiv = styled.div`
  font-size: 0.7em;
  background-color: ${props => themedConfig(props.theme).backgroundColor};
  height: 7em;
  width: 7em;
  border-radius: 0.7em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default IconDiv
