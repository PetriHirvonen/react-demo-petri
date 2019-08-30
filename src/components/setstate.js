import React, { Component } from 'react';

    
class Setstate extends Component {
    
    constructor() {
        super();
        this.state = {
          arvo: 0,
          viesti: 'default click state'
        }
    }
     
    onClick = () => {
        this.setState({
            arvo: this.state.arvo + 1
    });
       
    this.setState({
          viesti: `click-state ${this.state.arvo}`
          });
    }
      
    onClickfn = () => {
        this.setState((prevState,props) => ({
            arvo: prevState.arvo + 1
    }));
        
    this.setState((prevState,props) => ({
          viesti: `click-state ${prevState.arvo}`
        }),() => {
          console.log(`Setstate arvo updaten jälkeen: ${this.state.arvo}`);
        });      
    }
      
     
    render() {
        return( 
          <div>
            <div>render->state={this.state.arvo} - 
                {this.state.viesti}
            </div>
            <button onClick={this.onClick}>Nappi1: setState</button>
            <button onClick={this.onClickfn}>Nappi2: setState fn</button>
          </div>
        );
    }
}
   

export default Setstate;

