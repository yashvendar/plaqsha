import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import { Navbar, Button } from 'reactstrap'

const Header = ({ siteTitle,toggler }) => {
  return(
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navbar className="header_ row-fluid " fixed="top" >
          <Link to="/" className="company-tag ml-sm-5">
            Plaqsha
          </Link>
          <Link className="offset-sm-8" style={{ textDecoration:"none"}} to="/blog/">
            Blog
          </Link>
          <Button className="book-demo mr-sm-4" onClick={()=>toggler(x=>!x)}>Book a Demo</Button>
    </Navbar>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Plaqsha`,
}

export default Header
