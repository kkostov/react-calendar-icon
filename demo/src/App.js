import React, { Component } from 'react'
import { CalendarIcon } from 'react-calendar-icon'

import './App.css'

const theme = {
  '--calendar-icon-text': 'white', // text color of the header and footer
  '--calendar-icon-primary': '#0da472', // background of the header and footer
  '--calendar-icon-background': '#fafafa',
}

const dateOptions = {
  header: { weekday: 'long' },
  footer: { month: 'short' },
  value: { day: '2-digit' },
  locale: 'nl'
}

class App extends Component {
  render () {
    return (
      <div className='demo'>
        <div className='sample'>
          <div>
            <h3>Default theme</h3>
            <CalendarIcon date={new Date()} />
            <div className='code'>
              <pre>
                {'<CalendarIcon date={new Date()} />'}
              </pre>
            </div>
          </div>
        </div>
        <div className='sample'>
          <div>
            <h3>Customized using a theme style</h3>
            <CalendarIcon date={new Date()} style={theme} />
          </div>
          <div className='code'>
            <pre>
              {`<CalendarIcon date={new Date()} style={theme} />`}
            </pre>
          </div>
        </div>
        <div className='sample'>
          <div>
            <h3>Setting date options</h3>
            <CalendarIcon date={new Date()} options={dateOptions} />
            <div className='code'>
              <pre>
                {`
const dateOptions = {
  header: { weekday: 'long' },
  footer: { month: 'short' },
  value: { day: '2-digit' },
  locale: 'nl'
}`}
              </pre>
              <pre>...</pre>
              <pre>
                {'<CalendarIcon date={new Date()} options={dateOptions} />'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
