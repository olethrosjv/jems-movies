import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import imageUrl from '../images/optimized/projector-stand.jpg'

const SecondPage = () => (
  <Layout>
    <SEO title="Setting Up" />
    <article>
    <h1>Setting up your own DIY backyard movie theater</h1>
    <p>An outdoor movie night isn't just for a public park or drive-in theater. 
      With the right equipment and setup, you can create a DIY backyard movie theater of your own.</p>
    <p>For a real movie night outdoors, you need a portable projector. Fortunately, there are many outdoor projectors available these days at a 
      variety of prices. Pay attention to the lumens (how bright the projector is) and the resolution at the desired range. You will also 
      want to make sure that your projector can handle your content format (Blu-ray, external hard drive, HDMI connection, etc.). Don't rush this 
      purchase. Do the research.</p>
    <p>You need to think about where you are going to project your movie? An old DIY standard is a sheet tacked up on a fence or wall. But that 
      isn't dependable, and the slightest breeze will wreak havoc with the picture. Instead, the ambitious can build a PVC pipe frame for a more 
      professional-looking screen. Or you can get an outdoor screen that comes with a firm stand. Depending on where you live and the time of 
      year, the wind can be a huge factor.</p>
    <p>Looking for a more go-big-or-go-home screen for a larger group? Many people rent an inflatable screen. You can also skip the screen 
      and projector altogether by buying an outdoor television.</p>

      <span>
        <img src={imageUrl} alt="Projector Stand" width="1000" height="860"/>
      </span>

    <h2>Getting Started with Audio for your backyard projector.</h2>  
    <p>You may have a picture, but now you need sound to go with your DIY outdoor movie screen. A basic soundbar is relatively easy to move out 
      and hook up to a projector if it is compatible and if you have one on hand. If you have an outdoor Bluetooth speaker, you may be able to 
      connect it to your projector as well, depending on capabilities. Or consider buying a durable, affordable speaker set (a three-piece set is 
      usually sufficient) that you can bring outside. This is also a good time to explore any local or HOA regulations on noise levels and 
      backyard sound, just in case your DIY backyard movie theater needs a few tweaks.</p>
      
    </article>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
