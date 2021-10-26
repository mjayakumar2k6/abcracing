import React from 'react'
import styled from 'styled-components'
import {useTranslation} from "react-i18next";

import {
  Feature, Link, Heading, Paragraph, ResponsiveImage
} from '../../index'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  span {
    display: block;
  }
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`
const RImage = () => {
  return (<ResponsiveImage
    default="https://dummyimage.com/400x250/ced4da/6c757d"
    tablet="https://dummyimage.com/300x250/ced4da/6c757d"
    mobile="https://dummyimage.com/500x250/ced4da/6c757d"
  />)
}


const FeatureList = ({ ...props }) => {
  const { t } = useTranslation();
  return (
  
  <div {...props}>
    <StyledHeading>{t("topStories")}</StyledHeading>
    <Description>
      Lando Norris got his frights in well before Halloween as the McLaren driver said he was “so scared” at the beginning of the United States Grand Prix while battling his team mate Daniel Ricciardo and Ferrari’s Carlos Sainz.
      <br />
      <Link href="/latest">Read More</Link>
    </Description>
    <Grid>
      <StyledFeature
        link="https://facebook.github.io/react"
        title="Vettel relishes battle with Russell at COTA as he fights his way up from P18 to the points"
      >
        <RImage />
        <span>Vettel relishes battle with Russell at COTA as he fights his way up from P18 to the points</span>
      </StyledFeature>
      <StyledFeature
        link="https://github.com/ReactTraining/react-router"
        title="PALMER: Why Verstappen’s Austin win was such a seminal race for Red Bull's title contender"
      >
        <RImage />
        <span>PALMER: Why Verstappen’s Austin win was such a seminal race for Red Bull's title contender</span>
      </StyledFeature>
      <StyledFeature
        link="https://webpack.github.io/"
        title="Jack Aitken to drive for Williams in Abu Dhabi FP1 – four months after horror Spa crash"
      >
        <RImage />
        <span>Jack Aitken to drive for Williams in Abu Dhabi FP1 – four months after horror Spa crash
          enabled.</span>
      </StyledFeature>
      <StyledFeature
        link="https://facebook.github.io/jest"
        title="Norris explains 'scary' start in Austin as he battled with Ricciardo and Ferrari pair on Lap 1"
      >
        <RImage />
        <span>Norris explains 'scary' start in Austin as he battled with Ricciardo and Ferrari pair on Lap 1</span>
      </StyledFeature>
    </Grid>
    <StyledHeading>More News</StyledHeading>
    <Description>
      <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </span>
    </Description>
    <Grid>
      <StyledFeature
        link="https://facebook.github.io/jest"
        title="Norris explains 'scary' start in Austin as he battled with Ricciardo and Ferrari pair on Lap 1"
      >
        <RImage />
        <span>Norris explains 'scary' start in Austin as he battled with Ricciardo and Ferrari pair on Lap 1</span>
      </StyledFeature>
      <StyledFeature
        link="https://facebook.github.io/jest"
        title="Norris explains 'scary' start in Austin as he battled with Ricciardo and Ferrari pair on Lap 1"
      >
        <RImage />
        <span>Norris explains 'scary' start in Austin as he battled with Ricciardo and Ferrari pair on Lap 1</span>
      </StyledFeature>
    </Grid>
  </div>
)}

export default FeatureList
