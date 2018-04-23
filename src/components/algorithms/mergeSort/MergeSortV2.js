import React from 'react'

import { Row, Col, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './style.scss'

/*
visualizing algorithms
https://visualgo.net/en/tsp
https://github.com/skidding/illustrated-algorithms/tree/master/components

*/
class MergeSortV2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputArray: [7, 8, 9, 5, 2, 1, 3, 4],
      sortedArray: [],
      hasSorted: false,
      history: [1, 2, 3, 4, 5],
      historyState: []
    }
    this.historyState
    this.tempTopMArgins = { 2: 1, 4: 2, 8: 3, 16: 4 }
  }
  runMergeSort = inputArr => {
    this.historyState = []
    const sortedArr = this.mergeSort(inputArr)
    this.setState({ sortedArray: sortedArr, hasSorted: true, historyState: this.historyState })
  }
  mergeSort = inputArr => {
    console.log('merging', inputArr)
    // this works for both even and odd length arrays
    // split the array
    const halfPoint = Math.max(inputArr.length / 2)
    let a = inputArr.slice(0, halfPoint)
    let b = inputArr.slice(halfPoint)

    // recursively split, sort and merge the split array unless we reach a
    // base case where we just have 1 item in the array
    let aSorted = a.length > 1 ? this.mergeSort(a) : a
    let bSorted = b.length > 1 ? this.mergeSort(b) : b

    // and merge the array
    let aIndex = 0
    let bIndex = 0

    let outputArr = []

    let i = 0
    while (i < inputArr.length) {
      if (aSorted[aIndex] < bSorted[bIndex] || !bSorted[bIndex]) {
        outputArr.push(aSorted[aIndex])
        aIndex++
        i++
      } else if (aSorted[aIndex] === bSorted[bIndex]) {
        outputArr.push(aSorted[aIndex])
        outputArr.push(bSorted[bIndex])
        aIndex++
        bIndex++
        i += 2
      } else {
        outputArr.push(bSorted[bIndex])
        bIndex++
        i++
      }
    }
    console.log('merged and sorted array is: ', outputArr)

    this.historyState = [...this.historyState, outputArr]
    return outputArr
  }

  render() {
    const mLeftArr = {}
    return (
      <div className="main-content">
        <h1 className="sub-title mt-5">Merge sort in action</h1>
        <Row className="mt-5">
          <Col lg="3">
            <Card>
              <CardHeader>history bar</CardHeader>
              <CardBody>
                <CardTitle>Steps</CardTitle>
                <div className="controls">
                  <div className="history-items">
                    {this.state.history.map(i => (
                      <div className="history-item" key={i}>
                        step {i}
                      </div>
                    ))}
                  </div>
                  <FontAwesomeIcon className="mr-4" icon="chevron-left" />
                  <FontAwesomeIcon icon="chevron-right" />
                  <div>current step : {'x / y'}</div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="9">
            <Card>
              <CardHeader>show me what you got</CardHeader>
              <CardBody>
                <div className="mt-2 mb-2">
                  <Button onClick={_ => this.runMergeSort(this.state.inputArray)}>Start merging</Button>
                </div>
                <CardTitle>Input</CardTitle>
                <div className="input-array">{this.state.inputArray.map((elm, i) => <span key={i}>{elm}</span>)}</div>
                <CardTitle className="mt-3">Output</CardTitle>
                {this.state.hasSorted ? (
                  <div className="sorted-array">
                    {this.state.historyState.map((historyArr, i) => {
                      mLeftArr[historyArr.length] =
                        typeof mLeftArr[historyArr.length] !== 'undefined' ? mLeftArr[historyArr.length] + 1 : 0
                      return (
                        <React.Fragment key={i}>
                          {historyArr.map((elm, j) => {
                            const style = {
                              marginTop: this.tempTopMArgins[historyArr.length] * 5 + 'rem',
                              marginLeft: (mLeftArr[historyArr.length] * (historyArr.length + 1) + j) * 3 + 'rem'
                            }
                            return (
                              <div className="single-item" style={style} key={j}>
                                {elm}
                              </div>
                            )
                          })}
                        </React.Fragment>
                      )
                    })}
                  </div>
                ) : (
                  <div>not sorted</div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default MergeSortV2
