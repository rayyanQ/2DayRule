//#2D2D31
//#F2F2F2
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="body" className="container">
      <h1 id="hero" className="d-flex justify-content-center align-items-center" style={{ fontWeight: `bolder`, height: `350px` }}>
        Never skip 2 days of a habit in a row
      </h1>
      <iframe className="my-5" width="100%" height="500" src="https://www.youtube.com/embed/bfLHTLQZ5nc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p style={{ lineHeight: `2`, textAlign: `justify` }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Ut pharetra sit amet aliquam. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Morbi tincidunt ornare massa eget egestas purus viverra. Quam quisque id diam vel. Amet mauris commodo quis imperdiet massa tincidunt. Condimentum mattis pellentesque id nibh. Ut consequat semper viverra nam. Consectetur a erat nam at lectus urna duis.
      </p>
      <div className="my-5">
        <p className="h4">Why it works</p>
        <p style={{ lineHeight: `2`, textAlign: `justify` }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Ut pharetra sit amet aliquam. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Morbi tincidunt ornare massa eget egestas purus viverra. Quam quisque id diam vel. Amet mauris commodo quis imperdiet massa tincidunt. Condimentum mattis pellentesque id nibh. Ut consequat semper viverra nam. Consectetur a erat nam at lectus urna duis. Risus viverra adipiscing at in tellus integer feugiat.
        </p>
      </div>
      <div className="my-5">
        <p className="h4">Track your habit</p>
        <p style={{ lineHeight: `2`, textAlign: `justify` }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Ut pharetra sit amet aliquam. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Morbi tincidunt ornare massa eget egestas purus viverra. Quam quisque id diam vel. Amet mauris commodo quis imperdiet massa tincidunt. Condimentum mattis pellentesque id nibh.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
