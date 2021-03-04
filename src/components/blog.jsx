import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './blog.css'
import { InlineWidget } from "react-calendly"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "gatsby"
import useGAEventsTracker from "./useGAEventsTracker"

const Dot=()=>(<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.77781" cy="3.74876" r="3.07737" fill="#D3C9C9"/>
                </svg>
            )

const BlogMain = (props) => {

    const [allBlog, setAllBlog] = useState(false);
    const [data, setData] = useState([])
    const [blogs, setBlogs] =useState([])

    const useGAEventTracker1 =useGAEventsTracker('Blogs');
    useGAEventTracker1('Page open','Blogs')
    
    const changeBlogs =()=>{
        // if(data.length<1) return;
        if(allBlog){
            setAllBlog(false);
            // setBlogs(data.slice(0,8))
        }
        else{
            setAllBlog(true);
            // setBlogs(data)
        }
    }
    return(
        <Layout >
        
        <SEO title="Blog" />
        <div >
        <div className="blog_background " style={{ width:"100%", height:"70vh"}}>
            <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
            <div className="blog_middel_text ">
                <span>Our Blog</span>
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
                            
                            <span className="pl-2"><Dot /></span>
                        </div>
                        
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blogs/1" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>
            </div>
            <div className="blog_with_info row">
                <div className="blog_text_box col-12 order-2 order-sm-1 col-sm-6">
                <div className="row pt-2 pb-3">
                        <div className="col-3">
                            News
                            <span className="pl-2"><Dot /></span>
                        </div>
                        <div className="date text-muted">
                            9 April 2019
                        </div>
                    </div>
                    <div >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecter adipiscing onsectetur adipiscing elit.
                    </div>
                    <div className="pt-3 pb-3">
                        <Link to="/blogs/1" ><ins> Read more {String('>')}</ins></Link>
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
                            <Dot />

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
                        <Link to="/blogs/0" ><ins> Read more {String('>')}</ins></Link>
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
                            <Dot />
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
                        <Link to="/blogs/1" ><ins> Read more {String('>')}</ins></Link>
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
                            <Dot />
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
                        <Link to="/blogs/1" ><ins> Read more {String('>')}</ins></Link>
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
                            <Dot />
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
                        <Link to="/blogs/0" ><ins> Read more {String('>')}</ins></Link>
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
                            <Dot />
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
                        <Link to="/blogs/1" ><ins> Read more {String('>')}</ins></Link>
                    </div>                    
                </div>

            </div>


        </div>
        
        {!allBlog&&<div className="older_post text-center pb-4 text-white  text-decoration-underline" onClick={()=>changeBlogs()}>
            <span onClick={()=>changeBlogs()}>Older Post {String('>>') }</span>
        </div>}
        {allBlog&&<div className="older_post text-center pb-4" >
            <span onClick={()=>changeBlogs()}>Recent Post {String('>>') }</span>
        </div>}
      </div>

      </div>
      
      </Layout>
    );
}
  export default BlogMain