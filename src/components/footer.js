// import React, { Component } from 'react';
//   
// class Footer extends Component {
//     render() {
//          console.log("footerladattu...");
//          return (
//             <div className="footercss"> 
//                 Copyright PMH.
//             </div>
//          );
//      }
// }

//Y.o. on sama kuin:
// import React from 'react';
//   
// function Footer () {
//          return (
//             <div className="footercss"> 
//                 Copyright PMH funktiolla.
//             </div>
//          );
// }

//Y.o. on sama kuin:
//import React from 'react';
//const Footer = () => <div className="footercss"> Copyright PMH arrow funktiolla. </div>
// Huom. arrow functionin voi korvata aina arrow funktiolla, toimii ihan samoin. 

//Y.o. on sama kuin:
import React from 'react';
const Footer = () => <footer className="footercss"> Copyright PMH --- Footer componentti footer elementillä + arrow funktiolla. </footer>


export default Footer;

