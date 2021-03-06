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
          <Navbar className="header_  " fixed="top" >
            <div className="container header_row">
                <Link to="/" className="company-tag header-company-logo ">
                  <Main_logo />
                </Link>
                <div className="blogs_link d-none d-sm-flex">
                  <Link style={{ textDecoration:"none", color:"#54A2FF", fontWeight:"bold",textAlign:"right"}} to="/blogs">
                    Blog
                  </Link>
                </div>
                <Button className="book-demo " onClick={()=>changeRoute()}>Book a Demo</Button>
            </div>
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
