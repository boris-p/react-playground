import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LinkItem } from 'Components/common/LinkItem'
import MergeSort from './MergeSort'
import MergeSortV2 from './MergeSortV2'
import MergeSortV3 from './MergeSortV3'

class MergeSortRouter extends React.Component {
  render() {
    const baseUrl = this.props.match.url
    return (
      <React.Fragment>
        <ul className='d-flex flex-row list-unstyled'>
          <LinkItem url={`${baseUrl}/v1`} title='merge sort' />
          <LinkItem url={`${baseUrl}/v2`} title='merge sort v2' />
          <LinkItem url={`${baseUrl}/v3`} title='merge sort v3' />
        </ul>
        <Switch>
          <Route path={`${baseUrl}/v1`} component={MergeSort} />
          <Route path={`${baseUrl}/v2`} component={MergeSortV2} />
          <Route path={`${baseUrl}/v3`} component={MergeSortV3} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default MergeSortRouter
