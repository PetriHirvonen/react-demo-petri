import React, { Component } from 'react';
import MainSimplest5App from './mainSimplest5App';
//import MainSimplest5PetriTest, { testPetriValueSuoraExport1, testPetriValueSuoraExport2, testPetriValueSuoraExport3a, testPetriValueSuoraExport3b  }  from './mainSimplest5PetriTest';
// Y.o. rivi on sama kuin seur. 5 riviä:
import MainSimplest5PetriTest from './mainSimplest5PetriTest';
import { testPetriValueSuoraExport1  } from './mainSimplest5PetriTest';
import { testPetriValueSuoraExport2  } from './mainSimplest5PetriTest';
import { testPetriValueSuoraExport3a  } from './mainSimplest5PetriTest';
import { testPetriValueSuoraExport3b  } from './mainSimplest5PetriTest';
// Flow: MainSimplest5Note --> MainSimplest5App --> MainSimplest5osa2 --> UI:lle.


export default class MainSimplest5osa2 extends Component {

    componentDidMount() {
        console.log('mainSimplest5osa2_componentDidMount')
        //console.log("MainSimplest5PetriTest: ", MainSimplest5PetriTest)  // logittaa koko filen!
        console.log("MainSimplest5PtestPetri_1: ", testPetriValueSuoraExport1)  // logittaa oikein k.o. const´in arvon toisesta filestä!
        console.log("MainSimplest5PtestPetri_2: ", testPetriValueSuoraExport2)  // logittaa oikein k.o. const´in arvon toisesta filestä!
        console.log("MainSimplest5PtestPetri_3a: ", testPetriValueSuoraExport3a)  // logittaa oikein k.o. const´in arvon toisesta filestä!
        console.log("MainSimplest5PtestPetri_3b: ", testPetriValueSuoraExport3b)  // logittaa oikein k.o. const´in arvon toisesta filestä!
    }

    render() {
        const notes = [
        {
            id: 1,
            content: 'HTML on helppoa',
            date: '2017-12-10T17:30:31.098Z',
            important: true
        },
        {
            id: 2,
            content: 'Selain pystyy suorittamaan vain javascriptiä',
            date: '2017-12-10T18:39:34.091Z',
            important: false
        },
        {
            id: 3,
            content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
            date: '2017-12-10T19:20:14.298Z',
            important: true
        }
        ]

        const notesMapIDRenderista = notes.map(note => note.id)
        const notesMapContentRenderista = notes.map(note => note.content)
        const notesMapDateRenderista = notes.map(note => note.date)
        console.log("notesMapIDRenderista: ", notesMapIDRenderista)
        console.log("notesMapContentRenderista: ", notesMapContentRenderista)
        console.log("notesMapDateRenderista: ", notesMapDateRenderista)
        
        console.log("notesRenderista: ", notes)

        return (
            <div>
                <MainSimplest5App notes={notes} />   Tämä returnaa ulos tästä filestä kaikkien notesien koko sisällön
                <MainSimplest5App notes={notesMapIDRenderista} />   Tämä returnaa ulos vain id´t
                <MainSimplest5App notes={notesMapContentRenderista} />   Tämä returnaa ulos vain Contentit
                <div>.........................................</div>
                <MainSimplest5PetriTest /> &nbsp; SUORA CONST IMPORT:  &nbsp;
                { testPetriValueSuoraExport1 } &nbsp;
                { testPetriValueSuoraExport2 } &nbsp;
                { testPetriValueSuoraExport3a } &nbsp;
                { testPetriValueSuoraExport3b } &nbsp;
                                
            </div>
        )
    }

}

