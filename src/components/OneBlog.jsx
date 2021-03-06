import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InlineWidget } from "react-calendly"
import { Link } from 'gatsby';
import { Linkedin_logo, Twitter_logo } from './image';


ReactGA.initialize('G-3J038KE39V');

const Blog =( props )=>{
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=1SdN5xgwGwqQMnjwW3dQMtFNFzpWhLs2u4t7tUqy2dpM')
        .then(x=> x.json() )
        .then(x=> { /*alert(x['Sheet1']); */ setData(x.Sheet1)})
    },[props.id]);
    useEffect(() => {
        // alert(JSON.stringify(process.env))
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [props.id]);
    return(
        <div>
            <Layout >
                {/* {alert(JSON.stringify(screen,null,4))} */}
                <SEO title={data?`Blog:${data[props.id].title}`:'Blog'} />
                <div className="container">
                    <div  style={{minHeight:"70vh", position:"relative"}}>
                        {data && <div style={{width:"100%"}}>
                                <div className="image_container ">
                                    <img src={data[props.id].img_link} style={{width:"100%", height:"70vh"}} /> 
                                    <div className="image_title_box mt-5" style={{position:"absolute",top:'0',color:"#FFF", width:"100%"}}>
                                        <div className="text-center image_title_text mt-4 pt-5 pt-md-5 "  >
                                            <svg className="double_quote" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.8047 2.63281L16.7789 2.95285L17.155 0.632812H14.8047V2.63281ZM8.86719 2.63281V0.632812H7.35777L6.94386 2.08436L8.86719 2.63281ZM3.16406 22.6328L1.24073 22.0844L0.514025 24.6328H3.16406V22.6328ZM11.5625 22.6328V24.6328H13.2644L13.5367 22.9529L11.5625 22.6328ZM27.7344 2.63281L29.7092 2.94909L30.0802 0.632812H27.7344V2.63281ZM21.7969 2.63281V0.632812H20.2875L19.8735 2.08436L21.7969 2.63281ZM16.0938 22.6328L14.1704 22.0844L13.4437 24.6328H16.0938V22.6328ZM24.5312 22.6328V24.6328H26.2364L26.5061 22.9491L24.5312 22.6328ZM14.8047 0.632812H8.86719V4.63281H14.8047V0.632812ZM6.94386 2.08436L1.24073 22.0844L5.08739 23.1813L10.7905 3.18126L6.94386 2.08436ZM3.16406 24.6328H11.5625V20.6328H3.16406V24.6328ZM13.5367 22.9529L16.7789 2.95285L12.8305 2.31277L9.58827 22.3128L13.5367 22.9529ZM27.7344 0.632812H21.7969V4.63281H27.7344V0.632812ZM19.8735 2.08436L14.1704 22.0844L18.0171 23.1813L23.7202 3.18126L19.8735 2.08436ZM16.0938 24.6328H24.5312V20.6328H16.0938V24.6328ZM26.5061 22.9491L29.7092 2.94909L25.7595 2.31653L22.5564 22.3165L26.5061 22.9491Z" fill="#FBFBFB"/>
                                            </svg>
                                            {data[props.id].title} 
                                            <svg className="double_quote" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1953 22.3672L14.2211 22.0471L13.845 24.3672H16.1953V22.3672ZM22.1328 22.3672V24.3672H23.6422L24.0561 22.9156L22.1328 22.3672ZM27.8359 2.36719L29.7593 2.91564L30.486 0.367188H27.8359V2.36719ZM19.4375 2.36719V0.367188H17.7356L17.4633 2.04715L19.4375 2.36719ZM3.26562 22.3672L1.29079 22.0509L0.919825 24.3672H3.26562V22.3672ZM9.20312 22.3672V24.3672H10.7125L11.1265 22.9156L9.20312 22.3672ZM14.9062 2.36719L16.8296 2.91564L17.5563 0.367188H14.9062V2.36719ZM6.46875 2.36719V0.367188H4.76357L4.49392 2.05091L6.46875 2.36719ZM16.1953 24.3672H22.1328V20.3672H16.1953V24.3672ZM24.0561 22.9156L29.7593 2.91564L25.9126 1.81874L20.2095 21.8187L24.0561 22.9156ZM27.8359 0.367188H19.4375V4.36719H27.8359V0.367188ZM17.4633 2.04715L14.2211 22.0471L18.1695 22.6872L21.4117 2.68723L17.4633 2.04715ZM3.26562 24.3672H9.20312V20.3672H3.26562V24.3672ZM11.1265 22.9156L16.8296 2.91564L12.9829 1.81874L7.27979 21.8187L11.1265 22.9156ZM14.9062 0.367188H6.46875V4.36719H14.9062V0.367188ZM4.49392 2.05091L1.29079 22.0509L5.24046 22.6835L8.44358 2.68347L4.49392 2.05091Z" fill="#FBFBFB"/>
                                            </svg>

                                        </div>
                                        <div className="text-center mt-2">
                                            By {data[props.id].author}
                                        </div>
                                        <div className="text-center date_div mt-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <rect width="20" height="20" fill="url(#pattern0)"/>
                                            <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0" transform="scale(0.0104167)"/>
                                            </pattern>
                                            <image id="image0" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACL0lEQVR4nO3dO24TURhH8XORqXisIWWQYBk8C7IJoKJnDUQIibSwCSh4LQMaqHgsgUCFpaGwC5BIovt5nH/sOb82+saTObpje5x4QJIkSdLUtHU/wDAMw7E70Nra9+E46f07t86N62QGCDNAmAHCDBBmgDADhK38GncYhivAfeAGsANcWHWbZ9wv4AvwHnjeWvu0ysbKAYZhOA/sAw+B2So7scHmwAHwqLU2r2ygFGB58F8BtyrzW+gNcLcSofocsI8H/2+3gceVwe4VsDznf2C6p52jzIGrrbXPPUOVFfAAD/7/zFi8GOlSCXC9MDMVN3sHKqegQ+Bi79xEHLbWLvcMVAKc6ev76zb27+874TADhBkgzABhBggzQJgBwka/pHDS62T9yxUQZoAwA4QZIMwAYQYIM0DY6O8Dpv55QC9XQJgBwgwQZoAwA4QZIMwAYQYIM0CYAcIMELbxf2Y+9rWZ076W5QoIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgzABhBggzQJgBwjb+M+FN/38EV0CYAcIMEGaAMAOEGSDMAGGV9wGHwKWjfjjx7wv60TtQWQHfCzNT8a13oBLgXWFmKt72DlS+ungX+MgWXMYY2W/g2tq/vn55z5SD3rkJeNZ78KF+C5MZ8BK4U5nfQq+BvVO7hcnygfaApyzuHDFVc+AJxYMP49zGahe4x+LmBTts/70FfgJfWTzhvqicdiRJkiRN2x+UNmVOBV2d7QAAAABJRU5ErkJggg=="/>
                                            </defs>
                                        </svg>

                                         {data[props.id].Timestamp}
                                        </div>
                                    </div>
                                </div>   
                                <div className="container text-justify blog_body1 p-md-5" style={{fontWeight:"100"}} >
                                    <div className="pl-sm-3 pr-sm-3">
                                        {data[props.id].description}
                                    </div>
                                </div>
                                {/* Share with  */}
                                <div className="text-center text-white col-12  col-md-11 pt-5 pt-md-2">
                                    <h5>Share it with all your Network</h5>
                                    <span>
                                        <Twitter_logo /> <span>&nbsp;&nbsp;</span>
                                        <Linkedin_logo />
                                    </span>
                                </div>

                                <div className="blog_controler pl-2 pr-2 pl-sm-5 pr-sm-5 pt-5 pb-5">
                                    {props.id>=1 &&<div style={{position:"relative"}}> <Link to={`/app/${parseInt(props.id) - 1}`} className="left_arrow">
                                        <svg width="138" height="58" viewBox="0 0 138 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.1036 55L3.00002 29L35.1036 3" stroke="#0090FF" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M48.783 37.48H50.8924V31.4448H54.8065C57.9822 31.4448 60.2322 29.2065 60.2322 25.9956V25.9722C60.2322 22.7612 57.9822 20.5698 54.8065 20.5698H48.783V37.48ZM54.2674 22.4448C56.6815 22.4448 58.076 23.769 58.076 25.9956V26.019C58.076 28.2456 56.6815 29.5698 54.2674 29.5698H50.8924V22.4448H54.2674ZM62.8216 37.48H64.8607V29.8628C64.8607 28.1401 65.8919 27.0034 67.474 27.0034C67.9661 27.0034 68.3997 27.062 68.5638 27.1206V25.1401C68.3997 25.1167 68.0951 25.0581 67.7435 25.0581C66.3138 25.0581 65.1888 25.9136 64.7904 27.2612H64.7435V25.2925H62.8216V37.48ZM75.1376 37.7144C77.7977 37.7144 79.7899 36.1206 80.1883 34.105L80.2118 33.9878H78.2079L78.1727 34.0933C77.8211 35.1362 76.7313 35.9097 75.1844 35.9097C73.0165 35.9097 71.6336 34.4448 71.5868 31.937H80.3641V31.187C80.3641 27.5308 78.3368 25.0581 75.0086 25.0581C71.6805 25.0581 69.5243 27.6479 69.5243 31.4214V31.4331C69.5243 35.2651 71.6336 37.7144 75.1376 37.7144ZM74.9969 26.8628C76.7782 26.8628 78.0907 27.9761 78.2899 30.3433H71.6219C71.8446 28.0698 73.2274 26.8628 74.9969 26.8628ZM85.8715 37.48H87.9574L92.434 25.2925H90.3129L86.9379 35.312H86.891L83.5277 25.2925H81.3832L85.8715 37.48ZM95.6679 23.23C96.3827 23.23 96.9452 22.6558 96.9452 21.9526C96.9452 21.2378 96.3827 20.6753 95.6679 20.6753C94.9647 20.6753 94.3905 21.2378 94.3905 21.9526C94.3905 22.6558 94.9647 23.23 95.6679 23.23ZM94.6483 37.48H96.6874V25.2925H94.6483V37.48ZM104.996 37.7144C108.359 37.7144 110.632 35.2769 110.632 31.3862V31.3628C110.632 27.4722 108.347 25.0581 104.984 25.0581C101.621 25.0581 99.3471 27.4839 99.3471 31.3628V31.3862C99.3471 35.2651 101.609 37.7144 104.996 37.7144ZM105.007 35.9097C102.851 35.9097 101.433 34.2573 101.433 31.3862V31.3628C101.433 28.5151 102.863 26.8628 104.984 26.8628C107.14 26.8628 108.546 28.5034 108.546 31.3628V31.3862C108.546 34.2456 107.152 35.9097 105.007 35.9097ZM117.335 37.7144C119.186 37.7144 120.429 36.8823 121.085 35.7456H121.132V37.48H123.171V25.2925H121.132V32.4644C121.132 34.5386 119.878 35.9097 117.956 35.9097C116.081 35.9097 115.155 34.8198 115.155 32.8394V25.2925H113.116V33.2026C113.116 35.98 114.663 37.7144 117.335 37.7144ZM130.635 37.7144C133.354 37.7144 135.37 36.2144 135.37 34.0815V34.0698C135.37 32.3354 134.479 31.3628 132.018 30.7651L130.084 30.2964C128.737 29.9683 128.186 29.394 128.186 28.562V28.5503C128.186 27.4722 129.1 26.7573 130.577 26.7573C132.088 26.7573 132.991 27.5425 133.155 28.7261L133.166 28.8081H135.112L135.1 28.6558C134.948 26.6167 133.248 25.0581 130.577 25.0581C127.94 25.0581 126.1 26.5464 126.1 28.644V28.6558C126.1 30.4136 127.213 31.48 129.51 32.0308L131.444 32.4995C132.827 32.8394 133.284 33.3315 133.284 34.2104V34.2222C133.284 35.3237 132.299 36.0151 130.647 36.0151C128.983 36.0151 128.081 35.3003 127.834 34.0815L127.811 33.9644H125.772L125.784 34.0698C126.03 36.2495 127.764 37.7144 130.635 37.7144Z" fill="#0090FF"/>
                                        </svg>

                                    </Link> </div> }
                                    {props.id<data.length-1 &&<div className='arrow_box right_arrow_box' style={{position:"relative"}}> <Link to={`/app/${parseInt(props.id) + 1}`}  className="right_arrow">
                                        <svg width="97" height="58" viewBox="0 0 97 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M61.8965 55L94 29L61.8965 3" className="stroke_hover" stroke="#0090FF" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.33972 37.48H4.42566V24.1323H4.48425L13.7889 37.48H15.8397V20.5698H13.7538V33.9175H13.6952L4.3905 20.5698H2.33972V37.48ZM24.3002 37.7144C26.9603 37.7144 28.9525 36.1206 29.351 34.105L29.3744 33.9878H27.3705L27.3353 34.0933C26.9838 35.1362 25.8939 35.9097 24.3471 35.9097C22.1791 35.9097 20.7963 34.4448 20.7494 31.937H29.5268V31.187C29.5268 27.5308 27.4994 25.0581 24.1713 25.0581C20.8432 25.0581 18.6869 27.6479 18.6869 31.4214V31.4331C18.6869 35.2651 20.7963 37.7144 24.3002 37.7144ZM24.1596 26.8628C25.9408 26.8628 27.2533 27.9761 27.4525 30.3433H20.7846C21.0072 28.0698 22.39 26.8628 24.1596 26.8628ZM30.8857 37.48H33.1474L36.0888 32.8394H36.1357L39.0536 37.48H41.3153L37.2607 31.3042L41.3739 25.2925H39.1005L36.206 29.8628H36.1591L33.2294 25.2925H30.956L35.0341 31.3862L30.8857 37.48ZM47.5258 37.7144C47.9243 37.7144 48.3578 37.6675 48.6157 37.6323V35.98C48.4399 35.9917 48.2055 36.0269 47.9594 36.0269C46.8696 36.0269 46.2953 35.6636 46.2953 34.3628V26.98H48.6157V25.2925H46.2953V21.9995H44.186V25.2925H42.4047V26.98H44.186V34.3745C44.186 36.7065 45.2875 37.7144 47.5258 37.7144Z" className="arrow_color"/>
                                        </svg>

                                    </Link> </div> }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default  Blog;