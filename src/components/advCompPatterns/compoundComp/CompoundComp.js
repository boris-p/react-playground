import React from 'react'

import SimpleToggle from './SimpleToggle'
import CompoundToggle from './CompoundToggle'

class CompoundComp extends React.Component {
  render() {
    return (
      <div>
        <div>
          Compound components give us more rendering control by allowing consumers of our components to reorder our
          component while leaving the functionality intact and without checking for flags from the parent.
          <br />
          <br />
          Let's see this in action with a toggle button
          <br />
          We'll start with a simple, straightforward toggle component with a callback to check it's state -
          <br />
          <br />
          <code>{'<SimpleToggle onToggle={on => console.log(`toggle is ${on}`)} />'}</code>
          <br />
          <br />
          <SimpleToggle onToggle={on => console.log(`toggle is ${on}`)} />
        </div>
        <div>
          now let's say we want to add some more options to this component. Let's say an indication if the toggle is on
          or off. On the one hand we want to control how we display the indication but we don't want to implement that
          outside of the component itself.
          <br />
          We'll do that by writing a compound component which accepts children and will look something like this -
          <br />
          <br />
          <code>{`<CompoundToggle>
  <CompoundToggle.On>The button is on</CompoundToggle.On>
  <CompoundToggle.Off>The button is off</CompoundToggle.Off>
  <CompoundToggle.Button />
</CompoundToggle>`}</code>
          <br />
          <br />
          <CompoundToggle>
            <CompoundToggle.Button />
            <CompoundToggle.On>The button is on</CompoundToggle.On>
            <CompoundToggle.Off>The button is off</CompoundToggle.Off>
          </CompoundToggle>
          <br />
          For that we are utilizing
          <code>{'React.Children.map'}</code>, Mapping all of the children and extending their functionality.
          <br />
          We also use
          <code>{'React.cloneElement'}</code> on the children. We cannot change the actual children as they are recieved
          from the props
        </div>
      </div>
    )
  }
}

export default CompoundComp
