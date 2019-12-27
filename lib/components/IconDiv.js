import styled from '../styled';
import { themedConfig } from '../config';
var IconDiv = styled('div')({
  fontSize: '0.7em',
  backgroundColor: function backgroundColor(props) {
    return themedConfig(props.theme).backgroundColor;
  },
  height: '8em',
  width: '8em',
  borderRadius: '0.7em',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between'
});
export default IconDiv;