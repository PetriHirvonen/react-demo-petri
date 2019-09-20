// https://www.youtube.com/watch?v=hjR-ZveXBpQ
// https://www.youtube.com/watch?v=91F8reC8kvo
// C:\BOOTCAMP\Day9_React\counter-app> npm install react-router-dom

import React from 'react';
import { Link } from "react-router-dom";
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';
   
const HomePage = () => {
    return (
        <div>
            <div className="IndexOma">
                <Header />
                <Kellotervehdys />
                <Spacekomponentti /> 
            </div>
            
            <div>
                <h2>Welcome to Home !</h2>
                <h4>We provide versatile solutions for multi-faceted industrial applications to enhance your 
                    business productivity not only to the next level but way beyond.</h4>
                <p> (...niin ja tämä on siis täysin epävirallinen draft-demo sivusto...) </p>
                <br />
                <p><font style={{fontWeight: "bold", color: "purple"}}>Select a service from below.</font> </p>  
                <Link to="/main"> Go to Main </Link>
                <br />
                <Link to="/users"> Go to User List </Link>
                <br />
                <Link to="/fetchstarwars"> Go to Star Wars Data Fetch </Link>
                <br />
                <Link to="/forms"> Go to Forms page with many forms </Link>
                <br />
                <Link to="/meme"> Go to Meme Generator </Link>
                <br />
                <Link to="/rengaslaskuri"> Go to Rengaslaskuri </Link>
                <br />
                {/* <Link to="/rengaslaskurialkup"> Go to Rengaslaskurialkup (deprecated) </Link>
                <br /> */}
                <Link to="/contact"> Go to Contact info </Link>
                <br />
                <Link to="/mapOL"> Go to Map (Open Layers) </Link>
                <br />
                <Link to="/store"> Go to WEB STORE </Link>
                <br />
                <Link to="/about"> Go to About </Link>
                <br />
                <a href="http://www.sadeinnovations.com"> External linkkiä... </a>
                <br />
                <br />
                <div className="refreshnappikorkeusvasemmallafooterinpaallacss">
                    <small>homepage.jsx</small> 
                </div>

                
            </div> 

            <div>
                <Spacekomponentti2 />  
                <Footer />
            </div>
        </div>

    );
};


export default HomePage;
