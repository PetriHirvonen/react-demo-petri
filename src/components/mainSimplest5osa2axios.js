import React, { Component } from 'react';
import axios from "axios";
// Flow: suoraan MainSimplest5osa2axios´ta --> UI:lle.

// Toimii:
// axios.get(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/getmany`).then(response => {
//    const axiosnotes = response.data
// console.log("axiosnotes: ", axiosnotes) 
// });

export default class MainSimplest5osa2axios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            axiosnotes: [],
            // showAll: true,
        }
        console.log("axiosnotes constructorista:", this.state.axiosnotes);  // prints --
    }
     
    //"axios.get(`https://xyz`)" pyyntö on promise, jonka tulos luetaan metodilla ".then": 
    componentDidMount() {
        console.log('componentDidMount starts')
        axios
          .get(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/getmany`)
          .then(response => {
            const axiosnotes = response.data  // <- ottaa vastauksen datan muuttujaan "axiosnotes"
            console.log('promise fulfilled PRE-setState, axiosnotes:', this.state.axiosnotes)  // prints --
            this.setState({ axiosnotes: response.data })  // tallettaa vastauksen datan muuttujaan "axiosnotes"
            console.log('promise fulfilled POST-setState, axiosnotes:', this.state.axiosnotes)  // prints db ok
            return ( <span>{axiosnotes}</span> );  // Tämä return tekee sen että tulos printtautuu webbisivulle.
          })
        console.log('componentDidMount this.state: ', this.state.axiosnotes)  // prints -- koska tapahtuu ennen rivä 30 !!
      }

    render() {
        console.log("axiosnotesRenderista: ", this.state.axiosnotes)  // prints --  JA SITTEN prints db ok

        return (
            <div>
                <div>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>
                <span>DB:n haku ja näyttö suoraan MainSimplest5osa2axios.js filen kautta:     </span>
                <table>
                    <tbody>
                        {
                            this.state.axiosnotes.map(row => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.reason}</td>
                                    <td>{row.urgent}</td>
                                    <td>{row.dateCreated}</td>
                                    <td>{row.timeCreated}</td>
                                    <td>{row.timeUpdated}</td>
                                </tr>
                            ))
                        }    
                    </tbody>
                </table>
                <div>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>
            </div>
        )
    }

}

