import React from 'react'

import * as d3 from 'd3'

/*
visualizing algorithms
https://visualgo.net/en/tsp
https://github.com/skidding/illustrated-algorithms/tree/master/components

*/
class MergeSortV2 extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.radius = 2.5
    this.sizes = {
      height: 300,
      width: 800,
      paddingBottom: 50,
      paddingLeft: 50
    }

    this.x = d3.scaleLinear().range([this.sizes.width - this.sizes.paddingLeft, 0])
    this.y = d3.scaleLinear().range([this.sizes.height - this.sizes.paddingBottom, 0])
    this.interval = null
    this.moving = false
  }
  componentDidMount() {
    const that = this
    this.plotArea = d3.select('.plot-area')
    this.plotArea.attr('transform', `translate(${this.sizes.paddingLeft},${this.sizes.paddingBottom})`)
    this.plotArea.on('mousemove', function() {
      that.mouseOver(this)
    })
    /* this.plotArea.on('mouseout', function() {
      that.mouseOut(this)
    }) */
    this.plotData()
  }
  componentDidUpdate() {
    // this.plotData()
    return false
  }
  plotData = () => {
    const jsonCircles = [{ x: 1, y: 2 }, { x: 5, y: 3 }, { x: 6, y: 5 }, { x: 14, y: 8 }, { x: 9, y: 10 }]
    // const jsonCircles = [{ x: 1, y: 2 }]
    this.y.domain([0, d3.max(jsonCircles, d => d.y)])
    this.x.domain([0, d3.max(jsonCircles, d => d.x)])

    this.rect = this.plotArea
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', this.sizes.width)
      .attr('height', this.sizes.height)
      .style('fill', 'red')

    this.circles = this.plotArea
      .selectAll('circle')
      .data(jsonCircles)
      .enter()
      .append('circle')
      .attr('cx', d => this.x(d.x))
      .attr('cy', d => this.y(d.y))
      .attr('r', d => 5)
      .style('fill', 'blue')

    // make things move
    // setInterval(this.animateCircles, 100)
  }

  mouseOver = element => {
    const point = d3.mouse(element)
    setTimeout(() => {
      this.animateCircles(point)
    }, 60)
  }
  mouseOut = element => {
    // not really using for now
    this.moving = false
    clearInterval(this.interval)
  }
  animateCircles(point) {
    const moveBy = 0.05
    const xGoal = this.x.invert(point[0])
    const yGoal = this.y.invert(point[1])
    // const distance =
    // this.circles.data('cx', d => {
    let distance
    this.circles
      .attr('cx', d => {
        distance = Math.sqrt(Math.pow(d.x - xGoal, 2) + Math.pow(d.y - yGoal, 2))
        console.log('distance', distance)

        d.x = d.x > xGoal ? d.x - moveBy : d.x + moveBy
        return this.x(d.x)
      })
      .attr('cy', d => {
        d.y = d.y > yGoal ? d.y - moveBy : d.y + moveBy
        return this.y(d.y)
      })
  }

  render() {
    return (
      <div className="main-content">
        <h4 className="sub-title mt-5">Merge sort in d3</h4>
        <div>a different approach</div>
        <div>
          so my task here is to have a version of
          <a href="https://bl.ocks.org/mbostock/39566aca95eb03ddd526"> this</a> working so I can start tweaking it
          <div className="bp-flex-svg-container bp-pb-40">
            <svg
              viewBox={'0 0 ' + this.sizes.width + ' ' + this.sizes.height}
              preserveAspectRatio="xMidYMid meet"
              className={'bp-flex-svg-content ' + this.props.baseClass}
            >
              <g className="plot-area" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}
export default MergeSortV2
