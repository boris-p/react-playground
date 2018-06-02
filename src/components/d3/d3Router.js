import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LinkItem } from 'Components/common/LinkItem'
import exp1 from './exp1'
import exp2 from './exp2'

class d3Router extends React.Component {
  render() {
    const baseUrl = this.props.match.url
    return (
      <React.Fragment>
        <h2 className='sub-title mt-4'>d3 playground</h2>
        <ul className='d-flex flex-row list-unstyled'>
          <LinkItem url={`${baseUrl}/exp-1`} title='exp-1' />
          <LinkItem url={`${baseUrl}/exp-2`} title='exp-2' />
        </ul>
        <Switch>
          <Route path={`${baseUrl}/exp-1`} component={exp1} />
          <Route path={`${baseUrl}/exp-2`} component={exp2} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default d3Router
