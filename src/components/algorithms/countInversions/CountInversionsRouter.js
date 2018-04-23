import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LinkItem } from 'Components/common/LinkItem'

class CountInversionsRouter extends React.Component {
  render() {
    const baseUrl = this.props.match.url
    return (
      <React.Fragment>
        <h2 className='sub-title mt-4'>count inversions</h2>
      </React.Fragment>
    )
  }
}

export default CountInversionsRouter
