import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
//import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from '../components/spacekomponentti';
import App from '../App';
import Navbar from  '../componentsstore/Navbar.js';
import ProductList from  '../componentsstore/ProductList.js';
import Modal from '../componentsstore/Modal.js'

class Store extends Component {
     
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <Navbar />
                    <ProductList />

                    <Spacekomponentti />
                    <Modal />
                    <Spacekomponentti />
                    <App /> 
                    <Spacekomponentti />
                    <Spacekomponentti />
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />
                        <small>store.jsx</small>
                    <br />
                </div>
             </div>
        );
    }


}

export default Store;
