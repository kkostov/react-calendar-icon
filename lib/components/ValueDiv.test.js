import React from 'react';
import ReactDOM from 'react-dom';
import ValueDiv from './ValueDiv';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(ValueDiv, null), div);
});