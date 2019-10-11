import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MapLeafletComp3 from '../components/mapLeafletComp3';
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';

class MapLeaflet3 extends Component {
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <Header />
                    <Kellotervehdys />
                    <Spacekomponentti /> 
                </div>
                
                <div>
                    <div className="IndexOma">
                        <Link to="/home"> Go to Home </Link>
                        <br />
                        <br />
                        Tämä on mapLeaflet3.jsx (Leaflet library, Mapbox Map). Enjoy. 
                        <br />
                        <br />
                        <MapLeafletComp3 /> 
                        <Spacekomponentti />
                        
                        Kaikki karttademot: 
                        <li><Link to="/mapMBOttawaSkateParks"> Ottawa Skateparks (Leaflet core, Mapbox Map) </Link></li>
                        <li><Link to="/mapMBSaloFood"> Salo Food map (Leaflet core, Mapbox Map) </Link></li>
                        <li><Link to="/mapMB"> Southern Finland, Sat Map (Leaflet core, Mapbox Map#1, smaller view window) </Link></li>
                        <li><Link to="/mapMB2"> Southern Finland, Sat Map (Leaflet core, Mapbox Map#2) </Link></li>
                        <li><Link to="/mapMB3"> Southern Finland, Sat Map (Leaflet core, Mapbox Map#3, HEATMAP) </Link></li>
                        <li><Link to="/mapLeaflet1"> Southern Finland, Sat Map (Leaflet core/library, Leaflet Map#1) </Link></li>
                        <li><Link to="/mapLeaflet2"> Southern Finland, Sat Map  (Leaflet core/library, Leaflet Map#2) </Link></li>
                        <li><Link to="/mapLeaflet3"> Salo Map (Leaflet core/library, Leaflet Map#3, Open Street Maps) (Tämä sivu) </Link></li>
                        <li><Link to="/mapOL"> Open Layers basic example (Open Layers Map) </Link></li>
                                                
                        <Spacekomponentti2 />
                        <br />
                        <Link to="/home"> Go to Home </Link>
                        <br />
                        
                        <br />
                    </div>
                    <div className="refreshnappicss">
                        < button onMouseOver={this.refreshPagehoverlog} onClick = {this.refreshPage} > REFRESH THIS PAGE </button>
                    </div>
                </div>

                <div>
                    <Spacekomponentti2 />  
                    <Footer />
                </div>
            </div>
        );
    }
}

export default MapLeaflet3;
