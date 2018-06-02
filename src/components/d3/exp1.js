import React from 'react'

import * as d3 from 'd3'

/*
visualizing algorithms
https://visualgo.net/en/tsp
https://github.com/skidding/illustrated-algorithms/tree/master/components

*/
class exp1 extends React.Component {
  constructor() {
    super()

    window.r = this
    this.state = {}
    this.radius = 2.5
    this.sizes = {
      height: 600,
      width: 1200,
      paddingBottom: 20,
      paddingLeft: 20
    }

    this.x = d3
      .scaleLinear()
      .clamp(true)
      .range([this.sizes.width - this.sizes.paddingLeft, 0])
    this.y = d3
      .scaleLinear()
      .clamp(true)
      .range([this.sizes.height - this.sizes.paddingBottom, 0])
    this.interval = null
    this.moving = false

    this.onBoard = false

    this.goalPoint = null

    // initial set up of the plot
    // this.jsonCircles = [{ x: 1, y: 2 }, { x: 5, y: 3 }, { x: 6, y: 5 }, { x: 14, y: 8 }, { x: 9, y: 10 }]
    this.jsonCircles = [{ x: 1, y: 2 }]
  }
  componentDidMount() {
    const that = this
    this.plotArea = d3.select('.plot-area-exp-1')
    this.plotArea
      .attr('transform', `translate(${this.sizes.paddingLeft},${this.sizes.paddingBottom})`)

      .on('mouseover', () => (this.onBoard = true))
      .on('mouseout', () => (this.onBoard = false))
      .on('click', function() {
        that.click(d3.mouse(this))
      })
      .on('mousemove', function() {
        that.goalPoint = d3.mouse(this)
      })
    this.plotData()

    this.interval = setInterval(() => {
      this.animateCircles(this.goalPoint)
    }, 20)
  }
  click(point) {
    this.jsonCircles.push({ x: this.x.invert(point[0]), y: this.y.invert(point[1]) })
  }
  componentDidUpdate() {
    return false
  }
  plotData = () => {
    this.y.domain([0, d3.max(this.jsonCircles, d => d.y)])
    this.x.domain([0, d3.max(this.jsonCircles, d => d.x)])

    // init background
    this.rect = this.plotArea
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', this.sizes.width)
      .attr('height', this.sizes.height)
      .style('fill', 'red')

    // init circles
    this.initAndUpdateCircles(this.jsonCircles)
  }
  animateCircles(point) {
    if (!this.onBoard) {
      return
    }
    const moveBy = 0.1
    const xGoal = this.x.invert(point[0])
    const yGoal = this.y.invert(point[1])
    const updatedData = this.jsonCircles.map(d => {
      const distance = Math.sqrt(Math.pow(d.x - xGoal, 2) + Math.pow(d.y - yGoal, 2))
      // only move if distance is greater than some threshhold
      if (distance > moveBy) {
        const actuallyMoveBy = Math.abs(1 / distance)
        // const actuallyMoveBy = moveBy * 3
        d.x = d.x > xGoal ? d.x - actuallyMoveBy : d.x + actuallyMoveBy
        d.y = d.y > yGoal ? d.y - actuallyMoveBy : d.y + actuallyMoveBy
      }
      return d
    })

    // for now we never remove circles
    // this.circles.exit().remove()

    // update circle data
    this.initAndUpdateCircles(updatedData)

    this.plotArea
      .selectAll('circle')
      .transition()
      .delay((d, i) => i * 100)
      .attr('cx', d => this.x(d.x))
      .attr('cy', d => this.y(d.y))
  }

  initAndUpdateCircles(data) {
    // init circles
    this.plotArea
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => this.x(d.x))
      .attr('cy', d => this.y(d.y))
      .attr('r', d => 5)
      .style('fill', 'blue')
  }
  render() {
    return (
      <div className="main-content">
        <h4 className="sub-title mt-5">experiment 1 - just a few things moving</h4>
        <div>
          <div className="bp-flex-svg-container bp-pb-40">
            <svg
              viewBox={`0 0 ${this.sizes.width} ${this.sizes.height}`}
              preserveAspectRatio="xMidYMid meet"
              className={'bp-flex-svg-content '}
            >
              <g className="plot-area-exp-1" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}
export default exp1
