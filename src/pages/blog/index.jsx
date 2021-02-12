import 'bootstrap/dist/css/bootstrap.css'
import {Router} from '@reach/router'
import Blog from './blog'
import BlogMain from '../../components/blog'
import React from 'react'


 const Blogs = ()=>(
     <div>
         <Router>
             <BlogMain path='/blog' exact />
             <Blog path='/blog/:id' />
             
         </Router>
     </div>
 )
 export default Blogs