import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import {useTranslation} from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <Nav {...props}>
      <li><Link to="/latest" exact activeClassName="active">{t("latest")}</Link></li>
      <li><Link to="/" exact activeClassName="active">{t("video")}</Link></li>
      <li><Link to="/" exact activeClassName="active">{t("schedule")}</Link></li>
      <li><Link to="/" exact activeClassName="active">{t("standings")}</Link></li>
      <li><Link to="/" exact activeClassName="active">{t("drivers")}</Link></li>
      <li><Link to="/" exact activeClassName="active">{t("teams")}</Link></li>
      <li><Link to="/" exact activeClassName="active">{t("Gaming")}</Link></li>
      <li><Link to="/" exact activeClassName="active">{t("liveTiming")}</Link></li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
