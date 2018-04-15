import React from 'react'

import './scss/switch.scss'

class Switch extends React.Component {
  render() {
    const { className, on, ...props } = this.props
    return (
      <div className='toggle'>
        <input className='toggle-input' type='checkbox' />
        <button
          className={`${className} toggle-btn ${on ? 'toggle-btn-on' : 'toggle-btn-off'}`}
          aria-expanded={on}
          {...props}
        />
      </div>
    )
  }
}

export default Switch
