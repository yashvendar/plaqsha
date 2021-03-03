import React, { Component } from 'react';
import Layout from '../components/layout';
import { InlineWidget } from "react-calendly"
import SEO from '../components/seo'
class bookademo extends Component {
    render() {
        return (
            <Layout >
                <SEO title={`Book a Demo`} />
                    <div className="modal_copy">
                        <InlineWidget url= 'https://calendly.com/plaqsha/30min?background_color=012e67&text_color=ffffff&primary_color=9384f8'
                
                        />
                    </div>
            </Layout>
        );
    }
}

export default bookademo;
