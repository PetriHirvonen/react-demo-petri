import React, { Component } from 'react';

    
class Testi extends Component {
         
    render() {
        console.log("Testisummat1 ja 2 ladattu...");
        let a = 5;
        let b = 9;
        let sum = a + b;
        console.log(sum);
        return (
            <div className="testicss">
                <div>testi.js file. Testisumma1 on: {a + " + " + b + " = " +  sum}.</div>
                <div>testi.js file. Testisumma2 on: {a + " + " + b + " = " +  this.sum2()}.</div>
            </div>
        );
    }

    sum2() {
        let a = 5;
        let b = 6;
        let sum2 = a + b;
        console.log(sum2);
        return sum2;
        
    } 
    // componentDidMount() { }
}
     
export default Testi;
