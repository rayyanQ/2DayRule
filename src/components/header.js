import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container d-flex align-items-center justify-content-between py-3">
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            fontWeight: `bolder`
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <span>
        <Link className="pl-4">Track</Link>
        <Link className="pl-4">About</Link>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
