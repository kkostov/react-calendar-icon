import styled from 'styled-components';
import { themedConfig } from '../config';
var HeaderDiv = styled('div')({
  color: function color(props) {
    return themedConfig(props.theme).textColor;
  },
  backgroundColor: function backgroundColor(props) {
    return themedConfig(props.theme).primaryColor;
  },
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1.4em'
});
export default HeaderDiv;