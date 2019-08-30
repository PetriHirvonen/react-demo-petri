import React, { Component } from 'react' ;
import IndexOmaAppRouter from './indexOmaAppRouter';
//import { Link } from "react-router-dom";
//import App from './App';
import './App.css';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spacekomponentti from './components/spacekomponentti';
import Spacekomponentti2 from './components/spacekomponentti2';
import { ProductProvider } from './context';


class IndexOma extends Component {
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <ProductProvider>
                            <Spacekomponentti />  
                            <IndexOmaAppRouter />
                            <Spacekomponentti2 />  
                    </ProductProvider>
                </div>
                
                {/* 
                <div className="refreshnappikorkeusvasemmallafooterinpaallacss">
                    <small>
                        indexOma.js file 
                    </small>
                </div>
                */}

            </div>
        );
    }
}

    

export default IndexOma;

// Polku: index.js <- indexOma.js <- indexOmaAppRouter.js
