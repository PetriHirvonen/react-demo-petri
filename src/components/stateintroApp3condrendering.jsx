import React, { Component } from 'react';
//import { thisTypeAnnotation } from '@babel/types';

class StateintroApp3condrendering extends Component {
    constructor() {
        super()
        this.state = {
            isloggedin: false,
        }
        this.handleClick = this.handleClick.bind(this)   
    }

    handleClick(){
        console.log("login-nappi toimii")
        this.setState(prevState => {
            return {
                isloggedin: !prevState.isloggedin
            }
        })
    }


    render() {
        // let wordDisplay
        // if (this.state.isloggedin === true) {
        //     wordDisplay = "IN"
        // } else {
        //     wordDisplay = "OUT"
        // }
        //.........ja kaikki y.o. on lyhyempänä kirjoitettuna näin:
        let wordDisplay = this.state.isloggedin ? "IN" : "OUT"

        let buttonText = this.state.isloggedin ? "LOG OUT" : "LOG IN"

        return (
            <div>
                Hey!! You are currently LOGGED {wordDisplay} &nbsp; &nbsp;
                <button onClick={this.handleClick}> {buttonText} </button>
                
            </div>
        )
    }
}

export default StateintroApp3condrendering

