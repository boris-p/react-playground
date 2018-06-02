import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap'

import Header from 'Components/common/Header'
import Footer from 'Components/common/Footer'

import HPage from 'Components/homePage/HPage'
import { View1 } from 'Components/view1/view1'
import AlgorithmsRouter from 'Components/algorithms/AlgorithmsRouter'
import d3Router from 'Components/d3/d3Router'
import AdvCompPatternsRouter from 'Components/advCompPatterns/AdvCompPatternsRouter'

import PageNotFound from '../containers/PageNotFound'

class Default extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Container>
          <div className='app-body'>
            <main className='main'>
              <Row className='app-body'>
                <Col md='12'>
                  <main className='main'>
                    <Switch>
                      <Route path='/' exact component={HPage} />
                      <Route path='/View1' component={View1} />
                      <Route path='/algorithms' component={AlgorithmsRouter} />
                      <Route
                        path='/adv-components'
                        name='advanced component patterns'
                        component={AdvCompPatternsRouter}
                      />
                      <Route path='/d3' component={d3Router} />
                      <Route path='/' component={PageNotFound} />
                    </Switch>
                  </main>
                </Col>
              </Row>
            </main>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Default
