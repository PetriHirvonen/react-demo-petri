import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2';
import MemeApp from '../components/memeApp';
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
//import Spacekomponentti from '../components/spacekomponentti';
//import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';

class Meme extends Component {
    //Refresh nappi: 
    refreshPage() {
        console.log("Page refeshed.");
        //window.location.reload();
        window.location = "/meme";  
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
                
                <div>
                    <div className="IndexOma">
                        <Link to="/home"> Go to Home </Link>
                        <br />
                        <br />
                        Tämä on meemigeneraattori. Kirjoita Yläteksti, Alateksti, ja lopuksi hae random kuva "Gener8" -napilla tietokannasta. Enjoy. 
                        <br />
                        <MemeApp /> 
                        <Spacekomponentti />
                        <Spacekomponentti2 />
                        <br />
                        <Link to="/home"> Go to Home </Link>
                        <br />
                        meme.jsx file
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

export default Meme;


