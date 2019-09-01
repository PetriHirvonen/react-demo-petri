import React, { Component } from 'react';
//import Lifecyclemethodconditionalrendering from './lifecyclemethodconditionalrendering'

// https://www.youtube.com/watch?v=DLX62G4lc44&feature=youtu.be
// Ajassa 2:50:00 --> 3:00:00 hyvät kuvaukset kaikista lifecycle metodeista

class Lifecyclemethod2 extends Component {
    constructor() {
        super()
        this.state = {
            //isLoading: true,   
            unreadMessages: [
                "viesti1",
                "viesti2",
            ]
            
        }
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 2500)
    // }

    render() {
        return (
            // <div className="refreshnappicss">
            <div className="refreshnapinpaallacss">    
                {/* <Lifecyclemethodconditionalrendering isLoading={this.state.isLoading} /> */}
                {<div>You have {this.state.unreadMessages.length} unread messages! </div>}
            </div>
            
        )
    }
}

export default Lifecyclemethod2

