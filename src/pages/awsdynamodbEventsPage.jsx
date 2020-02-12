import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AwsDynamoDbEventsComp from '../components/awsDynamoDbEventsComp';

//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';

//AmplifyCognito-jutut:
import AppAmplify from '../AppAmplify';

class AwsDynamoDbEventsPage extends Component {
    //Refresh nappi: 
    refreshPage() {
        console.log("Page refeshed.");
        window.location.replace("/awsdynamodbEventsPage");  
        
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
                    <AppAmplify />
                    <Spacekomponentti /> 
                </div>
                
                <div>
                    <div className="IndexOma">
                        <Link to="/home"> Go to Home </Link>
                        <br />
                        <AwsDynamoDbEventsComp />
                        <Spacekomponentti />
                        <Spacekomponentti2 />
                        <br />
                        <Link to="/home"> Go to Home </Link>
                        <br />
                            <small>awsdynamodbEventsPage.jsx</small>
                        <br />
                    </div>
                    <div className="refreshnappicss">
                        < button onMouseOver={this.refreshPagehoverlog} onClick = {this.refreshPage} > NOLLAA SIVU </button>
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

export default AwsDynamoDbEventsPage;
