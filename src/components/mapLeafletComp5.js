import React, { Component } from 'react'
//mport { Map, TileLayer, Marker, Popup, Viewport } from "react-leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
// import { render } from 'react-dom';
// // import styled from 'styled-components';
// // import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import importOmastaFolderista from '../icons/foodicon3.PNG'
import L from 'leaflet';
//import 'leaflet/dist/leaflet.css';

// Leaflet webbisivu: https://www.npmjs.com/package/leaflet
  
export default class MapLeaflet5 extends Component {
    constructor() {
        super();
        this.state = {
          lat: 60.389487, 
          lng: 23.102628,
          zoom: 13,
          pitch: 31,
          bearing: 32,
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        };
     
        console.log("super zoom: " + this.state.zoom);
    };
  
  //Huom. kun käyttää mapInstancea alla, pitää renderiin laittaa ref={e => { this.mapInstance = e }}
  componentDidMount () {
       this.kartta = this.mapInstance.leafletElement;
       this.kartta.setView([this.state.lat, this.state.lng], this.state.zoom);
       console.log(this.kartta._zoom);  
  }

  userActionStyleZoomDefault () {
    console.log("StyleZoomDefault clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      // zoom: 6,  // Tämä ei vaikuta mihinkään käytännössä
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);

    console.log(this.kartta._zoom);      // printtaa aina sen hetken zoomin kun nappia painetaan, esim. 4.11, 8.9999, jne jos zoomaa sisään 1 -> 15 ja kliksuttelee
    console.log(this.kartta._lastCenter); // printtaa aina sen hetken sijainnin kun nappia painetaan, a´la y.o. 
    console.log("DefaultStyleZoom  url: " + this.state.url);  // printtaa AINA constructor values, t.s. yllä L.tileLayerissä määritelty url ei mene koskaan this.stateen (vaan on aina pelkkä view)
  }

  userActionStyleDefault () {
    console.log("StyleDefault clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111222, 23.102628111222], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }

  userActionStyle2() {
    console.log("Style2 clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 15);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }

  userActionStyle3() {
    console.log("Style3 clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 15);
    L.tileLayer('https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }

  userActionStyle4() {
    console.log("Style4 clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 15);
    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }
  
  userActionStyle5() {
    console.log("Style5 clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 15);
    L.tileLayer('https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }

  userActionStyle6() {
    console.log("Style6 clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 15);
    L.tileLayer('http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }

  userActionStyle7() {
    console.log("Style7 clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 15);
    L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }


  userActionStyle8 () {
    console.log("StyleZoomDefault clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.setView([60.389487111, 23.102628111], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }
 
  userActionStyle8Fly () {
    console.log("StyleZoomDefault clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.flyTo([60.389487111, 23.102628111], 15, {
      animate: true,
      duration: 1.5
    });
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);
  }

  userActionStyle8FlyOut () {
    console.log("StyleZoomDefault clicked");
    this.kartta = this.mapInstance.leafletElement;
    this.kartta.flyTo([60.389487111, 23.102628111], 8, {
      animate: true,
      duration: 3
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      detectRetina: true,
      //zoom: 6,  // Tämä ei vaikuta mihinkään käytännössä
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.kartta);

    console.log(this.kartta._zoom);      // printtaa aina sen hetken zoomin kun nappia painetaan, esim. 4.11, 8.9999, jne jos zoomaa sisään 1 -> 15 ja kliksuttelee
    console.log(this.kartta._lastCenter); // printtaa aina sen hetken sijainnin kun nappia painetaan, a´la y.o. 
    console.log("Style3FlyOut url: " + this.state.url);  // printtaa AINA constructor values, t.s. yllä L.tileLayerissä määritelty url ei mene koskaan this.stateen (vaan on aina pelkkä view)
  }


  render() {
    const position = [this.state.lat, this.state.lng] 
    const myIcon = L.icon({
      iconUrl: importOmastaFolderista,
      iconSize: [35, 35]
    });
    console.log("render zoom: " + this.state.zoom);
    console.log("render pitch: " + this.state.pitch);
    console.log("render bearing: " + this.state.bearing);
    console.log("render url: " + this.state.url);
    //HUOM: vaikka alle renderiin laittaa  pitch={this.state.pitch} bearing={this.state.bearing} minne,
    //niin ne eivät näy kartassa. Ne kuitenkin näkyvät console logissa. Miksihän? Not supported?

    //console.log(this.kartta._zoom);      // prints SADE15 values
    //console.log(this.kartta._lastCenter); // prints SADE15 values

    return (
      <div>
        <div >
          {/* HUOM: Alla this.mapInstance ajaa a.o. TileLayerin yli, eli a.o. TileLayerun url yliajetaan eikä näytetä */}
          <Map className="karttaruutucss" ref={e => { this.mapInstance = e }} center={position} zoom={this.state.zoom} >
            <TileLayer 
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              url={this.state.url}
            />
            <Marker position={position} icon={myIcon} >
              <Popup>
                Esimerkki-popup5. <br /> Omasta hakemistosta.
              </Popup>
            </Marker>
          </Map>
        </div>

        <div>
                    <br></br>
                    <button onClick={e => this.userActionStyleZoomDefault()}> Default Style, default zoom 13</button>
                     &nbsp; &nbsp; 
                    <button onClick={e => this.userActionStyleDefault()}> Default Style, zoom 15</button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle2()}> Style#2, zoom 15 </button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle3()}> Style#3, zoom 15 </button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle4()}> Style#4, zoom 15 </button>
                     <br></br>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle5()}> Style#5, zoom 15 </button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle6()}> Style#6, zoom 15 </button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle7()}> Style#7, zoom 15 </button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle8()}> Style#8, zoom 15 </button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle8Fly()}> Style#8 Fly, zoom 15 </button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionStyle8FlyOut()}> Style#8 FlyOut, zoom 8 </button>
                </div>

      </div>

      

    )
  }
}

