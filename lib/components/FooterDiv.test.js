import React from 'react';
import ReactDOM from 'react-dom';
import FooterDiv from './FooterDiv';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(FooterDiv, null), div);
});