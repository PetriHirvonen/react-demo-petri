import React, { Component } from 'react';
    
class Tekstiinput extends Component {

    constructor() {
        super();
        this.state = {text: '.'};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.textInput = null;
        this.setTextInputRef = element => {this.textInput = element;};
      }
    
    handleChange() {
        let kirjoitus = this.textInput.value;
        this.setState ({ text1: kirjoitus });
        console.log('Antamasi nimi muuttuu...' + kirjoitus)
    }

    handleClick () {
        let kirjoitettu = this.textInput.value;
        this.setState ({ text2: kirjoitettu });
        console.log('Submitoimasi nimesi: ' + kirjoitettu);
        //alert('Submitoimasi nimesi: ' + kirjoitettu);
    }
    
    render() {
        return (        
         <div>
              Nimi:
              <input ref={this.setTextInputRef} type="text"    onChange={ (e) => { this.handleChange(); } } />
              <button onClick={ (e) => { this.handleClick(); } }>Submitoi ilman alerttia    </button>
              <p>Parhaillaan kirjoittamasi teksti: {this.state.text1}.</p>
              <p>Submitoimasi teksti: { this.state.text2}.</p>
         </div>
        );
      }
    }
      
export default Tekstiinput;

//    // Vaihtoehto1:
//     constructor(props){
//         super(props);
//         this.state = {teksti : ''}
//         this.updateInput = this.updateInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         //this.onSubmit = this.onSubmit.bind(this);
//     }

//     updateInput(event){
//         this.setState({teksti : event.target.value})
//     }

//     handleSubmit(){
//         console.log('Submitoimasi teksti on: ' + this.state.teksti)
        
//     }

//     render(){
//         return (
//             <div>
//                 Kirjoita tekstiä tähän: 
//                 <input type="texttaijokumuu" onChange={this.updateInput}></input>
//                 <input type="submit" onClick={this.handleSubmit} ></input> 
//                 <p>Parhaillaan kirjoittamasi teksti: {this.state.teksti}.</p>
//                 <button onClick={() => this.handleSubmit()}>{"Parhaillaan kirjoittamasi teksti tähän: "+ this.state.teksti}</button>
//                 <button onClick={() => this.updateInput()}>{"Parhaillaan kirjoittamasi teksti tähän: "+ this.state.teksti}</button>

//             </div>
//         );
//     }
// } 

// export default Tekstiinput;

//    // Vaihtoehto2:
    
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.updateInputValue = this.updateInputValue.bind(this);
//        }
     
//        handleClick(){
//         console.log("Kirjoitettu nimi : "+this.state.inputfield);
//        }
     
//        updateInputValue(evt){
//          this.state={inputfield: evt.target.value};   
     
//        }
     
//        render(){
//          var r; 
//          r=<div>Kirjoita nimesi: <input type="text" id="nimi" 
//                  onChange={this.updateInputValue} />
//            <input type="button" value="OK" id="oknappi" onClick={this.handleClick}/>
//            </div>;    
//          return r;
//         }
//      }
//    
// export default Tekstiinput;

