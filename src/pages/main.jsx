import React, { Component } from 'react' ;
// import IndexOmaAppRouter from './indexOmaAppRouter';
import { Link } from "react-router-dom";
//import App from './App';
import '../App.css';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tekstiinput from '../components/tekstiinput';
import Tekstiinputkoe from '../components/tekstiinputkoe';
import Laskin from '../components/laskin';
import Checkboxes from '../components/checkboxes';
import Counters from '../components/counters';
import TodosApp from '../components/todosApp';
import Surprises from '../components/surprises';
import Koodariorg from '../components/koodariorg';
import Koodari from '../components/koodari';
import Testi from '../components/testi.js';
import Testirender from '../components/testirender.js';
import Testibutton from '../components/testibutton.js';
import Setstate from '../components/setstate.js';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2';
import JokesApp from '../components/jokesApp';
import ProductsApp from '../components/productsApp';
import StateintroApp from '../components/stateintroApp';
import StateintroApp2 from '../components/stateintroApp2';
import StateintroApp3condrendering  from '../components/stateintroApp3condrendering';
import Nappiintro from '../components/nappiintro';
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
//import Spacekomponentti from '../components/spacekomponentti';
//import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';
import MainSimplest from '../components/mainSimplest.js';
import MainSimplest2 from '../components/mainSimplest2.js';
import MainSimplest3taulukko from '../components/mainSimplest3taulukko.js';
import MainSimplest4counter from '../components/mainSimplest4counter.js';
import MainSimplest5osa2 from '../components/mainSimplest5osa2.js';
import MainSimplest5osa2axios from '../components/mainSimplest5osa2axios.js';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <Header />
                    <Kellotervehdys />
                    <Spacekomponentti /> 
                </div>
                
                <div className="IndexOma">
                    Tämä on main.jsx page file. Tältä sivulta löydät kaikenlaista experimentaalista hauskaa.
                    <br />
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />
                    <Tekstiinput />
                    <Tekstiinputkoe />
                    <Laskin />
                    <Checkboxes />
                    <TodosApp />
                    <Spacekomponentti />
                    <JokesApp />
                    <Spacekomponentti2 />
                    <Counters />
                    <Koodariorg />
                    <Koodari />
                    <Surprises />
                    <Setstate />
                    <Testibutton />
                    <ProductsApp />
                    <Spacekomponentti />
                    <StateintroApp />
                    <StateintroApp2 />
                    <StateintroApp3condrendering />
                    <Nappiintro />
                    <Spacekomponentti />
                    <Testi />
                    <Testirender />
                    <br />
                    <MainSimplest />
                    <MainSimplest2 />
                    <MainSimplest3taulukko />
                    <MainSimplest4counter />
                    <MainSimplest5osa2 />
                    <MainSimplest5osa2axios />
                    <br />
                    <Spacekomponentti />
                </div>

                <div>
                <Spacekomponentti2 />  
                <Footer />
                </div>
            </div>
        );
    }
}

    

export default Main;