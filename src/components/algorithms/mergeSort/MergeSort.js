import React from 'react'

import { Row, Col, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './style.scss'

/*
visualizing algorithms
https://visualgo.net/en/tsp
https://github.com/skidding/illustrated-algorithms/tree/master/components

*/
class MergeSort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputArray: [7, 14, 8, 9, 5, 2, 1, 9, 3, 4],
      sortedArray: [],
      hasSorted: false,
      history: [1, 2, 3, 4, 5]
    }
  }
  runMergeSort = inputArr => {
    const sortedArr = this.mergeSort(inputArr)
    this.setState({ sortedArray: sortedArr, hasSorted: true })
  }
  mergeSort = inputArr => {
    // this works for both even and odd length arrays
    // split the array
    const halfPoint = Math.max(inputArr.length / 2)
    let a = inputArr.slice(0, halfPoint)
    let b = inputArr.slice(halfPoint)

    // recursively split, aort and merge the split array unless we reach a
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
    return outputArr
  }

  render() {
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
                    {this.state.sortedArray.map((elm, i) => <span key={i}>{elm}</span>)}
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
export default MergeSort
