import styled from '../styled';
import { themedConfig } from '../config';
var FooterDiv = styled('div')({
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
export default FooterDiv;