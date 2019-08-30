import React, { Component } from 'react';
import { Link } from "react-router-dom";
//Yleiset sivuasetukset, 5kpl importteja:
import Header from '../components/header';
import Kellotervehdys from '../components/kellotervehdys';
import Spacekomponentti from '../components/spacekomponentti';
import Spacekomponentti2 from '../components/spacekomponentti2'
import Footer from '../components/footer.js';
   

class Contact extends Component {
    
    constructor() {
        super();
        this.state = {
            nimi: '  ',
        }
        this.onClickbs = this.onClickbs.bind(this)
        //a.o. ei tarvita koska alla käytetty => arrow funktiota:
        //this.onClickoc = this.onClickoc.bind(this)
    }
    
    onClickbs (e) { 
        e.preventDefault();
        const nimi = `Petri`
        this.setState({nimi});
            console.log(`Basic technical support on:`)
            console.log({nimi});
            console.log(`Basic technical support on:` + nimi);
        
    }
    // y.o. on sama kuin:
    // onClickbs = (e) => { 
    //     e.preventDefault();
    //     this.setState({ nimi: `Petri.` });
    // }
      
    onClickoc = (e) => { 
        e.preventDefault();
        this.setState(() => ({ nimi: `Petri !!!!!!!`}),() => {
          console.log(`Overly complicated technical support todellakin on: ${this.state.nimi}`);
        });      
    }

    render() {
        return( 
            <div className="IndexOma">
                <Header />
                <Kellotervehdys />
                <Spacekomponentti />
                <h1> You are now en el cogollo del meollo, y en el meollo del cogollo!</h1>
                <h2> Please contact us!  Instructions below. </h2>  
                <br />    
                <Spacekomponentti2 />  
                <div>
                    <div>  To select the needed liason officer, click for <font color="red">Your Personal </font> contact person below.  
                        &nbsp; &nbsp; 
                        <br /> <br /> 
                    </div>
                    <div>    
                        <button onClick={this.onClickbs}>Basic support -- click here. </button> 
                        &nbsp;
                        <button onClick={this.onClickoc}>Overly complicated technical matters -- click here. </button>
                    </div>
                    <div>
                        <br /> 
                        <font color="red">Your Personal </font> contact person is: 
                            <span className="blinkingmediumcss">
                                ---> {this.state.nimi} 
                            </span>
                    </div> 
                </div>
                <div>
                    <br />
                    <Link to="/store"> Go to Store </Link>
                    <br />    
                    <br />
                    <Link to="/home"> Go to Home </Link>
                    <br />    
                </div> 


                <Footer />    
          </div>
        );
    }
}
   
export default Contact;


// const Contact = () => {
//     return (
//         <div className="IndexOma">
//             <Header />
//             <Kellotervehdys />
//             <Spacekomponentti />  
//                 <div>
//                     <h2>Please contact the WebMaster</h2>  
//                     <br />
//                     <Link to="/store"> Go to Store </Link>
//                     <br />    
//                     <br />
//                     <Link to="/home"> Go to Home </Link>
//                     <br />    
//                 </div> 
//             <Spacekomponentti2 />  
//             <Footer />
//         </div>
         
//     );
// }
// export default Contact;
