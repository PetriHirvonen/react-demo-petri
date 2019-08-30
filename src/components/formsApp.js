import React, { Component } from 'react'

class FormsApp extends Component {
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
        //this.setState({
            // firstName: event.target.value // <--- "value" viittaa mitä input boxiin on kirjoitettu,
            // ts. state muuttuu joka kerta kun boxiin kirjoitetaan jotain
            // HUOM. y.o. toimii kun input boxeja on yksi (esim vain firstName), mutta jos niitä on useampi,
            // pitää tehdä näin....:
            // [event.target.name]: event.target.value
        // ...ja bugivarmempi tapa tehdä tasan sama on luomalla ensin const ja tehdä sama sen kautta, näin:
        //const {name, value} = event.target
        //this.setState({
        //    [name]: value
        //})
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
        console.log(this.state);
        return (
            <div>
            <div>
                Form1 example 1 below. Used for traveller profiling. 
            </div>
            <div className="productsAppboxcss">
                <div>
                    In this implementation, everything is in formsApp.js file.
                </div>
                <form onSubmit={this.handleSubmit}> 
                    {/* Tämä olisi "uncontrolled form", eli state on reactive eli määräytyy sen mukaan mitä user kirjoittaa boxiin: */}
                    {/* <input type="text" name="firstName" placeholder="Etunimi" onChange={this.handleChange} /> */}
                    {/* Tämä on "controlled form"(joka on parempi jotta state on varmasti "single state of truth"), 
                      eli state itse asiassa OHJAA mitä boxissa näkyy sen jälkeen kun siihen on kijoitettu: */}
                    <input type="text" value={this.state.firstName} name="firstName" placeholder="Etunimi" onChange={this.handleChange} />
                    <br />
                    {/* <input type="text" name="lastName" placeholder="Sukunimi" onChange={this.handleChange} /> */}
                    <input type="text" value={this.state.lastName} name="lastName" placeholder="Sukunimi" onChange={this.handleChange} />
                    <br />
                    <textarea type="text" name="moreInfo" placeholder="lisätietoja" onChange={this.handleChange} />
                    <br />
                    <label>
                        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> Male
                        <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} /> Female
                    </label>
                    <label>  &nbsp; &nbsp; Favorite color: </label>
                    <select name="favColor" value={this.state.favColor} onChange={this.handleChange} > 
                        <option value="<valitse>" > Ei valittu </option>
                        <option value="sininen." > Blue </option>
                        <option value="valkoinen." > White </option>
                        <option value="musta." > Black </option>
                    </select>
                    <span> &nbsp; &nbsp; 
                        <input type="number"  value={this.state.age} name="age" placeholder="Ikä" onChange={this.handleChange} />
                        {/* <input type="number" name="age" placeholder="Ikä" onChange={this.handleChange} /> */}
                    </span>
                    <br />
                    <label> Dietary restrictions: 
                        <input type="checkbox" name="isVegan" checked={this.state.isVegan} onChange={this.handleChange} /> Vegan?
                        <input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange} /> Kosher?
                        <input type="checkbox" name="isLactosefree" checked={this.state.isLactosefree} onChange={this.handleChange} /> Lactose-Free?
                    
                    </label>
                    <label style={{borderBottom: "1px solid #cecece"}} >
                        <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} /> Friendly?
                    </label>
                    <p 
                        style={{borderBottom: "1px solid #cecece"}} >
                    </p>
                    <p>Etunimi: {this.state.firstName}. Sukunimi: {this.state.lastName}. Ikä:  {this.state.age}. Lisätietoja:{this.state.moreInfo}.  </p>
                    <p>On  {this.state.isFriendly ? "ystävällinen " : " "} {this.state.gender}. Lempiväri on {this.state.favColor} </p>
                    <p>Dietary restrictions: 
                        Vegan:  {this.state.isVegan ? "Yes. " : "No. "}
                        Kosher:  {this.state.isKosher ? "Yes. " : "No. "}
                        Lactose Free:  {this.state.isLactosefree ? "Yes. " : "No. "}
                    </p>
                    <hr />
                    <button>Submit</button>
                    <br />
                    <br />
                    <p style={{borderBottom: "1px solid #cecece"}} > </p>
                </form>
            </div>
            </div>
        )
    }
}

export default FormsApp;


