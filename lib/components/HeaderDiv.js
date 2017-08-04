import styled from 'styled-components'
import { themedConfig } from '../config'

const HeaderDiv = styled.div`
  color: ${props => themedConfig(props).textColor};
  background-color: ${props => themedConfig(props).primaryColor};
  width: 100%;
  text-align: center;
  font-size: .75rem;
`

export default HeaderDiv
