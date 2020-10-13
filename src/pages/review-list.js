import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo" 
// >>>>>>>>>> TO DO: ADD SEO Component to all pages
import imageUrl from '../images/optimized/projector-stand.jpg'

const ReviewList = () => (
  <Layout>
    <SEO title="Review List" />
    <section>
    <h1>Backyard Movie Reviews</h1>
    <div>
        <ul>
            <li><Link to="/jaws-review">Jaws</Link></li>
        </ul>

    </div>

      <span>
        <img src={imageUrl} alt="Projector Stand" width="1000" height="860"/>
      </span>

 
      
    </section>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReviewList
