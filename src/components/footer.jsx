
import React from 'react';
import Google_logo from '../images/google_store.png'

import { Google_play_log, Linkedin_logo, Main_logo, Twitter_logo } from './image';
const Footer=()=>(
    <footer className="container-fluid pt-5">
        <div className="row mr-1 ml-1 mr-sm-5 ml-sm-5 footer-item">
            <div className="company-tag col-7 col-sm-4 col-md-2 pl-md-5">
                <Main_logo />
            </div>
            <div className="col-5 col-sm-5 col-md-7 text-center " >
            {/* <span className="d-none d-md-inline-block " >&nbsp; &nbsp; &nbsp;</span> */}
            <Twitter_logo /> <span >&nbsp;</span>
            <Linkedin_logo />
            </div>
            <div className="col-11 col-sm-2 col-md-1 pt-2 pt-sm-0 ">
                <Google_play_log />
            </div>
            <h6 className="col-11 mt-4 copyright text-center" style={{color:"#fff"}}> Copyright ©️ 2020 plaqsha.com <span className="d-sm-none"> <br /></span> All rights reserved. </h6>
            <hr style={{borderWidth:"1px", borderColor:"white"}} className="col-10 col-md-11" />
            
        </div>
    </footer>
)
export default Footer;