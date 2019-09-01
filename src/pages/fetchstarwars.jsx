import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2';
import FetchdataapiApp from '../components/fetchdataapiApp';
import Lifecyclemethod1 from '../components/lifecyclemethods1';
import Lifecyclemethod2 from '../components/lifecyclemethods2';
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
//import Spacekomponentti from '../components/spacekomponentti';
//import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';


class Fetchstarwars extends Component {
    //Refresh nappi: 
    refreshPage() {
        console.log("Page refeshed.");
        //window.location.reload();
        window.location = "/fetchstarwars";    
    } 
    refreshPagehoverlog() {
        console.log("Page reload button hovered.");
    } 
        
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <Header />
                    <Kellotervehdys />
                    <Spacekomponentti /> 
                </div>

                <div className="IndexOma">
                    <Link to="/home"> Go to Home </Link>
                    <br />
                    <br />
                    <Lifecyclemethod1 />
                    <FetchdataapiApp />
                    <Spacekomponentti />
                    <Spacekomponentti2 />
                    <Spacekomponentti2 />
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />
                    fetchstarwars.jsx
                    <br />
                </div>
                <div className="refreshnappikorkeusvasemmallacss">
                    <Lifecyclemethod2 />
                </div>
                <div className="refreshnappicss">
                    < button onMouseOver={this.refreshPagehoverlog} onClick = {this.refreshPage} > REFRESH THIS PAGE </button>
                </div>

                <div>
                    <Spacekomponentti2 />  
                    <Footer />
                </div>

            </div>
        );
    }
}

export default Fetchstarwars;


