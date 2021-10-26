import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from '../../index'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 0)};
    }
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/latest" exact activeClassName="active">Latest</Link></li>
      <li><Link to="/" exact activeClassName="active">Video</Link></li>
      <li><Link to="/" exact activeClassName="active">Schedule</Link></li>
      <li><Link to="/" exact activeClassName="active">Standings</Link></li>
      <li><Link to="/" exact activeClassName="active">Drivers</Link></li>
      <li><Link to="/" exact activeClassName="active">Teams</Link></li>
      <li><Link to="/" exact activeClassName="active">Gaming</Link></li>
      <li><Link to="/" exact activeClassName="active">Live Timing</Link></li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
