import React from 'react'

import Switch from './Switch'

class SimpleToggle extends React.Component {
  state = { on: false }
  static defaultProps = { onToggle: () => {} }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      }
    )
  }
  render() {
    return <Switch on={this.state.on} onClick={this.toggle} />
  }
}

export default SimpleToggle
