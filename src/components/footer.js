import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer style={{ background: `white` }}>
    <div className="container d-flex align-items-start justify-content-end py-3">
        
    </div>
    <div style={{ height: `350px` }} className="container d-flex align-items-end justify-content-between py-3">
        <Link to="/">
            Made by Rayyan Ahmed Quraishi
        </Link>
      <span>
        <Link className="pl-4">Track</Link>
        <Link className="pl-4">About</Link>
      </span>
    </div>
  </footer>
)

export default Footer