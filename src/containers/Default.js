import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap'

import Header from 'Components/common/Header'
import Footer from 'Components/common/Footer'

import HPage from 'Components/homePage/HPage'
import { View1 } from 'Components/view1/view1'
import MergeSort from 'Components/mergeSort/MergeSort'
import MergeSortV2 from 'Components/mergeSort/MergeSortV2'

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
                      <Route path='/' exact name='home page' component={HPage} />
                      <Route path='/View1' name='catalog' component={View1} />
                      <Route path='/merge-sort' name='Merge Sort' component={MergeSort} />
                      <Route path='/merge-sort-v2' name='Merge Sort v2' component={MergeSortV2} />
                      <Route
                        path='/adv-components'
                        name='advanced component patterns'
                        component={AdvCompPatternsRouter}
                      />
                      <Route path='/' name='catalog' component={PageNotFound} />
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