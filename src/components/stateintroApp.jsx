import React, { Component } from 'react';

class StateintroApp extends Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h6> &nbsp; Is (stateintroApp.jsx) really so...? &nbsp;
                    Well,  <font style={{fontWeight: "bold", color: "blue"}}> {this.state.answer} </font>, it is. </h6>
            </div>
        )
    }
}

export default StateintroApp

