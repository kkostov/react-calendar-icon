import React from 'react';
import ReactDOM from 'react-dom';
import ContentIcon from './ContentIcon';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(ContentIcon, null), div);
});