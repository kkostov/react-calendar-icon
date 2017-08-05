import React from 'react'
import ReactDOM from 'react-dom'
import ContentIcon from './ContentIcon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ContentIcon />, div)
})
