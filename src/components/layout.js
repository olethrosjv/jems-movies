/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1060,
          padding: `0 1.1rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Deloper Link: TS</Link> <br />
        <Link to="/setting-up/">Setting Up</Link> <br />
        <Link to="/first-page/">Mdx starter</Link> <br />
        <Link to="/review-list/">Reviews</Link>
         <div>
            © {new Date().getFullYear()}, Made By
          {` `}
          <a href="http://joevau4.freehostia.com/joevaughn/">Joe Vaughn</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
