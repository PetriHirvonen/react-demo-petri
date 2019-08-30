// // import React, { Component } from 'react'
import React from 'react';
import MemeGenerator from "./memeGenerator"
import MemeHeader from "./memeHeader"

function memeApp () {
    return (
        <div className="productsAppboxcss">
            <MemeHeader />
            <MemeGenerator />
        </div>
    )
}
     
export default memeApp;


//HUOM: flow menee näin: 
// "Dumb Header UI" ***JA*** "Smart Generator" 
//    -> App.jsx
//           ->  indexOma.js 
