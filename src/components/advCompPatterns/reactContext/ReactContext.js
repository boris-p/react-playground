import React from 'react'
import ContextComp from './ContextComp'

class ReactContext extends React.Component {
  render() {
    return (
      <div>
        <div>
          From the official react docs
          <br />
          <br />
          Context provides a way to share values like this (that are required by many components within an application)
          between components without having to explicitly pass a prop through every level of the tree.
          <a className='ref-link' href='https://reactjs.org/docs/context.html' target='_blank'>
            1
          </a>
          <br />
          <br />
          Using context, we can avoid passing props through intermediate elements:
          <br />
          <br />
          <ContextComp />
        </div>
      </div>
    )
  }
}

export default ReactContext
