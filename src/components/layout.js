import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import {
  Styles,
  Header,
  Navigation,
  Footer,
  Copyright,
} from '@noths/global-components'
import styled from 'styled-components'
import './layout.css'

const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Styles />
        <Header />
        <Navigation />
        <Content>{children}</Content>
        <Footer />
        <Copyright />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
