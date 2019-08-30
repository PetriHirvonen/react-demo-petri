import React, { Component } from 'react';

class Testirender extends Component {
    render() {
//function Testirender() {
                    console.log("testirender ladattu...");
                    return (
                        <ul className="testirendercss">
                            <li>1testirender.js file</li>
                            <li>2opt</li>
                            <li>3li</li>
                        </ul> 
                    );
    }
}
export default Testirender;


// Huom: toimii myös jos käyttää  "function Testirender() {" JOS ottaa seuraavat yo. rivit pois:
// class Testirender extends Component {
//     render() {
//     }



  