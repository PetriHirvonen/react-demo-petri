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
//AmplifyCognito-jutut näkyville etusivulle erikseen:
//import AppAmplify from '../AppAmplify';

console.log("homepage.jsx loaded.")

const HomePage = () => {
    return (
        <div>
            <div className="IndexOma">
                <Header />
                <Kellotervehdys  />
                {/* <AppAmplify /> */}
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
                <br /> <Link to="/forms"> Go to Forms page with many forms </Link>
                <br /> <Link to="/meme"> Go to Meme Generator </Link>
                <br /> <Link to="/rengaslaskuri"> Go to Rengaslaskuri </Link>
                <br />
                {/* <Link to="/rengaslaskurialkup"> Go to Rengaslaskurialkup (deprecated) </Link>
                <br /> */}
                <Link to="/contact"> Go to Contact info </Link>
                <br /> <Link to="/mapOL"> Go to Map (<font style={{fontWeight: "bold", color: "black"}}> Open Layers Maps </font> ) </Link>
                <br /> <Link to="/mapMB"> Go to Map (Leaflet core, <font style={{fontWeight: "bold", color: "black"}}> Mapbox Maps </font>  nmbr1, smaller view window) </Link>
                <br /> <Link to="/mapMB2">  &nbsp; Go to Map (Leaflet core, Mapbox Maps nmbr2) </Link>
                <br /> <Link to="/mapMB3">  &nbsp; Go to Map (Leaflet core, Mapbox Maps nmbr3, HEATMAP) </Link>
                <br /> <Link to="/mapMB4">  &nbsp; Go to Map (Leaflet core, Mapbox Maps nmbr4, 3D MAP) </Link>
                <br /> <Link to="/mapMB5">  &nbsp; Go to Map (Leaflet core, Mapbox Maps nmbr5, Different map STYLES etc) </Link>
                <br /> <Link to="/mapMBOttawaSkateParks">  &nbsp; Go to Ottawa Skateboard Maps demo page (Leaflet core, Mapbox Maps) </Link>
                <br /> <Link to="/mapMBSaloFood">  &nbsp; Go to Salo Food Scene i.e. key restaurants (Leaflet core, Mapbox Maps) </Link>
                <br /> <Link to="/mapLeaflet1"> Go to Leaflet map demo nmbr1 (Leaflet core/library, <font style={{fontWeight: "bold", color: "black"}}> Leaflet Maps </font> ) </Link>
                <br /> <Link to="/mapLeaflet2">  &nbsp; Go to Leaflet map demo nmbr2 (Leaflet core/library, Leaflet Maps) </Link>
                <br /> <Link to="/mapLeaflet3">   &nbsp; Go to Leaflet map demo nmbr3 (Leaflet core/library, Leaflet Maps) </Link>
                <br /> <Link to="/mapLeaflet5">   &nbsp; Go to Leaflet map demo nmbr5 (Leaflet core/library, Leaflet Maps, Different map STYLES etc) </Link>
                <br /> <Link to="/store"> Go to WEB STORE </Link>
                <br /> <Link to="/awsformpage"> Go to AWS <font style={{fontWeight: "bold", color: "black"}}> EMAIL </font>  SENDING page </Link>
                <br /> <Link to="/awssmsformpage"> Go to AWS <font style={{fontWeight: "bold", color: "black"}}> SMS </font>SENDING page </Link>
                <br /> <Link to="/awsdynamodbEventsPage"> Go to AWS <font style={{fontWeight: "bold", color: "black"}}> Dynamo DB </font> Event List page </Link>
                <br /> <Link to="/awsdynamodbEventAdminPage"> Go to AWS <font style={{fontWeight: "bold", color: "black"}}> Dynamo DB </font> Event Admin page </Link>
                <br /> <Link to="/awsquicksightPage1"> Go to AWS <font style={{fontWeight: "bold", color: "black"}}> QuickSight 1 </font> page </Link>
                <br /> <Link to="/about"> Go to About </Link>
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
