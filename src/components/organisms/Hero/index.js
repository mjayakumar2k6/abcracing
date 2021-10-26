import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import {
  Block,
  Paragraph,
  IconLink,
  Button,
  ResponsiveImage,
  Tooltip,
} from '../../index'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  &:first-child {
    flex: none;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 3, true)};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  > :not(:first-child) {
    margin-left: 0.5rem;
  }
`

const Instructions = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
  }
`

const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Section>
   
        <ResponsiveImage 
            default="https://dummyimage.com/500x350/ced4da/6c757d"
            tablet="https://dummyimage.com/300x350/ced4da/6c757d"
            mobile="https://dummyimage.com/200x250/ced4da/6c757d"
        />         
          
          <ButtonGroup>
            <Tooltip reverse data-title="Get the latest news 😄">
              <Button href="/latest">Read More</Button>
            </Tooltip>
          </ButtonGroup>
        </Section>
        <Section>
          <Text>
            6 Winners and 5 Losers from the US Grand Prix – Who had the crowd on their feet in Austin?
          </Text>
          <Instructions>
            <IconLink
              icon="docs"
              right
              reverse
              href="/latest"
            >
              Read more
            </IconLink>
          </Instructions>
        </Section>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
