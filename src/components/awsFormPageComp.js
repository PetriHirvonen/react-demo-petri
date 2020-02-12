import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://0whxocdb8l.execute-api.us-east-1.amazonaws.com/dev/email/send';

class AwsFormPageComp extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            content: "",
            toast: "Viestiä ei ole lähetetty.",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("submit pressed");
        this.setState({ toast: 'Viestin lähetys käynnissä...' });
                
        const payload = {
            name: this.state.name,
            email: this.state.email,
            content: this.state.content,
        }
        console.log('payload: ', payload);
        
        axios.post(url, payload)
            .then(response => {
                console.log('HTTP response: ', response)
                if(response.status === 200){
                    //console.log("Http response 200: Email successfully sent.")
                    this.setState({ toast: 'KIITOS sinulle SADE-botti! Viestisi lähetys ennalta määriteltyyn mailiosoitteeseen onnistui!'})
                // Seuraavat 5 riviä ei tarpeen, eli toimii niiden kanssa ja ilman:
                // } else if(response.status === 500){
                //     console.log("Http response 500: Internal server error.")
                //     this.setState({ toast: 'Sorry. Ei onnistu. Error 500.'})
                // } else {
                //     console.log("Hmm. Some other code. Let´s wait if the message goes through.")
                }
            })
            .catch(error => {
                console.log('HTTP error: ', error)
            })

    }
    
    render() {
        console.log("render method now active!");
        console.log('render this.state: ', this.state);
        // const {name, email, content} = this.state;  //<== sama kuin seur. 3 riviä:
        const {name} = this.state.name;
        const {email} = this.state.email;
        const {content} = this.state.content;

        return (
            <div>
                <ul className="testirendercss">
                    <li>Email sending with form input</li>
                </ul>
                <div>
                    <form id="contactForm" onSubmit={this.handleSubmit}>
                        <br/> &nbsp; 
                        <label>Nimi: </label> &nbsp; 
                        <input type="text" placeholder="Kirjoita lähettäjän nimi" name="name" required value={name} onChange={this.handleChange}/>  &nbsp; 
                        <label>Email-osoite: </label> &nbsp; 
                        <input type="email" placeholder="Kirjoita lähettäjän email-osoite" name="email" required value={email} onChange={this.handleChange}/>  &nbsp; 
                        <label>Viesti: </label> &nbsp; 
                        <textarea rows="5" placeholder="Kirjoita emailin sisältö" name="content" required value={content} onChange={this.handleChange}></textarea>  &nbsp; 
                        <br/><br/><br/>
                        <div id="toast" > Viestistatus:  {this.state.toast} </div> 
                        <br/><br/> &nbsp; 
                        <button type="submit" id="submit">Lähetä sähköpostiviesti</button>
                    </form>
                    <br/><br/><br/>
                </div>
            </div>
        );
    }
}
export default AwsFormPageComp;
