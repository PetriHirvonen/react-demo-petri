import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MapMBComp from '../components/mapMBComp';
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';

class MapMB extends Component {
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
                        Tämä on mapMB.jsx (Mapbox Map, "Satellite Streets" style, with ZoomIn and ZoomOut). Enjoy. 
                        <br />
                        <br />
                        <MapMBComp /> 
                        <Spacekomponentti />
                        
                        Kaikki karttademot: 
                        <li><Link to="/mapMBOttawaSkateParks"> Ottawa Skateparks (Mapbox Map) </Link></li>
                        <li><Link to="/mapMBSaloFood"> Salo Food map (Mapbox Map) </Link></li>
                        <li><Link to="/mapMB"> Southern Finland, Sat Map (Mapbox Map) (Tämä sivu) </Link></li>
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

export default MapMB;
