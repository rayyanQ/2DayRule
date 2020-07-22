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
        The 2 Day Rule was introduced by Matt D’Avella as a simple way to build habits. He talks about how rules are not necessarily bad and are essential for having some structure in life. One such rule that can help you build habits is the 2 Day Rule. It's simple: Never skip 2 days of a habit in a row. Take for instance, exercise. Set a minimum for yourself, say 10 pushups, and every day no matter what you must meet your minimum goal. You might have a whole exercise routine, but on days that you don't have time or are just not in the mood, all you have to do is just hit the minimum. This way you stay consistent and don't derail after the initial excitement.
      </p>
      <div className="my-5">
        <p className="h4">Why it works</p>
        <p style={{ lineHeight: `2`, textAlign: `justify` }}>
          The 2 Day Rule works for two reasons: it allows you to do an "ok" job, and it forces you to stay consistent while giving room to screw up. People are usually not able to stick to new habits because they are not consistent enough, and people are not consistent enough because they think that they have to do a great job every single time. For instance, if you want to get into the habit of writing, you might think you have to produce a few pages everyday. By holding ourselves to this impossible standard we are making it difficult to start. But if you give yourself an easy minimum, say 500 words per day, we make it easy to stay consistent and do the work even on bad days.
        </p>
      </div>
      <div className="my-5">
        <p className="h4">Track your habit</p>
        <p style={{ lineHeight: `2`, textAlign: `justify` }}>
          Just mark your progress on a calendar. It is very important to visually see the progress that you make, it can be very encouraging and motivating. I would recommend using a physical paper calendar, though you could use an online app to do the same. We are currently building a free and opensource tool specifically for the 2 Day Rule, click here if you would like to contribute.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
