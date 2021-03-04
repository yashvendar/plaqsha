  import { Link } from "gatsby"
  import PropTypes from "prop-types"
  import React, { useState } from "react";
  import { Navbar, Button } from 'reactstrap'
  import { Main_logo } from "./image";
import useGAEventsTracker from "./useGAEventsTracker";

  const Header = ({ siteTitle, path }) => {
    const [bookademo,setBookademo] = useState(false);
    const GAEvents = useGAEventsTracker('Book a demo Button clicked');
    const changeRoute=()=>{
      GAEvents('Button Clicked', 'Book a demo')
      setBookademo(true)
      // alert(path)
    }
    if(!bookademo)
      return(
        <header
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
          }}
        >
          <Navbar className="header_ row-fluid " fixed="top" >
                <Link to="/" className="company-tag ml-sm-5 ">
                  <Main_logo />
                </Link>
                <Link className="offset-sm-7 d-none d-sm-block" style={{ textDecoration:"none"}} to="/blogs">
                  Blog
                </Link>
                <Button className="book-demo mr-sm-4" onClick={()=>changeRoute()}>Book a Demo</Button>
          </Navbar>
        </header>
        )
    else{
      window.location.href="/bookademo/"
    }
  }

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: `Plaqsha`,
  }

  export default Header
