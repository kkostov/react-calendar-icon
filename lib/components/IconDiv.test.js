import React from 'react';
import ReactDOM from 'react-dom';
import IconDiv from './IconDiv';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(IconDiv, null), div);
});