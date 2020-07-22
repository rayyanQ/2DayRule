import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer style={{ background: `white` }}>
    <div style={{ height: `200px` }} className="container d-flex flex-column align-items-end justify-content-around py-3">
      <a href="https://twitter.com/RayyanQuraishi"><img src="https://img.icons8.com/color/48/000000/twitter-circled.png"/></a>
      <a href="https://github.com/rayyanQ"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
      <a href="https://www.instagram.com/rayyanquraishi/"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
    </div>
    <div style={{ height: `150px` }} className="container d-flex align-items-end justify-content-between py-3">
        <Link to="/">
            Made by Rayyan Ahmed Quraishi
        </Link>
      <span>
        <Link className="pl-4">Track</Link>
        <Link className="pl-4">About</Link>
      </span>
    </div>
    {/*<a href="https://icons8.com/icon/114450/twitter-circled">Twitter Circled icon by Icons8</a>
    <a href="https://icons8.com/icon/AZOZNnY73haj/github">GitHub icon by Icons8</a>
<a href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram">Instagram icon by Icons8</a>*/}
  </footer>
)

export default Footer