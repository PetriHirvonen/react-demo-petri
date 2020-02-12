import React, { Component } from 'react';
import MainSimplest5Note from './mainSimplest5Note';
// Flow: MainSimplest5Note --> MainSimplest5App --> MainSimplest5osa2 --> UI:lle.
 
export default class MainSimplest5App extends Component {
    // HUOM: tässä tuodaan notes propseina sisään -> voidaan renderöidä returnissa this.state.notes.map eikä this.props.notes.map. Tämä VOI OLLA ONGELMA jos propsit muuttuvat.
    // Näin ollen ihan sivun alareunassa oleva tapa käyttää suoraan renderissä propseja voi olla parempi.
    constructor(props) {
        super(props)
        this.state = {
          uutekstiiuu: "uyuy: ", 
          notes: props.notes,
          newNote: "lisää tähän note" ,
          showAll: false,
        }
        console.log("notes constructorista:", this.state.notes);
        console.log("notesMapIDRenderista constructorista:", this.state.notesMapIDRenderista);  // prints UNDEFINED
    }
    
  
    addNote = (event) => {
        event.preventDefault()
        console.log('nappia painettu')
        const newNoteObject = {
            content: this.state.newNote,
            date: new Date().new,
            important: Math.random() > 0.5,  // tämän avulla muistiinpanosta tulee 50% todennäköisyydellä tärkeä.
            id: this.state.notes.length + 1
        }
        const notes = this.state.notes.concat(newNoteObject)  // Tämä on oikeaoppinen tapa lisätä vanhojen joukkoon uusia: concat luo aina uuden taulukon = ei muuta suoraan statea = hyvä!!
        this.setState({
            notes: notes,  // notes-tila päivitetään uusilla arvoilla. Tämän rivin voi myös kirjoittaa muotoon "notes," (eli kerran vaan kirjoittaa notes)
            newNote: 'lisää vielä...'    // tyhjennetään syötekomponentin kenttä
        })
    }
    //**HUOM** Jotta formin boxiin voi kirjoittaa, täytyy sille tehdä eventhandler, joka onChangen kautta synkronoi syötekenttään tehdyt muutokset: 
    handleNoteChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNote: event.target.value })
    }

    Petritestorg() {
        const testPetri1org = 1;
        console.log("testPetri1_org value is: ", testPetri1org);
        const testPetri2org = 2;
        console.log("testPetri2_org value is: ", testPetri2org);
        return testPetri1org + testPetri2org;
    }

    // Toiminnallisuus, mikä mahdollistaa showAll:in tilan muuttamisen sovelluksesta: 
    // "toggleVisible" muuuttaa this.state.showAll:in arvon truesta falseksi ja päinvastoin: 
    toggleVisible = () => {
        this.setState({showAll: !this.state.showAll})
      }


    render() {
        console.log("this.props.notes: ",  this.props.notes); // printtaa kaikki mainSimplest5osa2.js-filen notesit
        console.log("this.props.notes.id: ",  this.state.notes.id); // printtaa UNDEFINED
        // Muutetaan metodia render siten, että se tallettaa muuttujaan notesToShow näytettävien muistiinpanojen listan riippuen siitä tuleeko näyttää kaikki vai vain tärkeät:
        const notesToShow =
        this.state.showAll ? // Tämä rivi on "ehto". Jos "ehto" on...:
          this.state.notes : // ...TOSI -> muuttujan notesToShow arvoksi tulee tämän rivin arvo = näyttää kaikki muistiinpanot. 
          this.state.notes.filter(note => note.important === true) // ...EPÄTOSI -> arvoksi tulee tämän rivin arvo.
          //HUOM: y.o. rivin voisi myös lyhentää muotoon this.state.notes.filter(note => note.important)
        // Jos siis ehto "this.state.showAll" on EPÄTOSI, muuttuja notesToShow saa arvokseen vain ne muistiinpanot,
        // joiden "important"-kentän arvo on tosi. Filtteröinti tapahtuu taulukon metodilla filter.

        //Toggle-napin teksti: Napin tekstin muuttuva osa määräytyy showAll:in staten perusteella: 
        const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'
                 

        return (
            <div>
                <p> Petritest_org return, value is:  {this.Petritestorg()}</p>
                <h6>Muistiinpanot</h6>
                {this.state.uutekstiiuu}
                <div>
                    <button onClick={this.toggleVisible}>  Näytä {label}  </button>
                </div>
                <ul>
                    {/* {this.state.notes.map(note => <MainSimplest5Note key={note.id} note={note} />)} */}
                    { notesToShow.map(note => <MainSimplest5Note key={note.id} note={note} />) }
                </ul>
                <form onSubmit={this.addNote}>
                    <input value={this.state.newNote}  onChange={this.handleNoteChange}/>
                    <button type="submit">tallenna</button>
                </form>
          </div>
        )
    }
}

// A.o. funktionaalinen komponentti on TASAN SAMA kuin a.a.o. luokkakomponentti:

// import React from 'react';
// import MainSimplest5Note from './mainSimplest5Note';
// // Flow: MainSimplest5Note --> MainSimplest5App --> MainSimplest5osa2 --> UI:lle.

// const MainSimplest5App = ({ notes }) => {
//     console.log("notes: ",  notes);
//     return (
//     <div>
//       <h6>Muistiinpanot</h6>
//       <ul>
//         {notes.map(note => <MainSimplest5Note key={note.id} note={note} />)}
//       </ul>
//     </div>
//   )
// }
// export default MainSimplest5App



// Y.o. funktionaalinen komponentti on TASAN SAMA kuin a.o. luokkakomponentti: HUOM: constructoria ei tarvita koska mäpätään
// {this.props.notes.map(note => <MainSimplest5Note key={note.id} note={note} />)}   EIKÄ MÄPÄTÄ:
// {this.state.notes.map(note => <MainSimplest5Note key={note.id} note={note} />)}   (<<--- tarvitsee constuctorin johon tuodaan props.notes)

// import React, { Component } from 'react';
// import MainSimplest5Note from './mainSimplest5Note';
// // Flow: MainSimplest5Note --> MainSimplest5App --> MainSimplest5osa2 --> UI:lle.

// export default class MainSimplest5App extends Component {
//     render() {
//         console.log("this.props.notes: ",  this.props.notes);
//         return (
//             <div>
//                 <h6>Muistiinpanot</h6>
//                 <ul>
//                     {this.props.notes.map(note => <MainSimplest5Note key={note.id} note={note} />)}
//                 </ul>
//           </div>
//         )
//     }
// }
