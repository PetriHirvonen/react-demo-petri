//Business logic file, smart component, mandates how the rendered logic changes. Maintains state, have methods that update state.
import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json()) // tämä muuntaa sisääntulleen promise-datan js objektiksi
        .then(response => {       // tässä sitten saadaan meille hyödyllinen response
            const {memes} = response.data  // vedetään memes-array response datasta
            console.log(memes[0])   // otetaan huvikseen console logh memes-arrayn ensimmäisestä memestä
            this.setState({ allMemeImgs: memes})  // talletetaan memes-array uuteen state-propertyyn (nimeltä allMemeImgs)
        })  
    }

    handleChange(event){
        console.log("memeGenerator working")
        const {name, value} = event.target   // vedetään name ja value propertiet event.targetista eli mitä boxeihin kirjoitetaan
        this.setState({ [name]: value })     // updeitataan state
    }

    handleSubmit(e){
        e.preventDefault();
        // ensin saadaan random int numero ja sitten kerrotaan se meme images arrayn pituudella: (jotta se on oikeasti oikean arrayn sisällä)
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        // sitten saadaan random meme k.o. indexistä ja laitetaan sille url property:
        const randMemeImg = this.state.allMemeImgs[randNum].url 
        // ja sitten updeitataan state:
        this.setState({ randomImg: randMemeImg})
    }

    render() {
        return(
            <div className="productsAppboxcss">
                <div>
                    <h6> MEME GENERATOR</h6>
                </div>
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" value={this.state.topText} name="topText" placeholder="Yläteksti" onChange={this.handleChange} />
                    <input type="text" value={this.state.bottomText} name="bottomText" placeholder="Alateksti" onChange={this.handleChange} />
                    <button>Gener8</button>
                    <br />
                    <br />
                </form>
                <div className="memecss">
                    <img  className="memeimgcss" src={this.state.randomImg} alt="" />
                    <h6 className="memetopcss"> {this.state.topText} </h6>
                    <h6 className="memebottomcss"> {this.state.bottomText} </h6>
                    <br />
                </div>
            </div>
        )
    }
}

export default MemeGenerator;

