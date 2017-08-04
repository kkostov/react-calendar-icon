import styled from 'styled-components'
import { themedConfig } from '../config'

const IconDiv = styled.div`
  font-size: 0.6em;
  display: block;
  position: relative;
  height: 7em;
  background-color: ${props => themedConfig(props).backgroundColor};
  border-radius: 0.7em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 7em;
`

export default IconDiv
