import React, { Component } from 'react';
// Flow: MainSimplest5PetriTest --> MainSimplest5osa2 --> UI:lle.
 
const testPetri1 = 11;
const testPetri2 = 12;
export const testPetriValueSuoraExport1 = 1000;
export const testPetriValueSuoraExport2 = testPetri1 * testPetri2;
export const testPetriValueSuoraExport3a = 2 * testPetri1 * testPetri2;
export const testPetriValueSuoraExport3b = 2 * testPetriValueSuoraExport2;


export default class MainSimplest5PetriTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
          petriTestValue: "100", 
          fakeValue: "99",
        }
        console.log("petriTest constructorista:", this.state.petriTestValue);
        console.log("fakeValue constructorista:", this.state.fakeValue);
    }
    
    Petritest() {
        console.log("testPetri1 value is: ", testPetri1);
        console.log("testPetri2 value is: ", testPetri2);
        const petriTestValue = testPetri1 + testPetri2;
        console.log("PetriTest value is: ", petriTestValue); // prints 23 alussa
        console.log("this.state.petriTestValue renderistä:", this.state.petriTestValue); // prints 100 alussa
        return ( <span>{petriTestValue}</span> );  // Tämä return tekee sen että tulos printtautuu webbisivulle.
    }

    updateThisStateIlmanBindiaEliNuolella = () => {
        this.setState({ petriTestValue: testPetri1 + testPetri2 })
        console.log("this.state.petriTestValue renderistä:", this.state.petriTestValue);
    }

    showThisStateIlmanBindiaEliNuolella = () => {
        this.setState({ petriTestValue: this.state.petriTestValue })
        console.log("this.state.petriTestValue renderistä:", this.state.petriTestValue);
    }
     

    render() {
        console.log("this.state.petriTestValue renderistä:", this.state.petriTestValue);
        console.log("this.state.petriTestValue renderistä:", this.state.fakeValue);
        
        return (
            <div>
                <p> Petritest return, value is:  {this.Petritest()}</p>
                <button onClick = {this.updateThisStateIlmanBindiaEliNuolella}> Update this.state </button>
                <button onClick = {this.showThisStateIlmanBindiaEliNuolella}> Show this.state </button>
            </div>
        )
    }
}

