import React from 'react'
import { StaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components'

const Hero = styled.div`
  width: 100%;
  height: 550px;
  background: url('https://chris-noths-cdn.imgix.net/campaigns/images/homepage-2017/bg-hero-block-10th-september-ddesk.jpg?bri=-10');
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

const Products = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  justify-content: space-between;
`

const Product = styled.div`
  width: 100px;
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
  <StaticQuery
    query={graphql`
      {
        allContentfulProduct {
          edges {
            node {
              id
              image {
                resolutions(width: 100) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Hero>
          {console.log(data.allContentfulProduct.edges[0].node)}
          <img src="//cdn.notonthehighstreet.com/campaigns/images/homepage-2017/wk22-HeroStatic_desk_02.png" />
        </Hero>
        <Products>
          {data.allContentfulProduct.edges.map(product => (
            <Product>
              <div>Product Id: {product.node.id}</div>
              {product.node.image.map(image => (
                <img src={image.resolutions.src} />
              ))}
            </Product>
          ))}
        </Products>
        <ReviewOverview />
        <CuratedCollections />
        <GiftsWithFreeDelivery />
        <FreeInspiration />
        <PopularThisWeek />
        <MeetTheMakers />
      </Layout>
    )}
  />
)

export default IndexPage
