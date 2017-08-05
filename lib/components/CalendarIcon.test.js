import React from 'react'
import ReactDOM from 'react-dom'
import CalendarIcon from './CalendarIcon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CalendarIcon date={new Date()} />, div)
})
