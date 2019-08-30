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