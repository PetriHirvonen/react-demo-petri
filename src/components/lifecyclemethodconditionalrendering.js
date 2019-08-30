import React from 'react';

// https://www.youtube.com/watch?v=DLX62G4lc44&feature=youtu.be
// Ajassa 2:50:00 --> 3:00:00 hyvät kuvaukset kaikista lifecycle metodeista

function lifecyclemethodconditionalrendering(props) {
    console.log("Loading?" + props.isLoading);
    
    if(props.isLoading === true) {
        return (
            <h6>Loading...</h6>
        )
    }
    else {
        return (
            <h6>Here is your data load! </h6>    
        )
    }

}


export default lifecyclemethodconditionalrendering

