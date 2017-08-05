import React from 'react'
import ReactDOM from 'react-dom'
import HeaderDiv from './HeaderDiv'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeaderDiv />, div)
})
