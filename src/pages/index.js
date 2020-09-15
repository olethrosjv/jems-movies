import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"


import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Everyone</h1>
    <p>Welcome to my web site.</p>
    <p>This is a place for anyone who loves watching movies with friends and family on backyard projectors</p>
    <div style={{ maxWidth: `500px`, marginBottom: `2rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Deloper Link: TS</Link> <br />
    <Link to="/setting-up/">Setting Up</Link> <br />
    <Link to="/first-page/">Mdx starter</Link>
  </Layout>
)

export default IndexPage
