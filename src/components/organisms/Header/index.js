import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'


import { IconLink, PrimaryNavigation, Block, Lang } from '../../index'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Header = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="abc" height={100} />
        <PrimaryNavigation reverse />
      </InnerWrapper>
      <Lang/>
    </Wrapper>
  )
}

export default Header
