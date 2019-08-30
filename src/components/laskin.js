import React, { Component } from 'react';

    
class Laskin extends Component {
    
    constructor() {
        super();
        this.state = {text: '.'};
        this.textInput = null;
        this.setTextInputRef = element => {this.textInput = element;};
    }

    handleChange() {
        console.log('Antamasi  luku tai luvut muuttumassa...')
    }

    handleClick() {    
        var a = parseInt(document.querySelector("#arvo1").value);
        var b = parseInt(document.querySelector("#arvo2").value);
        var op = document.querySelector("#operaattori").value;
        
        var kalkuloi;

        if (op === "add") {
            kalkuloi = a + b;
        } else if  (op === "min") {
            kalkuloi = a - b;
        } else if  (op === "div") {
            kalkuloi = a / b;
        } else if  (op === "mul") {
            kalkuloi = a * b;
        }
        this.setState ({ tulos: kalkuloi})
        console.log('1. lukusi: ' + a);
        console.log('2. lukusi: ' + b);
        console.log('Tuloksesi: ' + kalkuloi);
    }

    render() {
        let c = 88;
        let d = 11;
        let sum = c + d;
        console.log('Varmistuslukusi: ' + sum);
        return (
            <div className="laskincss">
                <div>Tämä on superlaskin. </div>
                    <div>
                        Luku 1: <input  ref={this.setTextInputRef} type="text" id="arvo1" onChange={ (e) => { this.handleChange(); } } ></input>
                        Luku 2: <input  ref={this.setTextInputRef} type="text" id="arvo2" onChange={ (e) => { this.handleChange(); } } ></input>
                        Toimenpide: 
                            <select id="operaattori">
                                <option value="add">Plussaa</option>
                                <option value="min">Miinusta</option>
                                <option value="div">Jaa</option>
                                <option value="mul">Kerro</option>
                            </select>
                            <button onClick={ (e) => { this.handleClick(); } }>Laske    </button> 
                            <div>Tulos on: {this.state.tulos}. </div>
                    </div>
            </div>
        );
    }
}
     
export default Laskin;

