import { Link } from "react-router-dom"
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import i18n from '../../i18n';

const changeLanguage = (lng, e) => {
  e.preventDefault();
  i18n.changeLanguage(lng);
}

const Lang = () => {
  return (
    <>
    <Link  style={{ color: '#FFF', paddingRight: "10px" }} onClick={(e) => changeLanguage('en', e)}>En</Link> 
    { ' | ' }
    <Link  style={{ color: '#FFF', paddingLeft: "10px" }} onClick={(e) => changeLanguage('de', e)}>De</Link> 
    </>
  )
}

export default Lang
