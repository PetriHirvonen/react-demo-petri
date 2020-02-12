import React, { Component } from 'react';

export default class MainSimplest2 extends Component {

    bornYear() {
        const age = 29;
        const yearNow = 1900 + new Date().getYear();
        console.log("yearNow", yearNow);
        return yearNow - age;
        // TAI: 
        //const yearFullNow = new Date().getFullYear();
        //console.log("yearFullNow", yearFullNow);
        //return yearFullNow - age;
    }
    
    render() {

        const Hello = () => {
            return (
              <div>
                <p>Hello.</p>
              </div>
            )
          }

        const HelloWithProps = (props) => {
            return (
              <div>
                <p>Hello {props.name}. You are {props.age} years old.</p>
              </div>
            )
          }
        const nimi = "Petri2"
        const ika = 39

        const bornFullYear2 = () => {
            const yearFullNow2 = new Date().getFullYear();
            return yearFullNow2 - age2;
        }
        const age2 = 29;


        return (
            <div>
                <h5>Simplest greetings2</h5>
                <Hello />
                <HelloWithProps name="Petri" age="29" />
                <HelloWithProps name={nimi} age={ika} />
                <p>You were probably born in {this.bornYear()}</p>
                <p>You were probably born in {bornFullYear2()}</p>
            </div>
        )
    }


}

