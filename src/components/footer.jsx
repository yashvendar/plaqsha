
import React from 'react';
import Google_logo from '../images/google_store.png'

import { Google_play_log, Linkedin_logo, Main_logo, Twitter_logo } from './image';
const Footer=()=>(
    <footer className="footer pt-5">
        <div className="container logo-row">
            
            <div className="company-tag">
                <Main_logo />
            </div>
            <div className=" text-center pt-3" >
            {/* <span className="d-none d-md-inline-block " >&nbsp; &nbsp; &nbsp;</span> */}
                <Twitter_logo /> <span >&nbsp;</span>
                <Linkedin_logo />
            </div>
            <div>
                <Google_play_log />
            </div>
            
        </div>
        <div className="container text-footer pb-4 pt-3 ">
            <div className="copyright text-center" style={{color:"#fff",height:"30px",lineHeight:"25px"}}> Copyright ©️ <span className="d-none d-md-inline pr-3"></span>2020 plaqsha.com <span className="d-sm-none"> <br /></span> <span className="d-none d-md-inline pr-3"></span> All rights reserved. </div>
            <hr style={{borderWidth:"1px", borderColor:"white"}}  />
        </div>
    </footer>
)
export default Footer;