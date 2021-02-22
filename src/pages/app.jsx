import React, { Component } from 'react';
import { Router } from '@reach/router'
import BlogMain from '../components/blog';
import Blog from '../components/OneBlog';
class app extends Component {
    render() {
        return (
            <Router>
                <BlogMain path="/app" exact />
                <Blog path="/app/:id" />
            </Router>
        );
    }
}

export default app;
