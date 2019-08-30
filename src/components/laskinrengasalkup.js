import React, { Component } from 'react';

    
class Laskinrengasalkup extends Component {
    
    constructor() {
        super();
        this.state = {
            nykyeturengasleveysmm: "",
            nykyeturengasprofiili: "",
            nykyeturengasvannekokohalkaisijatuumaa: "",
            nykyeturengasvannekokoleveystuumaa: "",
            nykyetuvanneET: "",

            nykytakarengasleveysmm: "",
            nykytakarengasprofiili: "",
            nykytakarengasvannekokohalkaisijatuumaa: "",
            nykytakarengasvannekokoleveystuumaa: "",
            nykytakavanneET: "",
            
            nykyetuvanteenleveysmm: "",
            nykyetuhalkaisijavannepluskumicm: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        // this.setTextInputRef = element => {this.textInput = element;};
    // }

    handleChange() {
        console.log('Antamasi  luku tai luvut muuttumassa...')
    }

    handleSubmit() {    
        const tuuma = 2.54
        var nykyeturengasleveysmm = parseInt(document.querySelector("#nerl").value);
        var nykyeturengasprofiili = parseInt(document.querySelector("#nerp").value);
        var nykyeturengasvannekokohalkaisijatuumaa = parseInt(document.querySelector("#nervkh").value);
        var nykyeturengasvannekokoleveystuumaa = parseInt(document.querySelector("#nervkl").value);
        var nykyeturengasvannekokohalkaisijacm =  nykyeturengasvannekokohalkaisijatuumaa * tuuma;
        var nykyetukumirenkaankorkeuscm = nykyeturengasleveysmm * nykyeturengasprofiili/1000;
        var nykyetuvanteenleveysmm = nykyeturengasvannekokoleveystuumaa  * tuuma * 10;
        var nykyetuhalkaisijavannepluskumicm = nykyeturengasvannekokohalkaisijatuumaa * tuuma + nykyetukumirenkaankorkeuscm * 2;

        console.log('nykyetuvanteenleveystuumaa: ' + nykyeturengasvannekokoleveystuumaa);
        console.log('nykyetuvanteenleveysmm: ' + nykyetuvanteenleveysmm);
        console.log('nykyeturengasvannekokohalkaisijacm : ' + nykyeturengasvannekokohalkaisijacm);
        console.log('nykyetukumirenkaankorkeuscm: ' + nykyetukumirenkaankorkeuscm);
        console.log('nykyetuhalkaisijavannepluskumicm: ' + nykyetuhalkaisijavannepluskumicm);

        this.setState ({nykyeturengasvannekokoleveystuumaa})
        this.setState ({nykyetuvanteenleveysmm})
        this.setState ({nykyeturengasvannekokohalkaisijacm})
        this.setState ({nykyetukumirenkaankorkeuscm})
        this.setState ({nykyeturengasleveysmm})
        this.setState ({nykyeturengasprofiili})
        this.setState ({nykyeturengasvannekokohalkaisijatuumaa})
        this.setState ({nykyetuhalkaisijavannepluskumicm})
    }

    render() {
        
        return (
            <div className="laskincss">
                <div>Tämä on alkuperäinen rengaslaskin. Anna ensin nykyrenkaittesi tiedot, ja sitten uusien renkaiden tiedot. Ja supertietokone laskee eron.  </div>
                <div>Jostain syystä tämä ei toimi jos on samalla sivulla kuin uusi rengaslaskuri....</div>
                <div>Vaan ottaa laskettavat arvot uudesta rengaslaskurista...</div>
                    <br />
                    <div>
                        Nykyeturengasleveys (mm): <input  ref={this.setTextInputRef} type="text" id="nerl" onChange={ (e) => { this.handleChange(); } } ></input>
                        Nykyeturengasprofiili (%): <input  ref={this.setTextInputRef} type="text" id="nerp" onChange={ (e) => { this.handleChange(); } } ></input>
                        Nykyeturengasvannekoko (halkaisija, tuumaa): <input  ref={this.setTextInputRef} type="text" id="nervkh" onChange={ (e) => { this.handleChange(); } } ></input>
                        Nykyeturengasvannekoko (leveys, tuumaa): <input  ref={this.setTextInputRef} type="text" id="nervkl" onChange={ (e) => { this.handleChange(); } } ></input>

                        <button onClick={ (e) => { this.handleSubmit(); } }>Laske    </button> 
                        <br />
                        <br />
                    </div>
                    <div>
                        <div>
                            Nykyetuvanteen leveys: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetuvanteenleveysmm} </font>  mm.
                        </div>
                        <div>
                            Nykyetuvanteen halkaisija: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyeturengasvannekokohalkaisijacm} </font>  cm.
                        </div>
                        <div>
                            Nykyeturenkaan kumin korkeus: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetukumirenkaankorkeuscm} </font>  cm.
                        </div>
                        <div>Nykyeturenkaan (vanne {this.state.nykyeturengasvannekokoleveystuumaa}" +
                             kumi {this.state.nykyeturengasleveysmm}/{this.state.nykyeturengasprofiili}/R{this.state.nykyeturengasvannekokohalkaisijatuumaa})
                             kokonaishalkaisija: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetuhalkaisijavannepluskumicm} </font>  cm.
                        </div>
                    </div>
            </div>
        );
    }
}
     
export default Laskinrengasalkup;

