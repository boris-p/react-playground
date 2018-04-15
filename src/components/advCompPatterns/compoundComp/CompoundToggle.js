import React from 'react'

import Switch from './Switch'

function ToggleOn({ on, children }) {
  return on ? children : null
}
function ToggleOff({ on, children }) {
  return on ? null : children
}
function ToggleButton({ on, toggle, ...props }) {
  return <Switch on={on} onClick={toggle} />
}

class CompoundToggle extends React.Component {
  static defaultProps = { onToggle: () => {} }

  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  constructor(props) {
    super(props)
    this.state = { on: false }
  }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      }
    )
  }
  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { on: this.state.on, toggle: this.toggle })
    )
    const { on } = this.state
    return <div>{children}</div>
  }
}

export default CompoundToggle
