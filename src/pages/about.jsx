import React from 'react';
import { Link } from "react-router-dom";
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';

const About = () => {
    return (
        <div className="IndexOma">
            <Header />
            <Kellotervehdys />
            <Spacekomponentti />  
                <div>
                    <h2>This is the master app. Copyright SADE Innovations.</h2> 
                    <br />
                    <a href="http://www.sadeinnovations.com"> Go to SADE Innovations HomePage </a>
                    <br />
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />    
                </div> 
            <Spacekomponentti2 />  
            <Footer />
        </div>
    );
}


export default About;
