import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './blog.css'
import { InlineWidget } from "react-calendly"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "gatsby"

const BlogMain = () => {

    const [showModal,toggler]=useState(false);
    const [allBlog, setAllBlog] = useState([]);
    // const changeBlogs =(e)=>{
    //     if(e){
    //         setAllBlog()
    //     }
    // }
    return(
        <Layout toggler={toggler}>
        
        <SEO title="Blog" />
        {showModal &&
        <div  style={{width:"100%"}} >
            <InlineWidget url= 'https://calendly.com/plaqsha/30min?background_color=012e67&text_color=ffffff&primary_color=9384f8'
            />
        </div>
      }
      {!showModal && <div >
        <div className="blog_background " style={{ width:"100%", height:"70vh"}}>
            <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
            <div className="blog_middel_text ">
                <span>My First Blog</span>
            </div>
        </div>
        <div className="two_blogs container">
            <div className="blog_with_info row">
                <div className="col-12 col-sm-6 back_white nopadding">
                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
                </div>
                <div className="blog_text_box col-12 col-sm-6" >
                    <div className="row pt-2 pb-3">
                        <div className="col-3">
                            News
                            <span className="ml-2 ml-sm-3" style={{fontWeight:"1800"}}>
                                &middot;
                            </span>
                        </div>
                        
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blog/z" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>
            </div>
            <div className="blog_with_info row">
                <div className="blog_text_box col-12 order-2 order-sm-1 col-sm-6">
                <div className="row pt-2 pb-3">
                        <div className="col-3">
                            News
                            <span className="ml-2 ml-sm-3" style={{fontWeight:"1800"}}>
                                &middot;
                            </span>
                        </div>
                        
                        <div className="date col-5 ml-2 text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blog/z" ><ins> Read more {String('>')}</ins></Link>
                    </div>  
                </div>
                <div className="col-12 order-1 order-sm-2 col-sm-6 back_white nopadding">
                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
                </div>
            </div>
        </div>
        <div className="container">

        <div className="many_blogs container row">
            <div className="oneblog col-12 col-sm-5 col-md-3 pt-5 pb-5 ml-3 ml-sm-0">
                <div className="col-12 rounded-image nopadding">
                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
                </div>
                <div className=" " >
                    <div className="row pt-2 pb-3">
                        <div className="col-5">
                            News
                            <span className="ml-2 ml-sm-3" style={{fontWeight:"1800"}}>
                                &middot;
                            </span>
                        </div>
                        
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blog/z" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>

            </div>

            <div className="oneblog col-12 col-sm-5 col-md-3 pt-5 pb-5 ml-3 ml-sm-0">
                <div className="col-12 rounded-image nopadding">
                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
                </div>
                <div className=" " >
                    <div className="row pt-2 pb-3">
                        <div className="col-5">
                            News
                            <span className="ml-2 ml-sm-3" style={{fontWeight:"1800"}}>
                                &middot;
                            </span>
                        </div>
                        
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blog/z" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>

            </div>

            <div className="oneblog col-12 col-sm-5 col-md-3 pt-5 pb-5 ml-3 ml-sm-0">
                <div className="col-12 rounded-image nopadding">
                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
                </div>
                <div className=" " >
                    <div className="row pt-2 pb-3">
                        <div className="col-5">
                            News
                            <span className="ml-2 ml-sm-3" style={{fontWeight:"1800"}}>
                                &middot;
                            </span>
                        </div>
                        
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blog/z" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>

            </div>

            <div className="oneblog col-12 col-sm-5 col-md-3 pt-5 pb-5 ml-3 ml-sm-0">
                <div className="col-12 rounded-image nopadding">
                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
                </div>
                <div className=" " >
                    <div className="row pt-2 pb-3">
                        <div className="col-5">
                            News
                            <span className="ml-2 ml-sm-3" style={{fontWeight:"1800"}}>
                                &middot;
                            </span>
                        </div>
                        
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blog/z" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>

            </div>
            <div className="oneblog col-12 col-sm-5 col-md-3 pt-5 pb-5 ml-3 ml-sm-0">
                <div className="col-12 rounded-image nopadding">
                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
                </div>
                <div className=" " >
                    <div className="row pt-2 pb-3">
                        <div className="col-5">
                            News
                            <span className="ml-2 ml-sm-3" style={{fontWeight:"1800"}}>
                                &middot;
                            </span>
                        </div>
                        
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blog/z" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>

            </div>


        </div>
        
        <div className="older_post text-center" onClick={()=>{}}>
            Older Post {String('>>') }
        </div>
        
      </div>

      </div>}
      
      </Layout>
    );
}
  export default BlogMain