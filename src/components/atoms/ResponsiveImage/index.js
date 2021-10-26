import React from 'react'
import PropTypes from 'prop-types'



const ResponsiveImage = ({ ...props }) => {

  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={props.mobile}/>
      <source media="(max-width: 1024px)" srcSet={props.tablet}/>
      <source media="(min-width: 1025px)" srcSet={props.default}/>
      
      <img src={props.default} alt="IfItDoesntMatchAnyMedia"/>
    </picture>    
  )
}

ResponsiveImage.propTypes = {
  src: PropTypes.string
}

ResponsiveImage.defaultProps = {
  height: 450,
}

export default ResponsiveImage
