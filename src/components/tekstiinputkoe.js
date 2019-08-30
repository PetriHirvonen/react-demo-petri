import React, { Component } from 'react';

    
class Tekstiinputkoe extends Component {
      
    constructor() {
        super();
        this.state = { text: ' .'};
        // Seuraavila kahdella rivillä ei näytä olevan merkitystä onko mukana vai ei!?
        // this.handleChange = this.handleChange.bind(this); 
        // this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange() {
        let kirjoitus = this.refs.textBoxi.value;
        this.setState ({ text1: kirjoitus });
        console.log('Antamasi nimi muuttuu...' + kirjoitus)
    }

    handleClick () {
        let kirjoitettu = this.refs.textBoxi.value;
        this.setState ({ text2: kirjoitettu });
        console.log('Submitoimasi nimesi: ' + kirjoitettu);
        alert('Submitoimasi nimesi: ' + kirjoitettu);
    }
    
    render() {
        return (
            <div>
                <span style={{color: "white", fontWeight:"bold", backgroundColor: "black", fontSize:"20px"}}>Kirjoita nimesi:  </span>
                <input ref="textBoxi" type="text" onChange={ (e) => { this.handleChange(); } } />
                <button onClick={ (e) => { this.handleClick(); } }>Submitoi alertilla</button>
                <br> 
                </br>
                Parhaillaan kirjoittamasi teksti: {this.state.text1}
                <br> 
                </br>
                Submitoimasi nimesi: { this.state.text2 }
            </div>
        );
      }
    }
 
   
export default Tekstiinputkoe;
