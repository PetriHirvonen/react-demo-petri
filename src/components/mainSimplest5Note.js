import React from 'react'
// Flow: MainSimplest5Note --> MainSimplest5App --> MainSimplest5osa2 --> UI:lle.


const MainSimplest5Note = ({ note }) => {
  
    return (
    <li>{note.content}</li>
  )
}

export default MainSimplest5Note





// HUOM: MainSimplest5App-filestä:
// Vanhassa Javascriptissä olio täytyi määritellä näin:
        // const person = {
        //   name: name,
        //   age: age
        // }
// Mutta jos muuttujien ja luotavan olio kenttien nimi on sama, riittää ES6:ssa kirjoittaa:
        // const person = { name, age }
//
// Lopputulos molemmilla tavoilla luotuun olioon on täsmälleen sama.