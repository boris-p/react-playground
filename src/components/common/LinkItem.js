import React from 'react'
import { Link } from 'react-router-dom'

export const LinkItem = ({ url, title = '' }) => (
  <li className='nav-item'>
    <Link to={url} className='nav-link'>
      {title}
    </Link>
  </li>
)
