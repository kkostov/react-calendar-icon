import React from 'react';
import PropTypes from 'prop-types';
import IconDiv from './IconDiv';
import HeaderDiv from './HeaderDiv';
import FooterDiv from './FooterDiv';
import ValueDiv from './ValueDiv';

var ContentIcon = function ContentIcon(_ref) {
  var header = _ref.header,
      value = _ref.value,
      footer = _ref.footer;
  return React.createElement(IconDiv, null, React.createElement(HeaderDiv, null, header), React.createElement(ValueDiv, null, value), React.createElement(FooterDiv, null, footer));
};

ContentIcon.propTypes = {
  header: PropTypes.any,
  footer: PropTypes.any,
  value: PropTypes.any
};
export default ContentIcon;