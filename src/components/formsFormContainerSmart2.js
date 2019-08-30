//Business logic file, smart component, mandates how the rendered logic changes. Maintains state, have methods that update state.
import React, { Component } from 'react'
import FormsFormComponentDumbUI2 from "./formsFormComponentDumbUI2"

class FormsFormContainerSmart2 extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "",
            age: "",
            isVegan: false,
            isKosher: false,
            isLactosefree: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        //type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
        type === "checkbox" ?
            this.setState({
                [name]: checked     
            }) 
        : 
        this.setState({ 
            [name]: value
         })
    }

    //seuraavassa handleSubmitissa a.o. e.preventDefault tekee sen että sivu ei re-loadaa joka kerta kun painaa Submit-nappia:
    handleSubmit(e){
        e.preventDefault();
        let submitoituetunimi = this.state.firstName;
        let submitoitusukunimi = this.state.lastName;
        alert('Hienoa '  + submitoituetunimi + ' ' + submitoitusukunimi + '. Tiedot submitoitu! (feikisti ainakin....)');
    }

    render() {
        return(
            <FormsFormComponentDumbUI2 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}  // sama kuin a.o. paitsi että pitää käyttää DumbUI filessä {props.data.firstName} etc
                // {...this.state}  // sama kuin y.o. paitsi että pitää käyttää DumbUI filessä {props.firstName} etc
            />
        )
    }
}

export default FormsFormContainerSmart2;


