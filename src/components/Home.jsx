import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InlineWidget } from "react-calendly"
import Top from '../images/top.png'
import Adaptive_learning from '../images/adaptive_learning.png';
import Bite_sized_learning from '../images/bite_sized_learning.png'
import Gamplatform from "../images/gamplatform.png"
import Multiplatform from '../images/multiplatform.png'
import Profile_logo from '../images/profile-picture.png';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Home_starting } from "./image"

import { Link } from "gatsby"

const Dot=()=>(<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.77781" cy="3.74876" r="3.07737" fill="#D3C9C9"/>
                </svg>
            )

const Home = () => {
  
    const [settings,setSetting] = useState({
      dots: true,
      autoplay: true,
      // infinite: true,
      slidesToShow: window.innerWidth>800?3:window.innerWidth>500?2:1,
      slidesToScroll: 1
    });
  
    
  
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setSetting({
          dots: true,
          autoplay: true,
          // infinite: true,
          slidesToShow: window.innerWidth>800?3:window.innerWidth>500?2:1,
          slidesToScroll: 1
        });
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);
  
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])
  
    return(
    <Layout >
      {/* {alert(JSON.stringify(screen,null,4))} */}
      <SEO title="Home" />
      <div className="container row ml-sm-5 sections">
        <section id="start" className="row pl-sm-5">
          <div className="col-11 mb-5 mb-sm-1 order-last order-sm-1 col-sm-5 text-box">
            <h1 className="bite_sized pb-sm-4">
              Bite-sized, reinforced nuggets for workforce empowerment
            </h1>
            <p className="pb-sm-3">
              Enterprise shill enhancement platform for the mobile workforce.
            </p>
            <a href="/#learning" className="explore_button text-decoration-none">Explore Features</a>
          </div>
          <div className="col-11 mb-5 mb-sm-1 offset-sm-1 order-1 order-sm-2 col-sm-6 d-none d-sm-block ">
            <Home_starting />
          </div>
        </section>
        <section id="learning" className="row pl-sm-5">
          <div className="col-11" style={{height:"auto"}} ></div>
          <div className="col-sm-6">
            <img src={Bite_sized_learning} width="100%" alt="" />
          </div>
          <div className="col-sm-6">
            <h2 className="pb-sm-4"><span></span> Bite-sized learning </h2>
            <p> With a decrease in the average attention span of humans worldwide, we bring to you adaptive learning solution that is suited to your workforce persona.</p>
            <a target="_blank" href="https://ied.eu/project-updates/what-is-bite-size-learning/">Learn more about Bite-sized learning {">"}</a>
          </div>
        </section>
  
        <section id="platform" className="row pl-sm-5">
          <div className="col-11 mb-5 mb-sm-1 order-last order-sm-1 col-sm-6 text-box">
            <h2 className="pb-sm-4"><span></span> Gamified platform</h2>
            <p>Just the right gamification elements to engage the workforce.</p>
            <a target="_blank" href="https://www.biworldwide.com/gamification/what-is-gamification/"> Learn more about Gamified platform {">"} </a>
          </div>
          <div className="col-11 order-1 order-sm-2 col-sm-6">
            <img src={Gamplatform} width="100%" alt="" />
          </div>      
        </section>
  
        <section id="learning1" className="row pl-sm-5">
          <div className="col-sm-6">
            <img src={Adaptive_learning} width="100%" alt="" />
          </div>
          <div className="col-sm-6">
            <h2 className="pb-sm-4"><span></span> Adaptive learning</h2>
            <p>With a decrease in the average attention span of humans worldwide, we bring to you adaptive learning solution that is suited to your workforce persona.</p>
            <a target="_blank" href="https://www.smartsparrow.com/what-is-adaptive-learning/"> Learn more about Adaptive learning {'>'}</a>
          </div>      
        </section>
        <section id="platform1" className="row pl-sm-5">
          <div className="col-11 mb-5 mb-sm-1 order-last order-sm-1 col-sm-6">
            <h2 className="pb-sm-4"><span></span> Multilingual platform </h2>
            <p>Offer learning in the language of the learner.</p>
            <a target="_blank" href="https://www.star-spain.com/en/technologies-webterm/multilingual-and-multi-platform-terminology"> Learn more about Multilingual platform {">"} </a>
          </div>
          <div className="col-11 order-1 order-sm-2 col-sm-6">
            <img src={Multiplatform} width="100%" alt="" />
          </div>     
        </section>
        <section className="slider-containar mb-5" >
          <h2 className="text-center"><span></span> What our users say? </h2>
          <div className="scroller">
          <Slider {...settings} >
            
            {Array(5).fill(<div>
              <Card className="card1">
                <div className="row ml-2 mt-4 mb-3">
                  <div className="col-5">
                    <CardImg top width="100px" height="100px" src={Profile_logo} alt="" className="img-bordered" />
                  </div>
                  <div className="col-6 icon-text">
                    <h5 >Alisha</h5>
                    <p >New york</p>
                  </div>
                </div>
                
                <CardBody>
                <CardText tag="span" className="d-flex justify-content-center  star-row" style={{color:"black"}}>
                    {Array(5).fill(<svg width="35" className="pr-2" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6549 0.755428C16.964 -0.145018 18.2375 -0.145019 18.5465 0.755426L21.994 10.7988C22.1327 11.2028 22.5127 11.4742 22.9399 11.4742H33.9743C34.9563 11.4742 35.3501 12.7417 34.541 13.2981L25.7101 19.3713C25.3402 19.6257 25.1852 20.0954 25.3309 20.52L28.726 30.4107C29.039 31.3224 28.0078 32.1055 27.2135 31.5593L18.1674 25.338C17.8261 25.1033 17.3754 25.1033 17.0341 25.338L7.9879 31.5593C7.19364 32.1055 6.16245 31.3224 6.47542 30.4107L9.87051 20.52C10.0162 20.0954 9.8612 19.6257 9.49133 19.3713L0.660438 13.2981C-0.148659 12.7417 0.245126 11.4742 1.22709 11.4742H12.2616C12.6887 11.4742 13.0687 11.2028 13.2074 10.7988L16.6549 0.755428Z" fill="#D2E125"/>
                                  </svg>
                    )}
                    {/* <svg width="35" className="pr-2" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6549 0.755428C16.964 -0.145018 18.2375 -0.145019 18.5465 0.755426L21.994 10.7988C22.1327 11.2028 22.5127 11.4742 22.9399 11.4742H33.9743C34.9563 11.4742 35.3501 12.7417 34.541 13.2981L25.7101 19.3713C25.3402 19.6257 25.1852 20.0954 25.3309 20.52L28.726 30.4107C29.039 31.3224 28.0078 32.1055 27.2135 31.5593L18.1674 25.338C17.8261 25.1033 17.3754 25.1033 17.0341 25.338L7.9879 31.5593C7.19364 32.1055 6.16245 31.3224 6.47542 30.4107L9.87051 20.52C10.0162 20.0954 9.8612 19.6257 9.49133 19.3713L0.660438 13.2981C-0.148659 12.7417 0.245126 11.4742 1.22709 11.4742H12.2616C12.6887 11.4742 13.0687 11.2028 13.2074 10.7988L16.6549 0.755428Z" fill="#D2E125"/>
                    </svg> */}
                    
                  </CardText>
                  <CardTitle tag="h5" className="pb-2 pt-5"> Love it!  </CardTitle>
                  <CardSubtitle tag="h6" className=" text-muted card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate distinctio sit </CardSubtitle>
                </CardBody>
              </Card>
            </div>)}
          </Slider>
          </div>
          
        </section>
        
      </div>
      <div className="recent_blogs">
        <div className="pt-5 pl-4 offset-md-1">
          <p>Latest Articles</p>
          <h1 style={{fontWeight:"100"}} >From the Blog</h1>
        </div>
        <div className="many_blogs container d-md-flex  p-md-5 mb-5">
          {Array(4).fill(<div className="oneblog col-11 col-sm-5 col-md-3 pt-5 pb-5 ml-3 ml-sm-0">
            <div className="col-12 rounded-image nopadding">
                <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" width="100%" height="100%" /> 
            </div>
            <div className=" " >
                <div className="row pt-2 pb-3">
                    <div className="col-5 d-flex">
                        News
                        <span className="pl-2 " style={{fontWeight:"1800"}}>
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
                <div className="pt-3 pb-3 link-text">
                    <Link to="/blogs/1" ><ins> Read more {String('>')}</ins></Link>
                </div>                    
            </div>

          </div>)}
        </div>
      </div>
    </Layout>
    );
  }
  export default Home