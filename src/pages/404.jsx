import React from 'react';
import { Link } from "react-router-dom";
//Yleiset sivuasetukset, 4kpl importteja:
import Header from '../components/header';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';


const NotFoundPage = () => {
    return (
        <div className="IndexOma">
            <Header />
            <Spacekomponentti />  
                <div>
                    <h2>404 Not Found!</h2> 
                    <br />
                    <Link to="/home"> Go Back to Home </Link>
                    <br />     
                </div> 
            <Spacekomponentti2 />  
            <Footer />
         </div>
        
    );
}


export default NotFoundPage;
