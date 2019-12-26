import React from 'react';
import ReactDOM from 'react-dom';
import HeaderDiv from './HeaderDiv';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(HeaderDiv, null), div);
});