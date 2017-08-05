import React from 'react'
import ReactDOM from 'react-dom'
import IconDiv from './IconDiv'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<IconDiv />, div)
})
