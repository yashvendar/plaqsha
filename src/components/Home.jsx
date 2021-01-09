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

const Home = () => {
    const [showModal,toggler]=useState(false);
  
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
    <Layout toggler={toggler}>
      {/* {alert(JSON.stringify(screen,null,4))} */}
      <SEO title="Home" />
      {showModal &&
        <div className="modal_copy">
        <InlineWidget url= 'https://calendly.com/plaqsha/30min?background_color=012e67&text_color=ffffff&primary_color=9384f8'
  
        />
        </div>
      }
      {!showModal && <div className="container row ml-sm-5 sections">
        <section id="start" className="row">
          <div className="col-11 mb-5 mb-sm-1 order-last order-sm-1 col-sm-6 text-box">
            <h1>
              Bite-sized, reinforced nuggets for workforce empowerment
            </h1>
            <p>
              Enterprise shill enhancement platform for the mobile workforce.
            </p>
            <a href="/#learning" className="explore_button">Explore Features</a>
          </div>
          <div className="col-11 mb-5 mb-sm-1 order-1 order-sm-2 col-sm-6">
            <img src={Top} width="100%" alt="" />
          </div>
        </section>
        <section id="learning" className="row">
          <div className="col-12" style={{height:"auto"}} ></div>
          <div className="col-sm-6">
            <img src={Bite_sized_learning} width="100%" alt="" />
          </div>
          <div className="col-sm-6">
            <h2><span></span> Bite-sized learning </h2>
            <p> With a decrease in the average attention span of humans worldwide, we bring to you adaptive learning solution that is suited to your workforce persona.</p>
            <a target="_blank" href="https://ied.eu/project-updates/what-is-bite-size-learning/">Learn more about Bite-sized learning {">"}</a>
          </div>
        </section>
  
        <section id="platform" className="row">
          <div className="col-11 mb-5 mb-sm-1 order-last order-sm-1 col-sm-6 text-box">
            <h2><span></span> Gamified platform</h2>
            <p>Just the right gamification elements to engage the workforce.</p>
            <a target="_blank" href="https://www.biworldwide.com/gamification/what-is-gamification/"> Learn more about Gamified platform {">"} </a>
          </div>
          <div className="col-11 order-1 order-sm-2 col-sm-6">
            <img src={Gamplatform} width="100%" alt="" />
          </div>      
        </section>
  
        <section id="learning1" className="row">
          <div className="col-sm-6">
            <img src={Adaptive_learning} width="100%" alt="" />
          </div>
          <div className="col-sm-6">
            <h2><span></span> Adaptive learning</h2>
            <p>With a decrease in the average attention span of humans worldwide, we bring to you adaptive learning solution that is suited to your workforce persona.</p>
            <a target="_blank" href="https://www.smartsparrow.com/what-is-adaptive-learning/"> Learn more about Adaptive learning {'>'}</a>
          </div>      
        </section>
        <section id="platform1" className="row">
          <div className="col-11 mb-5 mb-sm-1 order-last order-sm-1 col-sm-6">
            <h2><span></span> Multilingual platform </h2>
            <p>Offer learning in the language of the learner.</p>
            <a target="_blank" href="https://www.star-spain.com/en/technologies-webterm/multilingual-and-multi-platform-terminology"> Learn more about Multilingual platform {">"} </a>
          </div>
          <div className="col-11 order-1 order-sm-2 col-sm-6">
            <img src={Multiplatform} width="100%" alt="" />
          </div>     
        </section>
        <section style={{
          width:"90vw"
        }} >
          <h2 className="text-center"><span></span> What our users say? </h2>
          <div className="scroller">
          <Slider {...settings} >
            <div>
              <Card className="card1">
                <div className="row ml-2 mt-4 mb-3">
                  <div className="col-5">
                    <CardImg top width="100px" height="100px" src={Profile_logo} alt="" className="img-bordered" />
                  </div>
                  <div className="col-6 icon-text">
                    <h5 >Yash</h5>
                    <p >New york</p>
                  </div>
                </div>
                {/* <CardImg top width="50%" src={Top} alt="" /> */}
                
                <CardBody>
                  <CardText tag="span" className="offset-3" style={{color:"black"}}>
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} size="1x" />
                  </CardText>
                  <CardTitle tag="h5" className="pb-3 pt-2"> Love it! ❤️ ❤️ </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate distinctio sit </CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="card1">
                <div className="row ml-2 mt-4 mb-3">
                  <div className="col-5">
                    <CardImg top width="100px" height="100px" src={Profile_logo} alt="" className="img-bordered" />
                  </div>
                  <div className="col-6 icon-text">
                    <h5 >Yash</h5>
                    <p >New york</p>
                  </div>
                </div>
                {/* <CardImg top width="50%" src={Top} alt="" /> */}
                
                <CardBody>
                  <CardText tag="span" className="offset-3" style={{color:"black"}}>
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} size="1x" />
                  </CardText>
                  <CardTitle tag="h5" className="pb-3 pt-2"> Love it! ❤️ ❤️  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate distinctio sit </CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="card1">
                <div className="row ml-2 mt-4 mb-3">
                  <div className="col-5">
                    <CardImg top width="100px" height="100px" src={Profile_logo} alt="" className="img-bordered" />
                  </div>
                  <div className="col-6 icon-text">
                    <h5 >Yash</h5>
                    <p >New york</p>
                  </div>
                </div>
                {/* <CardImg top width="50%" src={Top} alt="" /> */}
                
                <CardBody>
                <CardText tag="span" className="offset-3" style={{color:"black"}}>
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} size="1x" />
                  </CardText>
                  <CardTitle tag="h5" className="pb-3 pt-2"> Love it! ❤️ ❤️  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate distinctio sit </CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="card1">
                <div className="row ml-2 mt-4 mb-3">
                  <div className="col-5">
                    <CardImg top width="100px" height="100px" src={Profile_logo} alt="" className="img-bordered" />
                  </div>
                  <div className="col-6 icon-text">
                    <h5 >Yash</h5>
                    <p >New york</p>
                  </div>
                </div>
                {/* <CardImg top width="50%" src={Top} alt="" /> */}
                
                <CardBody>
                <CardText tag="span" className="offset-3" style={{color:"black"}}>
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} size="1x" />
                  </CardText>
                  <CardTitle tag="h5" className="pb-3 pt-2"> Love it! ❤️ ❤️  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate distinctio sit </CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="card1">
                <div className="row ml-2 mt-4 mb-3">
                  <div className="col-5">
                    <CardImg top width="100px" height="100px" src={Profile_logo} alt="" className="img-bordered" />
                  </div>
                  <div className="col-6 icon-text">
                    <h5 >Yash</h5>
                    <p >New york</p>
                  </div>
                </div>
                {/* <CardImg top width="50%" src={Top} alt="" /> */}
                
                <CardBody>
                <CardText tag="span" className="offset-3" style={{color:"black"}}>
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} size="1x" />
                  </CardText>
                  <CardTitle tag="h5" className="pb-3 pt-2"> Love it! ❤️ ❤️  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate distinctio sit </CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="card1">
                <div className="row ml-2 mt-4 mb-3">
                  <div className="col-5">
                    <CardImg top width="100px" height="100px" src={Profile_logo} alt="" className="img-bordered" />
                  </div>
                  <div className="col-6 icon-text">
                    <h5 >Yash</h5>
                    <p >New york</p>
                  </div>
                </div>
                {/* <CardImg top width="50%" src={Top} alt="" /> */}
                
                <CardBody>
                  <CardText tag="span" className="offset-3" style={{color:"black"}}>
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} className="checked" size="1x" />&nbsp;
                    <FontAwesomeIcon icon={faStar} size="1x" />
                  </CardText>
                  <CardTitle tag="h5" className="pb-3 pt-2"> Love it! ❤️ ❤️  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate distinctio sit </CardSubtitle>
                </CardBody>
              </Card>
            </div>
          </Slider>
          </div>
          
        </section>
      </div>}
    </Layout>
    );
  }
  export default Home