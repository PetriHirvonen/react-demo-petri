import React, { Component } from 'react' ;
import IndexOmaAppRouter from './indexOmaAppRouter';
//import { Link } from "react-router-dom";
//import App from './App';
import './App.css';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
//import Headertila from './components/headertila';
import Kellotervehdys from './components/kellotervehdys';
import Footer from './components/footer.js';
import Spacekomponentti from './components/spacekomponentti';
import Spacekomponentti2 from './components/spacekomponentti2';


class IndexOma extends Component {
    render() {
        return (
            <div>
                <div className="IndexOma">
                    <Header />
                    <Spacekomponentti />
                    <Kellotervehdys />
                    <Spacekomponentti />  
                    <IndexOmaAppRouter />
                    <Spacekomponentti2 />  
                    <Footer />
                </div>
                <div className="refreshnappikorkeusvasemmallafooterinpaallacss">
                    <small>
                        indexOma.js file
                    </small>
                </div>
            </div>
        );
    }
}

    

export default IndexOma;


// HUOM: alunperin Joke-komponentin kysymykset olivat suoraan tässä IndexOma.js filessä (ennen kuin loin jokesApp.js filen ja jokesData.js filen):
//                 <div className="todolistcss">
//                     <Joke question="Eka kysymys, miten on?" punchLine="Eka öö, hmm1." />
//                     <Joke punchLine="Toka öö, hmm2."/>
//                     <Joke question="Koka kysymys, miten on?" punchLine="Eka öö, hmm3."/>
//                     <Joke question="Neka kysymys, miten on?" punchLine="Eka öö, hmm4."/>
//                 </div>