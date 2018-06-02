import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import './scss/header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className='app-header navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Container>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'>
                  home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/algorithms'} className='nav-link'>
                  algorithms
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/adv-components'} className='nav-link'>
                  advanced component patterns
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/d3'} className='nav-link'>
                  d3 playground
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    )
  }
}
export default Header
