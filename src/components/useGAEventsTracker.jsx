import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('G-3J038KE39V')
const useGAEventsTracker = (category = 'Event Category') => {
    const trackEvent =({action='action', label ='label'})=>{
        ReactGA.event(
            category, action ,label
        )
    }
    return trackEvent
}

export default useGAEventsTracker;
