import React from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import CompoundComp from './compoundComp/CompoundComp'
import HocMain from './hoc/HocMain'

class AdvCompPatternsRouter extends React.Component {
  render() {
    const baseUrl = this.props.match.url
    return (
      <React.Fragment>
        <h2 className='sub-title mt-4'>advanced react component patterns</h2>
        <ul className='d-flex flex-row list-unstyled'>
          <li className='nav-item'>
            <Link to={`${baseUrl}/compound-components`} className='nav-link'>
              Compound Components
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={`${baseUrl}/hoc`} className='nav-link'>
              high order components
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${baseUrl}/compound-components`} name='compound components' component={CompoundComp} />
          <Route path={`${baseUrl}/hoc`} name='high order components' component={HocMain} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default AdvCompPatternsRouter
