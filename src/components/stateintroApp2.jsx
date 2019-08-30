import React, { Component } from 'react';

class StateintroApp2 extends Component {
    constructor() {
        super()
        this.state = {
            name: "Annettunimi",
            age: "20",
        }
    }

    render() {
        return (
            <div className="testicss">
                <div> {this.state.name} </div>
                <div> {this.state.age} </div>
            </div>
        )
    }
}

export default StateintroApp2

