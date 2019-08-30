import React, { Component } from 'react';

const TUUMA = 2.54;
    
class Laskinrengas extends Component {
    
    constructor() {
        super();
        this.state = {
            nykyeturengasleveysmm: "",
            nykyeturengasprofiili: "",
            nykyeturengasvannekokohalkaisijatuumaa: "",
            nykyeturengasvannekokoleveystuumaa: "",
            nykyetuvanneET: "",
            nykyeturenkaanleveyscm: "0",
            nykyetuvanteenleveyscm: "0",
            nykyetukuminulkonemaperpuolicm: "0",
            nykyetuvanteenhalkaisijacm: "0",
            nykyetukumirenkaankorkeuscm: "0",
            nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm: "0",
            nykyetuvanteenET: "0",

            uusieturengasleveysmm: "",
            uusieturengasprofiili: "",
            uusieturengasvannekokohalkaisijatuumaa: "",
            uusieturengasvannekokoleveystuumaa: "",
            uusietuvanneET: "",
            uusieturenkaanleveyscm: "0",
            uusietuvanteenleveyscm: "0",
            uusietukuminulkonemaperpuolicm: "0",
            uusietuvanteenhalkaisijacm: "0",
            uusietukumirenkaankorkeuscm: "0",
            uusieturenkaanvanteenpluskuminkokonaishalkaisijacm: "0",
            uusietuvanteenET: "0",
                     
            eroeturenkaanleveyscm: "0",
            eroeturenkaanvanteenpluskuminkokonaishalkaisijacm: "0",
            eroeturenkaanvanteenpluskuminkokonaishalkaisijaprosentti: "0",
            muutosvanteenmuutosulospaincm: "0",
            muutosvanteenmuutossisaanpaincm:  "0",
            muutosuudenkuminulkoreunaulospainvsvanhakumicm: "0",
            muutosuudenkuminsisareunasisaanpainvsvanhakumicm: "0",
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        // this.setTextInputRef = element => {this.textInput = element;};
    // }

    handleChange(id, event) {
        let key = null;
        switch(id) {
            case 'nerl':     key = "nykyeturengasleveysmm"; break;
            case 'nerp':     key = "nykyeturengasprofiili"; break;
            case 'nervkht':  key = "nykyeturengasvannekokohalkaisijatuumaa"; break;
            case 'nervklt':  key = "nykyeturengasvannekokoleveystuumaa"; break;
            case 'nervET':   key = "nykyetuvanneET"; break;

            case 'uerl':     key = "uusieturengasleveysmm"; break;
            case 'uerp':     key = "uusieturengasprofiili"; break;
            case 'uervkht':  key = "uusieturengasvannekokohalkaisijatuumaa"; break;
            case 'uervklt':  key = "uusieturengasvannekokoleveystuumaa"; break;
            case 'uervET':   key = "uusietuvanneET"; break;

            default:
                console.log("Wrong id"); break;     
            }
        if(key) {
            this.setState({
                [key]: event.target.value,
            });
        }
        console.log('Antamasi  luku tai luvut muuttumassa...')
    }

    
    getVanneHalkaisijaCm(vanneHalkaisijaTuumaa) {
        return vanneHalkaisijaTuumaa * TUUMA;
    }

    handleSubmit() {    
        // var nykyeturengasleveysmm = parseInt(document.querySelector("#nerl").value);
        // var nykyeturengasprofiili = parseInt(document.querySelector("#nerp").value);
        // var nykyeturengasvannekokohalkaisijatuumaa = parseInt(document.querySelector("#nervkh").value);
        // var nykyeturengasvannekokoleveystuumaa = parseInt(document.querySelector("#nervkl").value);
        
        var nykyeturenkaanleveyscm = this.state.nykyeturengasleveysmm * 0.1;
        var nykyetuvanteenleveyscm = this.state.nykyeturengasvannekokoleveystuumaa  * TUUMA * 1;
        var nykyetukuminulkonematcm = nykyeturenkaanleveyscm - nykyetuvanteenleveyscm;
        var nykyetukuminulkonemaperpuolicm = parseFloat(nykyetukuminulkonematcm.toFixed(2)) / 2;
        var nykyetuvanteenhalkaisijacm =  this.getVanneHalkaisijaCm(this.state.nykyeturengasvannekokohalkaisijatuumaa); 
        var nykyetukumirenkaankorkeuscmpyoristamaton = this.state.nykyeturengasleveysmm * this.state.nykyeturengasprofiili/1000;
        var nykyetukumirenkaankorkeuscm = parseFloat(nykyetukumirenkaankorkeuscmpyoristamaton.toFixed(2));
        var nykyeturenkaanvanteenpluskuminkokonaishalkaisijacmpyoristamaton = this.state.nykyeturengasvannekokohalkaisijatuumaa * TUUMA + nykyetukumirenkaankorkeuscm * 2;
        var nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm = parseFloat(nykyeturenkaanvanteenpluskuminkokonaishalkaisijacmpyoristamaton.toFixed(2));
        var nykyetuvanteenET = this.state.nykyetuvanneET * 1;
        console.log('nykyeturenkaanleveysmmmm: ' + nykyeturenkaanleveyscm);
        console.log('nykyetuvanteenleveystuumaa: ' + this.state.nykyeturengasvannekokoleveystuumaa);
        console.log('nykyetuvanteenleveysmm: ' + nykyetuvanteenleveyscm);
        console.log('nykyetuvanteenhalkaisijacm : ' + nykyetuvanteenhalkaisijacm);
        console.log('nykyetukumirenkaankorkeuscm: ' + nykyetukumirenkaankorkeuscm);
        console.log('nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm: ' + nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm);
        console.log('nykyetuvanteenET: ' + nykyetuvanteenET);
        this.setState ({nykyeturenkaanleveyscm})
        this.setState ({nykyetuvanteenleveyscm})
        this.setState ({nykyetukuminulkonematcm})
        this.setState ({nykyetukuminulkonemaperpuolicm})
        this.setState ({nykyetuvanteenhalkaisijacm})
        this.setState ({nykyetukumirenkaankorkeuscm})
        this.setState ({nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm})
        this.setState ({nykyetuvanteenET})

        var uusieturenkaanleveyscm = this.state.uusieturengasleveysmm * 0.1;
        var uusietuvanteenleveyscm = this.state.uusieturengasvannekokoleveystuumaa  * TUUMA * 1;
        var uusietukuminulkonematcm = uusieturenkaanleveyscm - uusietuvanteenleveyscm;
        var uusietukuminulkonemaperpuolicm = parseFloat(uusietukuminulkonematcm.toFixed(2)) / 2;
        var uusietuvanteenhalkaisijacm =  this.getVanneHalkaisijaCm(this.state.uusieturengasvannekokohalkaisijatuumaa); 
        var uusietukumirenkaankorkeuscmpyoristamaton = this.state.uusieturengasleveysmm * this.state.uusieturengasprofiili/1000;
        var uusietukumirenkaankorkeuscm = parseFloat(uusietukumirenkaankorkeuscmpyoristamaton.toFixed(2));
        var uusieturenkaanvanteenpluskuminkokonaishalkaisijacmpyoristamaton = this.state.uusieturengasvannekokohalkaisijatuumaa * TUUMA + uusietukumirenkaankorkeuscm * 2;
        var uusieturenkaanvanteenpluskuminkokonaishalkaisijacm = parseFloat(uusieturenkaanvanteenpluskuminkokonaishalkaisijacmpyoristamaton.toFixed(2));
        var uusietuvanteenET = this.state.uusietuvanneET * 1;
        console.log('uusieturenkaanleveysmmmm: ' + uusieturenkaanleveyscm);
        console.log('uusietuvanteenleveystuumaa: ' + this.state.uusieturengasvannekokoleveystuumaa);
        console.log('uusietuvanteenleveysmm: ' + uusietuvanteenleveyscm);
        console.log('uusietuvanteenhalkaisijacm : ' + uusietuvanteenhalkaisijacm);
        console.log('uusietukumirenkaankorkeuscm: ' + uusietukumirenkaankorkeuscm);
        console.log('uusieturenkaanvanteenpluskuminkokonaishalkaisijacm: ' + uusieturenkaanvanteenpluskuminkokonaishalkaisijacm);
        console.log('uusietuvanteenET: ' + uusietuvanteenET);
        this.setState ({uusieturenkaanleveyscm})
        this.setState ({uusietuvanteenleveyscm})
        this.setState ({uusietukuminulkonematcm})
        this.setState ({uusietukuminulkonemaperpuolicm})
        this.setState ({uusietuvanteenhalkaisijacm})
        this.setState ({uusietukumirenkaankorkeuscm})
        this.setState ({uusieturenkaanvanteenpluskuminkokonaishalkaisijacm})
        this.setState ({uusietuvanteenET})


        var eroeturenkaanleveyscm = uusieturenkaanleveyscm - nykyeturenkaanleveyscm;
        var eroeturenkaanvanteenpluskuminkokonaishalkaisijacmpyoristamaton = uusieturenkaanvanteenpluskuminkokonaishalkaisijacm - nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm;
        var eroeturenkaanvanteenpluskuminkokonaishalkaisijacm = parseFloat(eroeturenkaanvanteenpluskuminkokonaishalkaisijacmpyoristamaton.toFixed(2));
        var eroeturenkaanvanteenpluskuminkokonaishalkaisijaprosenttipyoristamaton = eroeturenkaanvanteenpluskuminkokonaishalkaisijacm / nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm * 100;
        var eroeturenkaanvanteenpluskuminkokonaishalkaisijaprosentti = parseFloat(eroeturenkaanvanteenpluskuminkokonaishalkaisijaprosenttipyoristamaton.toFixed(2));
        var nykyetuvanteenETcm = nykyetuvanteenET / 10;
        var uusietuvanteenETcm = uusietuvanteenET / 10; 
        var nykyetuvanteenleveysperkaksicm = nykyetuvanteenleveyscm / 2;
        var uusietuvanteenleveysperkaksicm = uusietuvanteenleveyscm / 2;    
        var nykyvanteenreunamuttereistaulospaincm = nykyetuvanteenleveysperkaksicm - nykyetuvanteenETcm;
        var uusivanteenreunamuttereistaulospaincm = uusietuvanteenleveysperkaksicm - uusietuvanteenETcm;
        var nykyvanteenreunamuttereistasisaanpaincm = nykyetuvanteenleveysperkaksicm + nykyetuvanteenETcm;
        var uusivanteenreunamuttereistsisaanpaincm = uusietuvanteenleveysperkaksicm + uusietuvanteenETcm;
        var muutosvanteenmuutosulospaincmpyoristamaton = uusivanteenreunamuttereistaulospaincm - nykyvanteenreunamuttereistaulospaincm;
        var muutosvanteenmuutosulospaincm = parseFloat(muutosvanteenmuutosulospaincmpyoristamaton.toFixed(2));
        var muutosvanteenmuutossisaanpaincmpyoristamaton =  uusivanteenreunamuttereistsisaanpaincm  - nykyvanteenreunamuttereistasisaanpaincm;
        var muutosvanteenmuutossisaanpaincm =  parseFloat(muutosvanteenmuutossisaanpaincmpyoristamaton.toFixed(2));
        var muutoskuminulkonemassavanteestaperpuolicm = uusietukuminulkonemaperpuolicm - nykyetukuminulkonemaperpuolicm
        var muutosuudenkuminulkoreunaulospainvsvanhakumicmpyoristamaton = muutoskuminulkonemassavanteestaperpuolicm + muutosvanteenmuutosulospaincm;
        var muutosuudenkuminulkoreunaulospainvsvanhakumicm = parseFloat(muutosuudenkuminulkoreunaulospainvsvanhakumicmpyoristamaton.toFixed(2));
        var muutosuudenkuminsisareunasisaanpainvsvanhakumicmpyoristamaton = muutoskuminulkonemassavanteestaperpuolicm + muutosvanteenmuutossisaanpaincm;
        var muutosuudenkuminsisareunasisaanpainvsvanhakumicm = parseFloat(muutosuudenkuminsisareunasisaanpainvsvanhakumicmpyoristamaton.toFixed(2));
   
        this.setState ({eroeturenkaanleveyscm})
        this.setState ({eroeturenkaanvanteenpluskuminkokonaishalkaisijacm})
        this.setState ({eroeturenkaanvanteenpluskuminkokonaishalkaisijaprosentti})
        this.setState ({muutosvanteenmuutosulospaincm})
        this.setState ({muutosvanteenmuutossisaanpaincm})
        this.setState ({muutoskuminulkonemassavanteestaperpuolicm})
        this.setState ({muutosuudenkuminulkoreunaulospainvsvanhakumicm})
        this.setState ({muutosuudenkuminsisareunasisaanpainvsvanhakumicm})
        
        // 
        // var kalkuloi;
        // if (op === "add") {
        //     kalkuloi = a + b;
        // } else if  (op === "min") {
        //     kalkuloi = a - b;
        // } else if  (op === "div") {
        //     kalkuloi = a / b;
        // } else if  (op === "mul") {
        //     kalkuloi = a * b;
        // }
        // this.setState ({ tulos: kalkuloi})
        // console.log('1. lukusi: ' + a);
        // console.log('2. lukusi: ' + b);
        // console.log('Tuloksesi: ' + kalkuloi);
        // }

        



    }

    render() {
        
        return (
            <div>
                <div>
                    <br></br>
                    Uusien rengas-vannesettien valinta voi olla vaikeaa, koska uuden sarja tulee paitsi näyttää hyvältä, 
                    niin myös mahtua paikoilleen ja eturenkaiden tulee myös mahtua kääntymään! <br></br>
                    Tämä rengaslaskin auttaa sinua kertomalla vanhojen ja uusien sarjojesi eron. 
                    Jos ero on yli +1...+2%, voi mahtuvuudessa olla ongelmaa. <br></br>
                    OHJEET:  Anna ensin nykyrenkaittesi tiedot, ja sitten uusien renkaiden tiedot. Ja supertietokone laskee EROn. 
                    <br></br><br></br>
                </div>
            
                <div className="laskincss">
                    <div> <font style={{fontWeight: "bold", color: "purple"}}> Nykyinen rengas </font> </div>
                        <div>
                            Nykyrengasleveys (mm): 
                                <select  ref={this.setTextInputRef} type="text" id="nerl" value={this.state.nerl} onChange={ (e) => { this.handleChange("nerl", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="145" > 145 </option> <option value="155" > 155 </option> <option value="165" > 165 </option><option value="175" > 175 </option><option value="185" > 185 </option><option value="195" > 195 </option>
                                    <option value="205" > 205 </option> <option value="215" > 215 </option> <option value="225" > 225 </option><option value="235" > 235 </option><option value="245" > 245 </option><option value="255" > 255 </option><option value="265" > 265 </option><option value="275" > 275 </option><option value="285" > 285 </option><option value="295" > 295 </option>
                                    <option value="305" > 305 </option> <option value="215" > 315 </option> <option value="325" > 325 </option><option value="335" > 335 </option><option value="345" > 345 </option> 
                                </select>
                            Nykyrengasprofiili (%): 
                                <select  ref={this.setTextInputRef} type="text" id="nerp" value={this.state.nerp} onChange={ (e) => { this.handleChange("nerp", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="25" > 25 </option> <option value="35" > 35 </option> <option value="45" > 45 </option><option value="55" > 55 </option><option value="65" > 65 </option><option value="75" > 75 </option> <option value="85" > 85 </option>
                                </select>
                            <br /> Nykyrengasvannekoko (halkaisija, tuumaa): 
                                <select  ref={this.setTextInputRef} type="text" id="nervkh" value={this.state.nervkh} onChange={ (e) => { this.handleChange("nervkht", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="15" > 15 </option> <option value="16" > 16 </option> <option value="17" > 17 </option><option value="18" > 18 </option><option value="19" > 19 </option><option value="20" > 20 </option> <option value="21" > 21 </option> <option value="22" > 22 </option>
                                </select>
                            Nykyrengasvannekoko (leveys, tuumaa): 
                                <select  ref={this.setTextInputRef} type="text" id="nervklt" value={this.state.nervklt} onChange={ (e) => { this.handleChange("nervklt", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="4" > 4 </option> <option value="4.5" > 4.5 </option> <option value="5" > 5 </option><option value="5.5" > 5.5 </option><option value="6" > 6 </option><option value="6.5" > 6.5 </option> <option value="7" > 7 </option> <option value="7.5" > 7.5 </option> <option value="8" > 8 </option><option value="8.5" > 8.5 </option> <option value="9" > 9 </option><option value="9.5" > 9.5 </option> <option value="10" > 10 </option><option value="10.5" > 10.5 </option> <option value="11" > 11 </option>
                                </select>
                            {/* VANHA TOTEUTUS ILMAN DROP-DOWNEJA:
                            Nykyeturengasleveys (mm): <input  ref={this.setTextInputRef} type="text" id="nerl" onChange={ (e) => { this.handleChange("nerl", e); } } ></input>
                            <br /> Nykyrengasprofiili (%): <input  ref={this.setTextInputRef} type="text" id="nerp" onChange={ (e) => { this.handleChange("nerp", e); } } ></input>
                            <br /> Nykyrengasvannekoko (halkaisija, tuumaa): <input  ref={this.setTextInputRef} type="text" id="nervkh" onChange={ (e) => { this.handleChange("nervkht", e); } } ></input>
                            <br /> Nykyrengasvannekoko (leveys, tuumaa): <input  ref={this.setTextInputRef} type="text" id="nervklt" onChange={ (e) => { this.handleChange("nervklt", e); } } ></input>      */}
                            <br /> Nykyrenkaan vanteen ET-luku (kirjoita): <input  ref={this.setTextInputRef} type="text" id="nervET" onChange={ (e) => { this.handleChange("nervET", e); } } ></input> (löytyy vanteen sisäpuolelta)
                            <br /> <font style={{fontSize: 11}}> Jos et tiedä ET-lukua, anna esim. tyypillinen luku "30" sekä vanhaan että uuteen renkaaseen, ja näin ET ei vaikuta ERO-laskelmaan. </font>
                            <br />
                            <br /> <button onClick={ (e) => { this.handleSubmit(); } }>Laske nykyrengas ja päivitä ERO-laskelma.   </button>  
                            <br />
                            <br />
                        </div>
                        <div>
                            <div> Nykyrenkaan leveys: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyeturenkaanleveyscm} </font> cm
                                  &nbsp; &nbsp; <font style={{fontWeight: "bold", color: "purple"}}> - </font>  &nbsp; &nbsp; 
                                  Nykyvanteen leveys: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetuvanteenleveyscm} </font>  cm. </div>
                            <div> <font style={{fontWeight: "bold", color: "purple"}}>===></font>  Nykyrenkaan kumin ulkonema vanteesta (per puoli): <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetukuminulkonemaperpuolicm} </font>  cm. </div>
                            <div> Nykyvanteen halkaisija: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetuvanteenhalkaisijacm} </font>  cm
                                  &nbsp; &nbsp; <font style={{fontWeight: "bold", color: "purple"}}> + </font>  &nbsp; &nbsp; 
                                  Nykyrenkaan kumin korkeus: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetukumirenkaankorkeuscm} </font>  cm. </div>
                            <div> <font style={{fontWeight: "bold", color: "purple"}}>===></font>   Nykyrenkaan (vanne {this.state.nykyeturengasvannekokohalkaisijatuumaa}" +
                                    kumi {this.state.nykyeturengasleveysmm}/{this.state.nykyeturengasprofiili}/R{this.state.nykyeturengasvannekokohalkaisijatuumaa})
                                    kokonaishalkaisija: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyeturenkaanvanteenpluskuminkokonaishalkaisijacm} </font>  cm.
                            </div>
                            <div> Nykyrenkaan vanteen ET-luku: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.nykyetuvanteenET} </font> </div>
                        </div>
                </div>

                <div> <br /></div>

                <div className="laskincss">
                    <div> <font style={{fontWeight: "bold", color: "purple"}}> UUSI rengas </font> </div>
                        <div>
                            Uuden renkaan leveys (mm): 
                                <select  ref={this.setTextInputRef} type="text" id="uerl" value={this.state.nerl} onChange={ (e) => { this.handleChange("uerl", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="145" > 145 </option> <option value="155" > 155 </option> <option value="165" > 165 </option><option value="175" > 175 </option><option value="185" > 185 </option><option value="195" > 195 </option>
                                    <option value="205" > 205 </option> <option value="215" > 215 </option> <option value="225" > 225 </option><option value="235" > 235 </option><option value="245" > 245 </option><option value="255" > 255 </option><option value="265" > 265 </option><option value="275" > 275 </option><option value="285" > 285 </option><option value="295" > 295 </option>
                                    <option value="305" > 305 </option> <option value="315" > 315 </option> <option value="325" > 325 </option><option value="335" > 335 </option><option value="345" > 345 </option> 
                                </select>
                            Uuden renkaan profiili (%):
                                <select  ref={this.setTextInputRef} type="text" id="uerp" value={this.state.nerp} onChange={ (e) => { this.handleChange("uerp", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="25" > 25 </option> <option value="35" > 35 </option> <option value="45" > 45 </option><option value="55" > 55 </option><option value="65" > 65 </option><option value="75" > 75 </option> <option value="85" > 85 </option>
                                </select>
                            <br /> Uuden renkaan vannekoko (halkaisija, tuumaa):
                                <select  ref={this.setTextInputRef} type="text" id="uervkh" value={this.state.nervkh} onChange={ (e) => { this.handleChange("uervkht", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="15" > 15 </option> <option value="16" > 16 </option> <option value="17" > 17 </option><option value="18" > 18 </option><option value="19" > 19 </option><option value="20" > 20 </option> <option value="21" > 21 </option> <option value="22" > 22 </option>
                                </select>
                            Uuden renkaan vannekoko (leveys, tuumaa):
                                <select  ref={this.setTextInputRef} type="text" id="uervklt" value={this.state.nervklt} onChange={ (e) => { this.handleChange("uervklt", e); } } >
                                    <option value="<valitse>" > Valitse </option> <option value="4" > 4 </option> <option value="4.5" > 4.5 </option> <option value="5" > 5 </option><option value="5.5" > 5.5 </option><option value="6" > 6 </option><option value="6.5" > 6.5 </option> <option value="7" > 7 </option> <option value="7.5" > 7.5 </option> <option value="8" > 8 </option><option value="8.5" > 8.5 </option> <option value="9" > 9 </option><option value="9.5" > 9.5 </option> <option value="10" > 10 </option><option value="10.5" > 10.5 </option> <option value="11" > 11 </option>
                                </select>
                            {/* VANHA TOTEUTUS ILMAN DROP-DOWNEJA:
                            Uuden renkaan leveys (mm): <input  ref={this.setTextInputRef} type="text" id="uerl" onChange={ (e) => { this.handleChange("uerl", e); } } ></input>
                            <br /> Uuden renkaan profiili (%): <input  ref={this.setTextInputRef} type="text" id="uerp" onChange={ (e) => { this.handleChange("uerp", e); } } ></input>
                            <br /> Uuden renkaan vannekoko (halkaisija, tuumaa): <input  ref={this.setTextInputRef} type="text" id="uervkh" onChange={ (e) => { this.handleChange("uervkht", e); } } ></input>
                            <br /> Uuden renkaan vannekoko (leveys, tuumaa): <input  ref={this.setTextInputRef} type="text" id="uervklt" onChange={ (e) => { this.handleChange("uervklt", e); } } ></input>   */}
                            <br /> Uuden renkaan vanteen ET-luku (kirjoita): <input  ref={this.setTextInputRef} type="text" id="uervET" onChange={ (e) => { this.handleChange("uervET", e); } } ></input> 
                            <br />
                            <br /> <button onClick={ (e) => { this.handleSubmit(); } }>Laske uusi rengas ja päivitä ERO-laskelma.   </button> 
                            <br />
                            <br />
                        </div>
                        <div>
                            <div> Uuden renkaan leveys: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.uusieturenkaanleveyscm} </font> cm. 
                                  &nbsp; &nbsp; <font style={{fontWeight: "bold", color: "purple"}}> - </font>  &nbsp; &nbsp; 
                                  Uuden vanteen leveys: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.uusietuvanteenleveyscm} </font>  cm. </div>
                            <div> <font style={{fontWeight: "bold", color: "purple"}}>===></font>   Uuden renkaan kumin ulkonema vanteesta (per puoli): <font style={{fontWeight: "bold", color: "purple"}}> {this.state.uusietukuminulkonemaperpuolicm} </font>  cm. </div>
                            <div> Uuden vanteen halkaisija: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.uusietuvanteenhalkaisijacm} </font>  cm
                            &nbsp; &nbsp; <font style={{fontWeight: "bold", color: "purple"}}> + </font>  &nbsp; &nbsp; 
                                  Uuden renkaan kumin korkeus: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.uusietukumirenkaankorkeuscm} </font>  cm. </div>
                            <div> <font style={{fontWeight: "bold", color: "purple"}}>===></font>   Uuden renkaan (vanne {this.state.uusieturengasvannekokohalkaisijatuumaa}" +
                                    kumi {this.state.uusieturengasleveysmm}/{this.state.uusieturengasprofiili}/R{this.state.uusieturengasvannekokohalkaisijatuumaa})
                                    kokonaishalkaisija: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.uusieturenkaanvanteenpluskuminkokonaishalkaisijacm} </font>  cm.
                            </div>
                            <div> Uuden renkaan vanteen ET-luku: <font style={{fontWeight: "bold", color: "purple"}}> {this.state.uusietuvanteenET} </font> </div>
                        </div>
                </div>

                <div> <br /></div>
                

         

                <div className="laskincss">
                    <div> <font style={{fontWeight: "bold", color: "purple"}}> ERO nykyisen ja uuden renkaan välillä </font> </div>
                        <div>
                            <br />
                            <div> Uusi renkaasi on <font style={{fontWeight: "bold", color: "purple"}}> {Math.abs(this.state.eroeturenkaanleveyscm)} </font> cm <font style={{fontWeight: "bold", color: "purple"}}> {this.state.eroeturenkaanleveyscm < 0 ? "KAPEAMPI": "LEVEÄMPI"} </font> kuin vanha rengas. </div> 
                            <div> Uusi renkaasi (vanne+kumi) on halkaisijaltaan <font style={{fontWeight: "bold", color: "purple"}}> {Math.abs(this.state.eroeturenkaanvanteenpluskuminkokonaishalkaisijacm)} </font> cm eli <font style={{fontWeight: "bold", color: "purple"}}> {Math.abs(this.state.eroeturenkaanvanteenpluskuminkokonaishalkaisijaprosentti)} </font> % <font style={{fontWeight: "bold", color: "purple"}}> {this.state.eroeturenkaanvanteenpluskuminkokonaishalkaisijacm < 0 ? "PIENEMPI": "SUUREMPI"}</font> kuin vanha. </div>
                            <div> Uusi vanteesi on sivuttaissuunnassa <font style={{color: "black"}}> {Math.abs(this.state.muutosvanteenmuutosulospaincm)} </font> cm {this.state.muutosvanteenmuutosulospaincm < 0 ? "KAUEMPANA": "LÄHEMPÄNÄ"} auton lokasuojakaarta kuin vanha vanne. </div>
                            <div> Uusi vanteesi on sivuttaissuunnassa <font style={{color: "black"}}> {Math.abs(this.state.muutosvanteenmuutossisaanpaincm)} </font>  cm {this.state.muutosvanteenmuutossisaanpaincm < 0 ? "KAUEMPANA": "LÄHEMPÄNÄ"} auton iskunvaimenninta kuin vanha vanne. </div>
                            <div> Uusi renkaasi (kumi) tulee sivuttaissuunnassa <font style={{fontWeight: "bold", color: "purple"}}> {Math.abs(this.state.muutosuudenkuminulkoreunaulospainvsvanhakumicm)} </font>  cm <font style={{fontWeight: "bold", color: "purple"}}> {this.state.muutosuudenkuminulkoreunaulospainvsvanhakumicm < 0 ? "KAUEMMAKSI": "LÄHEMMÄKSI"} </font> auton lokasuojakaarta kuin vanha kumi. </div>
                            <div> Uusi renkaasi (kumi) tulee sivuttaissuunnassa <font style={{fontWeight: "bold", color: "purple"}}> {Math.abs(this.state.muutosuudenkuminsisareunasisaanpainvsvanhakumicm)} </font>  cm <font style={{fontWeight: "bold", color: "purple"}}> {this.state.muutosuudenkuminulkoreunasisaanpainvsvanhakumicm < 0 ? "KAUEMMAKSI": "LÄHEMMÄKSI"} </font> auton iskunvaimenninta kuin vanha kumi. </div>
                        </div>
                </div>



            </div>
        );


    }
}
     
export default Laskinrengas;















        // this.setState ({
        //     nykyetuvanteenleveysmm,
        //     nykyeturengasvannekokohalkaisijacm,
        //     nykyetukumirenkaankorkeuscm,
        //     nykyetuhalkaisijavannepluskumicm
        // });