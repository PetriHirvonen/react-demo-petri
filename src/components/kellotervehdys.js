import React from 'react';
//https://youtu.be/DLX62G4lc44

function Kellotervehdys () {
    const pvm = new Date ();
    const tunnit = pvm.getHours();
    const minuutit = pvm.getMinutes();
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

    console.log('Kello on ' + tunnit + ":" + minuutit + " " + aikapaivasta);

    
    // huom kaikki mikä on {sisällä: React tulkitsee javascriptiksi}
    return (
             <div>  
                <span style={kellotyyli}> Kello on {tunnit}:{minuutit}. </span>
                <span style={muuttuvatyyli}>Hyvää {aikapaivasta}! </span> 
             </div>
    );
}


export default Kellotervehdys;
