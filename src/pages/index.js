import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components'

const Hero = styled.div`
  width: 100%;
  height: 550px;
  background: url('https://cdn.notonthehighstreet.com/campaigns/images/homepage-2017/bg-hero-block-10th-september-ddesk.jpg');
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
`

const Content = styled.div`
  width: 1018px;
  margin: 0 auto;
  height: 50px;
`

const ReviewOverview = styled(Content)`
  background-color: pink;
`
const CuratedCollections = styled(Content)`
  background-color: blue;
`
const GiftsWithFreeDelivery = styled(Content)`
  background-color: green;
`
const FreeInspiration = styled(Content)`
  background-color: purple;
`
const PopularThisWeek = styled(Content)`
  background-color: red;
`
const MeetTheMakers = styled(Content)`
  background-color: yellow;
`

const IndexPage = () => (
  <Layout>
    <Hero>
      <img src="//cdn.notonthehighstreet.com/campaigns/images/homepage-2017/wk22-HeroStatic_desk_02.png" />
    </Hero>
    <ReviewOverview />
    <CuratedCollections />
    <GiftsWithFreeDelivery />
    <FreeInspiration />
    <PopularThisWeek />
    <MeetTheMakers />
  </Layout>
)

export default IndexPage
