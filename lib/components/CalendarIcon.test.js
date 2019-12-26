import React from 'react';
import ReactDOM from 'react-dom';
import CalendarIcon from './CalendarIcon';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(CalendarIcon, {
    date: new Date()
  }), div);
});