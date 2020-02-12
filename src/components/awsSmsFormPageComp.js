import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://dbhunmt888.execute-api.us-east-1.amazonaws.com/dev/sendSms';

class AwsSmsFormPageComp extends Component {

    constructor() {
        super()
        this.state = {
            sender: "",
            receiver: "",
            message: "",
            toast: "Tekstiviestiä ei ole lähetetty.",
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
        this.setState({ toast: 'Tekstiviestin lähetys käynnissä...' });
                
        const payload = {
            sender: this.state.sender,
            receiver: this.state.receiver,
            message: this.state.message,
        }
        console.log('payload: ', payload);
        
        axios.post(url, payload)
            .then(response => {
                console.log('HTTP response: ', response)
                if(response.status === 200){
                    //console.log("Http response 200: Sms successfully sent.")
                    this.setState({ toast: 'KIITOS sinulle SADE-botti! Viestisi lähetys antamaasi puhelinnumeroon onnistui!'})
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
        // const {sender, receiver, content} = this.state;  //<== sama kuin seur. 3 riviä:
        const {sender} = this.state.sender;
        const {receiver} = this.state.receiver;
        const {message} = this.state.message;

        return (
            <div>
                <ul className="testirendercss">
                    <li>SMS sending with form input</li>
                </ul>
                <div>
                    <form id="contactForm" onSubmit={this.handleSubmit}>
                        <br/> &nbsp; 
                        <label>Nimi: </label> &nbsp; 
                        <input type="text" placeholder="Kirjoita lähettäjän nimi" name="sender" required value={sender} onChange={this.handleChange}/>  &nbsp; 
                        <label>Puhelinnumero: </label> &nbsp; 
                        <input type="tel" placeholder="Kirjoita receiverin puh.nro" name="receiver" required value={receiver} onChange={this.handleChange}/>  &nbsp; 
                        <label>Viesti: </label> &nbsp; 
                        <textarea rows="5" placeholder="Kirjoita tekstiviestin sisältö" name="message" required value={message} onChange={this.handleChange}></textarea>  &nbsp; 
                        <br/><br/><br/>
                        <div id="toast" > Tekstiviestistatus:  {this.state.toast} </div> 
                        <br/><br/> &nbsp; 
                        <button type="submit" id="submit">Lähetä sms-viesti!</button>
                    </form>
                    <br/><br/><br/>
                </div>
            </div>
        );
    }
}
export default AwsSmsFormPageComp;