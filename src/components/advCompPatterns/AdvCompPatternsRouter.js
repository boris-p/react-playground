import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LinkItem } from 'Components/common/LinkItem'

import CompoundComp from './compoundComp/CompoundComp'
import ReactContext from './reactContext/ReactContext'
import HocMain from './hoc/HocMain'

class AdvCompPatternsRouter extends React.Component {
  render() {
    const baseUrl = this.props.match.url
    return (
      <React.Fragment>
        <h2 className='sub-title mt-4'>advanced react component patterns</h2>
        <ul className='d-flex flex-row list-unstyled'>
          <LinkItem url={`${baseUrl}/compound-components`} title='compound components' />
          <LinkItem url={`${baseUrl}/utilizing-context`} title='utilizing context' />
          <LinkItem url={`${baseUrl}/hoc`} title='high order components' />
        </ul>
        <Switch>
          <Route
            path={`${baseUrl}/compound-components`}
            name='compound components'
            render={() => <CompoundComp baseUrl={baseUrl} />}
          />
          <Route path={`${baseUrl}/utilizing-context`} name='react context' component={ReactContext} />
          <Route path={`${baseUrl}/hoc`} name='high order components' component={HocMain} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default AdvCompPatternsRouter
