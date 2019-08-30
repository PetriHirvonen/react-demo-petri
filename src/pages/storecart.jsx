import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
//import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from '../components/spacekomponentti';
import Navbar from  '../componentsstore/Navbar.js';
import Cart from  '../componentsstore/componentsstorecart';

class Storecart extends Component {
     
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <Navbar />
                    <Cart />
                    <Spacekomponentti />

                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />
                    storecart.jsx file
                    <br />
                </div>
             </div>
        );
    }


}

export default Storecart;
