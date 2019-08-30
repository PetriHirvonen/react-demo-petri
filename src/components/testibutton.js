//import React, { useState, Component } from 'react';
import React, { Component } from 'react';

//  export default function OTestibutton({ initialData }) {
//      let [count, setCount] = useState (0);
//      return (
//          <div>
//              {/* <h1>{initialData}</h1> */}
//              ...
//              <br />
//              Oikealla:
//              <button onClick={() => setCount(count + 1)}>{"Juokseva nappinro: "+ count}</button>
//              <button onClick={() => console.log("Nykyluku: "+ count)}> Juokseva nro konsoleen </button>
//              <p>Juokseva numero on: {count}.</p>
//              ...
//              <br />
//          </div>
//      );
//  }
// ***HUOM*** Y.O. ja A.O. koodit toimivat molemmat, ovat vaihtoehtoisia tapoja tehdä sama asia!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 class Testibutton extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }
    setCount (){
        this.setState(prevState=>({count: prevState.count + 1,
        }));
    }

    //vaihtoehtoinen tapa:
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };


    render() {
         return (
             <div>
                 {/* <h1>{initialData}</h1> */}
                 ...
                 <br />
                 Oikealla:
                 <button onClick={() => this.setCount()}>{"Juokseva nappinro: "+ this.state.count}</button>
                 <button onClick={() => console.log("Nykyluku: "+ this.state.count)}> Juokseva nro konsoleen </button>
                 <button onClick={this.handleIncrement} > handleIncrementillä tehty </button>
                 <p>Juokseva numero on: {this.state.count}.</p>
                 ...
                 <br />
             </div>
         );
      }
 }
 export default Testibutton;


