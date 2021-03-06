import React from 'react';
import ReactGA from 'react-ga';


const useGAEventsTracker = () => {
    ReactGA.initialize('G-3J038KE39V')
    const trackEvent =({action='action', label ='label'})=>{
        ReactGA.event({category, action ,label})
    }
    return trackEvent
}

export default useGAEventsTracker;
