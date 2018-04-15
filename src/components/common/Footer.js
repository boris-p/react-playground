import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import './scss/footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer className={'app-footer'}>
        <Container>
          <Row>
            <Col>footer</Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
