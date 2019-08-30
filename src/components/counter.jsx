import React, { Component } from 'react';

class Counter extends Component {
    state = { count: this.props.value
     };
    
    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };
    
    render () {
    //  Tämä palauttaa y.o. curly brackettien sisällä olevan luvun webbisivulle:
    //  return <div><span> {this.state.count} </span><button>Increment</button></div>;
    // ..ja on sama kuin: return <div><h1> Hello World </h1><button>Increment</button></div>;
    // ..ja on sama kuin: return (<div><h1> Hello World </h1><button>Increment</button></div>);
    // ..ja on sama kuin: 
       // return (
       //     <div>
       //         <h1> Hello World </h1>
       //         <button>Increment</button>
       //     </div>
       // );

    //  Tämä palauttaa a.o. formatCount-funktion antaman määrityksen ottaen huomioon luvun ylhäältä: 
        console.log(this);
        //console.log(this.state);
        console.log(this.state.count);
            //console.log(this.formatCount);
            //console.log(this.formatCount());
            //console.log('props', this.props);
        return (
        <div>
            {/* Seur.rivi tuo näkyviin kunkin countterin otsikon dynaamisella numerolla */}
            {this.props.children} 
            <span className="badge badge-warning m-2"> {this.formatCount()} </span>
            <button 
                className="btn btn-secondary btn-sm" 
                onClick={() => this.handleIncrement()} 
                >
                Increment
            </button>

            {/* Seur.rivi tuo näkyviin delete napin ja että kun sitä painaa, tekee counters.jsx:n handleDelete:n sen onDelete:n kautta */}
            <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2"> Delete </button> 

         
            <button onClick={this.handleIncrement} > Increment w/o bs </button>
            <button onClick={() => this.handleIncrement()} > Increment w/o bs w => </button>
        </div>
        );
    }

    // formatCount (){
    //     return this.state.count === 0 ? 'Zero': this.state.count;
    // }
    //...on sama kuin jos kirjottaisi:
    // Huom: tämä siis tarkoittaa: vasen puoli: jos arvo on 0, palauta  'Zero': oikea puoli: muutoin palaute sen arvo. 
    // formatCount (){
    //     let { count } = this.state;
    //     return count === 0 ? 'Zero': count;
    // }

    //Voi tehdä myös näin:
    formatCount (){
         let { count } = this.state;
         let xxx  = 'Zero';
         return count === 0 ? xxx: count;
    }

}

export default Counter;

//huom: olisi sama kuin jos kirjottaisi ilman ala- "export default Counter;":
// export default class Counter extends Component {......

