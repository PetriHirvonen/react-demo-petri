import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages:
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/404";
import Default from './pages/404_not_found';
import Main from "./pages/main";
import UsersPage from "./pages/users";
// import Checkboxes from './components/checkboxes';
import Forms from './pages/forms';
import Fetchstarwars from './pages/fetchstarwars';
import Meme from './pages/meme';
import Rengaslaskuri from './pages/rengaslaskuri';
import Rengaslaskurialkup from './pages/rengaslaskurialkup';
import Contact from './pages/contact';
import MapOL from './pages/mapOL';
import MapMB from './pages/mapMB';
import MapMB2 from './pages/mapMB2';
import MapMB3 from './pages/mapMB3';
import MapMB4 from './pages/mapMB4';
import MapMB5 from './pages/mapMB5';
import MapMBOttawaSkateParks from './pages/mapMBOttawaSkateParks';
import MapMBSaloFood from './pages/mapMBSaloFood';
import MapLeaflet1 from './pages/mapLeaflet1';
import MapLeaflet2 from './pages/mapLeaflet2';
import MapLeaflet3 from './pages/mapLeaflet3';
import MapLeaflet4 from './pages/mapLeaflet4';
import MapLeaflet5 from './pages/mapLeaflet5';
import MapLeaflet7 from './pages/mapLeaflet7';
import Store from './pages/store';
import Storecart from './pages/storecart';
import Storedetails from './pages/storedetails';
import About from './pages/about';




class IndexOmaAppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Route exact path="/users" component={UsersPage} />
                    {/* <Route exact path="/checkboxes" component={Checkboxes} /> */}
                    <Route exact path="/forms" component={Forms} />
                    <Route exact path="/fetchstarwars" component={Fetchstarwars} />
                    <Route exact path="/meme" component={Meme} />
                    <Route exact path="/rengaslaskuri" component={Rengaslaskuri} />
                    <Route exact path="/rengaslaskurialkup" component={Rengaslaskurialkup} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/mapOL" component={MapOL} />
                    <Route exact path="/mapMB" component={MapMB} />
                    <Route exact path="/mapMB2" component={MapMB2} />
                    <Route exact path="/mapMB3" component={MapMB3} />
                    <Route exact path="/mapMB4" component={MapMB4} />
                    <Route exact path="/mapMB5" component={MapMB5} />
                    <Route exact path="/mapMBOttawaSkateParks" component={MapMBOttawaSkateParks} />
                    <Route exact path="/mapMBSaloFood" component={MapMBSaloFood} />
                    <Route exact path="/mapLeaflet1" component={MapLeaflet1} />
                    <Route exact path="/mapLeaflet2" component={MapLeaflet2} />
                    <Route exact path="/mapLeaflet3" component={MapLeaflet3} />
                    <Route exact path="/mapLeaflet4" component={MapLeaflet4} />
                    <Route exact path="/mapLeaflet5" component={MapLeaflet5} />
                    <Route exact path="/mapLeaflet7" component={MapLeaflet7} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/store" component={Store} /> 
                    <Route exact path="/storecart" component={Storecart} /> 
                    <Route exact path="/storedetails" component={Storedetails} />
                    <Route component={Default} />
                    {/* <Redirect to="/404" /> */}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default IndexOmaAppRouter;


// Polku: index.js <- indexOma.js <- indexOmaAppRouter.js