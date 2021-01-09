import Linkden from '../images/linkden.png'
import Twitter from '../images/twitter.png'
import React from 'react';
import Google_logo from '../images/google_store.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer=()=>(
    <footer className="container-fluid mt-4">
        <div className="row mr-1 ml-1 mr-sm-5 ml-sm-5 mt-auto footer-item">
            <div className="company-tag col-7 col-sm-4 col-md-3 ">
                Plaqsha
            </div>
            <div className="col-5 col-sm-5 col-md-5 offset-md-2" style={{color:"#fff"}}>
                <img src={Linkden} alt="" width="40px" height="40px"  />
                <img src={Twitter} alt="" width="40px" height="40px" className="ml-3" />
            </div>
            <div className="col-12 col-sm-2 ">
                <img src={Google_logo} alt="" style={{maxWidth:"150px"}}  />
            </div>
            <h6 className="col-12 mt-4 copyright" style={{color:"#fff", textAlign:"center"}}> Copyright ©️ 2020 plaqsha.com <span className="d-sm-none"> <br /></span> All rights reserved. </h6>
            <hr style={{borderWidth:"1px", borderColor:"white"}} className="col-10 col-md-12" />
            
        </div>
    </footer>
)
export default Footer;