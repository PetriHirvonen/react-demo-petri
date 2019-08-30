import React, { Component } from 'react'

class FetchdataapiApp extends Component {
    constructor() {
        super()
        this.state = {
            loading: false, // asetetaan loading-tila alkuun falseksi = ei ladata vielä APIsta
            henkilo: {},
            henkilo2: {},
            henkilo3: {},
            henkiloall: {},
            henkiloallsivu2: {},
            henkiloallsivu3: {},
        }
        //this.handleChange = this.handleChange.bind(this)
    }

    //seuraavassa käytetään ns. "promise" (.then-jutut)
    componentDidMount(){
        this.setState({loading: true}) // tässä muutetaan loading-tila true´ksi juuri ennen kuin loading alkaa seur.rivillä.
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json()) // tämä muokkaa incomin datan oikeaan muotoon
            //.then(data => console.log(data))  // tämä logittaa muttei seivaa!
            .then(data => {
                this.setState({
                    loading: false, //tässä muutetaan loading-tila takaisin false´ksi = ei ladata enää.
                    henkilo: data  //tässä seivataan incoming data henkilo-objektiin
                })
            })
        fetch("https://swapi.co/api/people/2")
            .then(response => response.json()) 
            .then(data => {
                this.setState({
                    henkilo2: data  //tässä seivataan incoming data henkilo-objektiin
                })
            })

        fetch("https://swapi.co/api/people/3")
            .then(response => response.json()) 
            .then(data => {
                this.setState({
                    henkilo3: data 
                })
            })

        fetch("https://swapi.co/api/people/")
            .then(response => response.json()) 
            .then(data => {
                this.setState({
                    henkiloall: data  
                })
            })


        fetch("https://swapi.co/api/people/?page=2")
        .then(response => response.json()) 
        .then(data => {
            this.setState({
                henkiloallsivu2: data  
            })
        })

        fetch("https://swapi.co/api/people/?page=3")
        .then(response => response.json()) 
        .then(data => {
            this.setState({
                henkiloallsivu3: data  
            })
        })
            
    }

    printAllValues (key) {
        if (this.state.henkiloall && this.state.henkiloall.results){
            /*const arrayOfKeys = [];
            this.state.henkiloall.results.forEach((element, index) => {
                console.log("Element:"+ element[key]);
                arrayOfKeys.push(<span key={index}>{element[key]}</span>);
            });
            */
            const arrayOfKeys = this.state.henkiloall.results.map((element, index) => {
                return (
                    <li key={index}>
                        {element[key]}
                    </li>
                );
            });
            return arrayOfKeys;
        }
    }
    
    printAllValuesSivu2 (key) {
        if (this.state.henkiloallsivu2 && this.state.henkiloallsivu2.results){
            const arrayOfKeyssivu2 = this.state.henkiloallsivu2.results.map((element, index) => {
                return (
                    <li key={index}>
                        {element[key]}
                    </li>
                );
            });
            return arrayOfKeyssivu2;
        }
    }   

         
    printAllValuesSivu3 (key) {
        if (this.state.henkiloallsivu3 && this.state.henkiloallsivu3.results){
            const arrayOfKeyssivu3 = this.state.henkiloallsivu3.results.map((element, index) => {
                return (
                    <li key={index}>
                        {element[key]}
                    </li>
                );
            });
            return arrayOfKeyssivu3;
        }
    }   

 
    


    render() {
        // seur.const: onko loading? jos on loading->display "loading", ja jos ei ole loading->display dataa:
        const loadtexti1 = this.state.loading ? "loading..." :  this.state.henkilo.name //
        console.log(this.state.henkilo);
        console.log(this.state.henkilo2);
        console.log(this.state.henkilo3);
        console.log(this.state.henkiloall);
        return (
            <div>
                <div className="productsAppboxcss">
                    <div>Ensin haetaan starwarsapin kautta kolme kärkinimeä:</div>
                    <div> 
                        <br></br> 
                    </div>
                    <div>
                        {/* Henkilö: {this.state.henkilo.name}  &nbsp; &nbsp; */}
                        Henkilö: {loadtexti1} &nbsp; &nbsp;
                        Pituus: {this.state.henkilo.height} &nbsp; &nbsp;
                        Paino: {this.state.henkilo.mass}
                    </div>
                    <div>
                        Henkilö: {this.state.henkilo2.name}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        Pituus: {this.state.henkilo2.height} &nbsp; &nbsp;
                        Paino: {this.state.henkilo2.mass}
                    </div>
                    <div>
                        Henkilö: {this.state.henkilo3.name}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        Pituus: {this.state.henkilo3.height} &nbsp; &nbsp; &nbsp;
                        Paino: {this.state.henkilo3.mass}
                    </div>
                </div>
            
                <div className="productsAppboxcss">
                    <div>Sitten haetaan starwarsapin kautta kolme ensimmäistä sivua:</div>
                    <div> 
                        <br></br> 
                    </div>
                    <div>
                        Count: {this.state.henkiloall.count} <br></br>
                        Henkilöt: {this.printAllValues("name")} <br></br>
                                  {this.printAllValuesSivu2("name")} <br></br>
                                  {this.printAllValuesSivu3("name")} <br></br>
                        Pituudet: {this.printAllValues("height")} <br></br>
                                  {this.printAllValuesSivu2("height")} <br></br>
                        Painot: {this.printAllValues("mass")} <br></br>
                                {this.printAllValuesSivu2("mass")} <br></br>
                    </div>  
                </div>
            </div>

        )
    }
}

export default FetchdataapiApp;





        // render() {
        //     return (
        //         <div className="productsAppboxcss">
        //             Henkilö: {this.state.henkilo.name}  &nbsp; &nbsp;
        //             Pituus: {this.state.henkilo.height} &nbsp; &nbsp;
        //             Paino: {this.state.henkilo.mass}
        //         </div>
        //     )
        // }


