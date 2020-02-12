import React, { Component } from 'react';

export default class MainSimplest3taulukko extends Component {

    render() {

      const taulu1 = [1, 3, 5, 7, 9, 11]
      console.log(taulu1)

      // "map" muodostaa taulukon perusteella uuden taulukon:
      const taulu2 = taulu1.map((luku) => luku * 2)
      console.log(taulu2)

      const taulu3 = taulu1.map((luku) => '<li>' + luku + '</li>')
      console.log(taulu3)

      // const Taulu4 = {taulu3}  // printtaa errorin. Pitää olla näin:
      const Taulu4 = () => {
        //return (<div> <p>{taulu3}</p> </div>)
        //Tai kaikki taulut: 
        return (<div> <p>{taulu1}, {taulu2}, {taulu3}</p> </div>)
      }

      // destrukturointi:
      const [eka, toka, ...loput] = taulu1
      console.log(eka, toka)
      console.log(loput)

      //const voi olla myös olio, jolle annetaan propertyjä:
      const olio2 = {
        nimi: 'Full Stack -websovelluskehitys',
        taso: 'mid',
        laajuus: 5
      }
      console.log(olio2.taso)




      
      return (
          <div>
              <h6>Simplest greetings3</h6>
              <Taulu4 />
          </div>
      )

    }


}

