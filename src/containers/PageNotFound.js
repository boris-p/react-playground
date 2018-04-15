import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const PageNotFound = props => {
  return (
    <div className='app'>
      <Container className='main-view'>
        <Row className='app-body text-center'>
          <Col md='12' className='mt-5'>
            <h2 className='main-title text-uppercase'>page not found</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageNotFound
