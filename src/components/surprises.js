import React, { Component } from 'react';
    
class Surprises extends Component {
    
    constructor() {
        super();
        this.state = {togglenappistatus: false};
        //this.yllatysnappi2 = this.yllatysnappi2.bind(this);
        //this.laatikkoteksti = this.laatikkoteksti.bind(this);
    }

    handleChange() {
        console.log('Antamasi  luku tai luvut muuttumassa...')
    }

    //Surprise button nro1:
    yllatysboxi1 (e) {
        //e.preventDefault();
        let yllari = document.querySelector(".yllatysdiv1css");
        yllari.innerHTML ="USKALSIT, HYVÄ!";
        yllari.style.cssText = "font-size: 23px; font-style: italic; font-weight: bold;";
        yllari.style.backgroundColor = "red";
        console.log('1.nappiboxia painettu: ' + yllari.innerHTML);
    }
 
    //Surprise button nro2:
    yllatysnappi2 () {
        let yllari2 = document.querySelector(".laatikkoteksti2css");
        yllari2.innerHTML = "YES...";
        console.log('2.boxin nappia painettu: ' + yllari2.innerHTML);
        }
    laatikkoteksti (e) {
        //e.preventDefault();
        let yllari2 = document.querySelector(".laatikkoteksti2css");
        yllari2.innerHTML ="YES!!! Hidden feature ;)";
        console.log('2.hmm-nappia painettu: ' + yllari2.innerHTML);
    }
    

   //Surprise button nro3 elikkä toggle-nappi:
    togglenappi () {
         let yllari3 = document.querySelector(".laatikkoteksti3css");
         
         if (this.state.togglenappiStatus === false) {
             yllari3.innerHTML ="Alkutila taas...";
             console.log(yllari3.innerHTML);
             this.setState ({togglenappiStatus: true});
         }
        else {
            yllari3.innerHTML = "Togglattu tila.";
            console.log(yllari3.innerHTML);
            this.setState ({togglenappiStatus: false});
         }
     }

    //Refresh nappi: 
     refreshPage() {
        console.log("Page refeshed.");
        //window.location.reload();
        window.location = "/main";    
    } 
    refreshPagehoverlog() {
        console.log("Page reload button hovered.");
    } 

    render() {
        return (
            <div> 
                <div className="yllatysdiv1css">
                    <div>Tämä on jännää. <br></br>
                        <span href="#" onClick={ (e) => { this.yllatysboxi1(); } }>Surprise key#1 - uskallatko klikata? </span>
                    </div>
                </div>
        
                <form className="yllatysdiv2css">
                    <span style={{color:'black'}} href="#"  onClick={ (e) => { this.laatikkoteksti(); } }> Hmm.    </span>
                    <div>       
                        <button type="button" onClick={ (e) => { this.yllatysnappi2(); } } > Surprise key#2 - uskallatko klikata?</button>
                        <div className = "laatikkoteksti2css">
                            {/* <a href="#" onClick={ (e) => { this.laatikkoteksti(); } }>Come´on...? </a> */}
                            Come´on...?
                        </div>
                    </div>
                </form>

                <form className="yllatysdiv3css">
                    <div>
                        <button type="button" onClick={ (e) => { this.togglenappi(); } } > No-Surprise key - TOGGLE</button>
                        <div className = "laatikkoteksti3css">
                            Alkutila.
                        </div>
                    </div>
                </form>

                <div className="refreshnappicss">
                    < button onMouseOver={this.refreshPagehoverlog} onClick = {this.refreshPage} > REFRESH THIS PAGE </button>
                </div>

            </div>
        );
    }
}
     
export default Surprises;

