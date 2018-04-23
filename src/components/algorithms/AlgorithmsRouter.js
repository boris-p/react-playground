import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LinkItem } from 'Components/common/LinkItem'
import MergeSortRouter from './mergeSort/MergeSortRouter'
import CountInversionsRouter from './countInversions/CountInversionsRouter'

class AlgorithmsRouter extends React.Component {
  render() {
    const baseUrl = this.props.match.url
    return (
      <React.Fragment>
        <h2 className='sub-title mt-4'>Algorithms</h2>
        <ul className='d-flex flex-row list-unstyled'>
          <LinkItem url={`${baseUrl}/merge-sort`} title='merge-sort' />
          <LinkItem url={`${baseUrl}/count-inversions`} title='count-inversions' />
        </ul>
        <Switch>
          <Route path={`${baseUrl}/merge-sort`} component={MergeSortRouter} />
          <Route path={`${baseUrl}/count-inversions`} component={CountInversionsRouter} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default AlgorithmsRouter
