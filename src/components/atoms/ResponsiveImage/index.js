import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'



const ResponsiveImage = ({ ...props }) => {
  return <img {...props} />
}

ResponsiveImage.propTypes = {
  src: PropTypes.string
}

ResponsiveImage.defaultProps = {
  height: 450,
}

export default ResponsiveImage
