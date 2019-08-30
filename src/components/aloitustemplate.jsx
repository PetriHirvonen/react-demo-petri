//https://www.youtube.com/watch?v=DLX62G4lc44&feature=youtu.be

import React, { Component } from 'react'

class Aloitustemplate extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
        }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log('...')
        const {name, value} = event.target
        this.setState({ 
            [name]: value
         })
    }

    handleSubmit(e){
        e.preventDefault();
        let submitoituetunimi = this.state.firstName;
        let submitoitusukunimi = this.state.lastName;
        alert('Hienoa '  + submitoituetunimi + ' ' + submitoitusukunimi + '. Tiedot submitoitu, siis feikisti!');
    }

    render() {
        console.log(this.state);
        return (
            <div className="productsAppboxcss">
                <div>
                    <br />
                    &nbsp; &nbsp; Aloitustemplate   
                    <br />
                </div>
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" value={this.state.firstName} name="firstName" placeholder="Etunimi" onChange={this.handleChange} />
                    <br />
                    <input type="text" value={this.state.lastName} name="lastName" placeholder="Sukunimi" onChange={this.handleChange} />
                    <br />
                    <p>Etunimi: {this.state.firstName}. Sukunimi: {this.state.lastName}. </p>
                    <hr />
                    <button>Submit</button>
                    <br />
                    <br />
                    <p style={{borderBottom: "1px solid #cecece"}} > </p>
                </form>
            </div>
            
        )
    }
}
    
export default Aloitustemplate
