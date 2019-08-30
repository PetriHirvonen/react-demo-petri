import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2';
import FormsApp from '../components/formsApp';
import FormsApp2 from '../components/formsApp2';
import Aloitustemplate from '../components/aloitustemplate';
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
//import Spacekomponentti from '../components/spacekomponentti';
//import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';


class Forms extends Component {
    //Refresh nappi: 
    refreshPage() {
        console.log("Page refeshed.");
        window.location.reload();
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
                    <Spacekomponentti />
                    <FormsApp />
                    <Spacekomponentti2 />
                    <FormsApp2 />
                    <Spacekomponentti2 />
                    <Aloitustemplate />
                    <Spacekomponentti />
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />
                </div>
                <div className="refreshnappikorkeusvasemmallafooterinpaallaylempanacss">
                    <small>
                        forms.jsx file
                    </small>
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

export default Forms;


