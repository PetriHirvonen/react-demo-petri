import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MapOLComp from '../components/mapOLComp';
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';

class MapOL extends Component {
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
                        Tämä on mapOL.jsx (Open Layers Map, basic example, with various zoom levels centered in Salo etc.). Enjoy. 
                        <br />
                        <br />
                        <MapOLComp /> 
                        <Spacekomponentti />

                        Kaikki karttademot: 
                        <li><Link to="/mapMBOttawaSkateParks"> Ottawa Skateparks (Mapbox Map) </Link></li>
                        <li><Link to="/mapMBSaloFood"> Salo Food map (Mapbox Map) </Link></li>
                        <li><Link to="/mapMB"> Southern Finland, Sat Map (Mapbox Map) </Link></li>
                        <li><Link to="/mapOL"> Open Layers basic example (Open Layers Map) (tämä sivu) </Link></li>
                                           
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

export default MapOL;
