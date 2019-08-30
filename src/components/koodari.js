import React, { Component } from 'react';
    
class Koodari extends Component {
    
    constructor() {
        super();
        this.state = {
          arvo: "  ",
          nimi: '  '
        }
    }
     
    onClick = () => { 
        this.setState({ arvo: this.state.arvo });
        this.setState({ nimi: `Petri... ${this.state.arvo}` });
    }
      
    onClickfn = () => { 
        this.setState((prevState,props) => ({ arvo: prevState.arvo }));
        this.setState((prevState,props) => ({ nimi: `Petri !! ${prevState.arvo}`}),() => {
          console.log(`Koodari todellakin on: ${this.state.nimi}`);
        });      
    }

    render() {
        return( 
            <div className="koodaricss">
                <div>  Kovakoodattu <font color="red">ohjelmoijan</font> nimi on: &nbsp; &nbsp; 
                    <span className="blinkingmediumcss">
                         {this.state.arvo} ---- {this.state.nimi} 
                    </span>
                </div>
                <button onClick={this.onClick}>Nappi1: Näytölle</button>
                <button onClick={this.onClickfn}>Nappi2: Näytölle ja logiin</button>
          </div>
        );
    }
}
   
export default Koodari;

