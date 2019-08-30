import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
//import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from '../components/spacekomponentti';
import Navbar from  '../componentsstore/Navbar.js';
import Details from  '../componentsstore/Details.js';
import Modal from '../componentsstore/Modal.js'

class Storedetails extends Component {
     
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <Navbar />
                    <Details />
                    <Spacekomponentti />
                    <Modal />
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />
                    storedetails.jsx file
                    <br />
                </div>
             </div>
        );
    }


}

export default Storedetails;
