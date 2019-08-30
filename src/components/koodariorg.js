import React, { Component } from 'react';

    
class Koodariorg extends Component {
    
    constructor() {
        super();
        this.state = { text: ''};
    }

    koodari () {
        let kovakoodattukoodari = "Petri !!";
        console.log("Ohjelmoija on: " + kovakoodattukoodari);
        //alert("Ohjelmoija on: " + kovakoodattukoodari);
        this.setState ({ text: kovakoodattukoodari });
      }


      render() {
        return (        
            <div className="koodaricss">
                <div className="koodariteksticss"> Kovakoodattu org ohjelmoijan nimi on: &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                    {/* <button type="button" onclick="koodari()">Wanna find out?</button> */}
                    <button onClick={ (e) => { this.koodari(); } }>  Wanna find out?  Click right here!!!  </button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ....ja <font color="red">koodari</font> on:  &nbsp;
                    {/* <font color="red"> {this.state.text} </font> */}
                    <span className="blinkingmediumcss"> {this.state.text}  </span>
                </div>
            </div>
        );
      }

}
     
export default Koodariorg;

