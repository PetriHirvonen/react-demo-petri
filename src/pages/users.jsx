import React from 'react';
import { Link } from "react-router-dom";
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';
   
const UsersPage = () => {
    return (
        <div>
            <div className="IndexOma">
                <Header />
                <Kellotervehdys />
                <Spacekomponentti /> 
            </div>
            
            <div>
                <div>
                    <Link to="/home"> Go to Home </Link>
                    <br />
                </div>
                <ul>
                    {["Alex", "John", "XYZ", "TestUser", "SecretUserData"].map((user, idx) => {
                        return <li key={idx}>{user}</li>
                    })}
                </ul>
                <ul>
                    Alexis, Johnis,XYZis, TestUseris, SecretUserDatais
                </ul>
                <ul>
                    <li> Alexisli </li> <li> Johnisli  </li> 
                    <li> XYZisli  </li> <li>TestUserisli  </li> <li> SecretUserDataisli </li>
                </ul>
                <li> Alexisli2 </li> <li> Johnisli2  </li> 
                <li> XYZisli2  </li> <li>TestUserisli2  </li> <li> SecretUserDataisli2 </li>
            </div> 

            <div>
                <br />
                <Link to="/home"> Go to Home </Link>
                <br />
            </div>

            <div>
                <Spacekomponentti2 />  
                <Footer />
            </div>
        </div>
    );
}


export default UsersPage;
