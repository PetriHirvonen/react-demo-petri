import React, { Component } from 'react';

class nappiintro extends Component {
    constructor() {
        super()
        this.state = {
            count1: 0,
            count2: 0,
            count3: 1,
        }
        // HUOM. aina kun käyttää setState, se pitää bindata constructoriin: siis näin:
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
        this.handleClick7 = this.handleClick7.bind(this)
    }

    //Ensimmäiselle neljälle napille ei tarvitse constructoria:
    handleClick1 () {
        console.log("button1 clicked")
    }
    handleClick2 () {
        console.log("button2 hovered")
    }
    handleClick4 () {
        console.log("button3 clicked or hovered")
    }

    //Näitä varten pitää olla jo constructor:
    handleClick5 (){
        console.log("1change button clicked")
        this.setState({ count1: 1})
    }
    handleClick6 (){
        console.log("2change button clicked")
        this.setState(( prevState ) => {
            return {
                count2: prevState.count2 + 1
            }
        })
    }
    handleClick7 (){
        console.log("3change button clicked")
        this.setState(( prevState ) => {
            return {
                count3: prevState.count3 * 2
            }
        })
    }

    render() {
        return (
            <div>
                {/* Ensimmäiselle neljälle napille ei tarvitse constructoria: */}
                <button onClick={this.handleClick1}>Click me1</button>
                <button onMouseOver={this.handleClick2}>Hover me1</button>
                <button onMouseOver={() => console.log("Hover button hovered")}> Hover me2  </button>   
                <button onMouseOver={this.handleClick4} onClick={this.handleClick4}>Click or hover me3</button>
                {/* Näitä varten pitää olla jo constructor: */}
                <div>
                    &nbsp;  <button onClick={this.handleClick5}>Change to 1!    </button>
                    &nbsp;  {this.state.count1}

                    &nbsp;  <button onClick={this.handleClick6}>Change to 1 more!</button>
                    &nbsp;  {this.state.count2}
                    
                    &nbsp;  <button onClick={this.handleClick7}>Change to double!</button>
                    &nbsp;  {this.state.count3}
                </div>
            </div>
        )
    }
}

export default nappiintro

