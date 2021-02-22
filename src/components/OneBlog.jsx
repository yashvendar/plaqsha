import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InlineWidget } from "react-calendly"
import Footer from './footer';
import Header from './header';

const Blog =( props )=>{
    const [data, setData] = useState(null);
    const [showModal,toggler]=useState(false);
    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=1f-b50Gzqn5IruqhzzNnjIM_6nAU7pDdVMIYUi8Sw5kU')
        .then(x=> x.json() )
        .then(x=> setData(x))
    }, [props.id]);
    return(
        <div>
            <Layout toggler={toggler}>
                {/* {alert(JSON.stringify(screen,null,4))} */}
                <SEO title="Home" />
                {showModal &&
                    <div className="modal_copy">
                    <InlineWidget url= 'https://calendly.com/plaqsha/30min?background_color=012e67&text_color=ffffff&primary_color=9384f8'
            
                    />
                    </div>
                }
                {!showModal && <div className="container">
                    <div  style={{minHeight:"70vh", position:"relative"}}>
                        {data && <div>
                                <div className="image_container">
                                    <img src="https://ziksha-website.s3.ap-south-1.amazonaws.com/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg" style={{width:"100%", height:"70vh"}} /> 
                                    <div className="image_title_box mt-5" style={{position:"absolute",top:'0',color:"#FFF", width:"100%"}}>
                                        <div className="text-center">
                                            Hii yash
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        }
                    </div>
                </div>}
            </Layout>
        </div>
    )
}
export default Blog;