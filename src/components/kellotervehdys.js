import React from 'react';
//https://youtu.be/DLX62G4lc44


function checkTime(liianpieni) {
    if (liianpieni < 10) {
      liianpieni = "0" + liianpieni;
    }
    return liianpieni;
}

function Kellotervehdys () {
    var pvm = new Date ();
    var tunnit = pvm.getHours();
    var minuutit = pvm.getMinutes();
    var sekunnit = pvm.getSeconds();
    // "0" minuuttien ja sekunttien eteen jos <10 : 
        minuutit = checkTime(minuutit);
        sekunnit = checkTime(sekunnit);
    let aikapaivasta;
    const kellotyyli = {
        color: "white",
        backgroundColor: "black",
        fontSize: 20
    }
    const muuttuvatyyli = {
        color: "yellow",
        backgroundColor: "black",
        fontSize: "20px"
    }

    if (tunnit < 12) {
        aikapaivasta = "huomenta";
    } 
    else if (tunnit >= 12 && tunnit < 17) {
        aikapaivasta = "iltapäivää";
        muuttuvatyyli.backgroundColor = "orange";
        muuttuvatyyli.color = "black";   
    } 
    else if (tunnit >= 17 && tunnit < 22) {
        aikapaivasta = "iltaa";
        muuttuvatyyli.backgroundColor = "red";
        muuttuvatyyli.color = "orange";    
    } 
    else {
        aikapaivasta = "yöaikaa";
    }
     console.log('Kello on ' + tunnit + ":" + minuutit + ":" + sekunnit + "...siis: " + aikapaivasta);
    
    // huom kaikki mikä on {sisällä: React tulkitsee javascriptiksi}
    return (
             <div>  
                <span style={kellotyyli}> Kello on {tunnit}:{minuutit}. </span>
                <span style={muuttuvatyyli}>Hyvää {aikapaivasta}! </span> 
             </div>
    );
}


export default Kellotervehdys;




// function checkTime(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
// }
//   
// function Kellotervehdys() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     // add a zero in front of numbers<10
//     m = checkTime(m);
//     s = checkTime(s);
// 
// console.log('Kello on ' + h + ":" + m + ":" + s);
//     
// return (
//          <div>  
//             <span > Kello on {h}:{m}. </span>
//         </div>
// );
// }
// export default Kellotervehdys;

