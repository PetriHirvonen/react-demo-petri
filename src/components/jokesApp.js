import React from 'react';
import Joke from './joke';
import JokesData from './jokesData';


function JokesApp () {

    // Esimerkki ja konsolelogitus miten map toimii:
    // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const doubled = nums.map(function(num) {
    //     return num * 2 + 1
    // })
    // console.log(doubled)  // ==>  "(10) [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]"

    
    //seuraavassa arrow funktiolla tehty tämä: jokesData.map(function() { })
    //lisätietoa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    // ...plus //Filter, Sort, Reduce, Every, Some, Find, Findindex
    //eli siis hakee jokesData.js filestä questionit ja punchlinet arrayksi ja printtaa ne:
    const jokeComponents = JokesData.map(joke => {
        return (
            <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} validity={joke.validity} />
        )
    })
    // ...jonka tuon y.o:n voisi kirjoittaa myös yhdelle riville näin:
    // const jokeComponents = JokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)
    
    
    return (
        <div className="todolistcss">
            {jokeComponents} 
        </div>
    );
}

  
export default JokesApp;
   



// HUOM: ennen jokesData.js filen luontia (joka simuloi db rajapintaa), kysymykset ja vastaukset olivat tässä JokesApp.js filessä, näin:
// function JokesApp () {
//     return (
//         <div className="todolistcss">
//             <Joke question="Ekauusi kysymys, miten on?" punchLine="Eka öö, hmm1." />
//             <Joke punchLine="Toka öö, hmm2."/>
//             <Joke question="Koka kysymys, miten on?" punchLine="Eka öö, hmm3."/>
//             <Joke question="Neka kysymys, miten on?" punchLine="Eka öö, hmm4."/>
//         </div>
//     );
// }