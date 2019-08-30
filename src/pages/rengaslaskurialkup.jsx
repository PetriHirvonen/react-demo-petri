import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2';
import Laskinrengasalkup from '../components/laskinrengasalkup';

class Rengaslaskurialkup extends Component {
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
                    <Link to="/home"> Go to Home </Link>
                    <br />
                    This page is deprecated -- do not use.
                    
                    <Spacekomponentti />
                    <Spacekomponentti2 />
                    <Laskinrengasalkup /> 
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />
                    rengaslaskurialkup.jsx file
                    <br />
                </div>
                <div className="refreshnappicss">
                    < button onMouseOver={this.refreshPagehoverlog} onClick = {this.refreshPage} > REFRESH THIS PAGE </button>
                </div>
            </div>
        );
    }
}

export default Rengaslaskurialkup;
