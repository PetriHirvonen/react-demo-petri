import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Viewport } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
// import { render } from 'react-dom';
// // import styled from 'styled-components';
// // import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import importOmastaFolderista from '../icons/foodicon3.PNG'
import L from 'leaflet';

// Leaflet webbisivu: https://www.npmjs.com/package/leaflet
// Huom: ei eroa onko tämä js vai jsx file, works the same 

export default class MapLeaflet4 extends Component {
    constructor() {
        super();
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13,
        };
     
        console.log("super zoom: " + this.state.zoom);
    };

  
  render() {
    const position = [this.state.lat, this.state.lng]
    const myIcon = L.icon({
      iconUrl: importOmastaFolderista,
      iconSize: [35, 35]
  });
    return (
      <Map className="karttaruutucss" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon} >
          <Popup>
            Esimerkki-popup4. <br /> Omasta hakemistosta.
          </Popup>
        </Marker>
      </Map>
    )
  }
}







// export default class MapLeaflet4 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             center: [60.389487, 23.102628],
//             zoom: 6, 
//             maxZoom: 20,
//             //watch: false,
//             //detectRetina: true,
//             zoomControl: true, 
//         };
//         // this.userActionIotCampusSADE15 = this.userActionIotCampusSADE15.bind(this);
//         // this.userActionDefaultView = this.userActionDefaultView.bind(this);
//         // this.userActionSaloMarketPlace = this.userActionSaloMarketPlace.bind(this);
//         // this.userActionSaloMarketPlaceFast = this.userActionSaloMarketPlaceFast.bind(this);
      
//         console.log("super zoom: " + this.state.zoom);
//     };

//     componentDidMount () {
//         this.kartta = this.mapInstance.leafletElement
//         // Leaflet provider menu, i.e. tyylit:
//         // https://leaflet-extras.github.io/leaflet-providers/preview/
//         // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
//         // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
//         // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//         // }).addTo(this.kartta);
//         console.log("componentDidMount, this.kartta:");
//         console.log(this.kartta);  
//         console.log("componentDidMount, this.kartta._zoom ja -lastCenter:");
//         console.log(this.kartta._zoom);  
//         console.log(this.kartta._lastCenter);  
//     }

//     userActionIotCampusSADE15() {
//         console.log("SADE15 clicked");
//         this.kartta.setView([60.389487111, 23.102628111], 15);
//         // Muoto:this.kartta.setView([latitude, longitude] zoom);
//         console.log(this.state);          // prints constructor values
//         console.log(this.state.zoom);      // prints constructor values
//         console.log(this.state.center);      // prints constructor values
//         console.log(this.kartta._zoom);      // prints SADE15 values
//         console.log(this.kartta._lastCenter); // prints SADE15 values
//     };

//     userActionDefaultView() {
//         console.log("Default view clicked");
//         this.kartta.setView([60.389487, 23.102628], 6);
//     }

//     userActionSaloMarketPlace() {
//         console.log("SMP clicked");
//         this.kartta.flyTo([60.385288, 23.128452], 17, {
//             animate: true,
//             duration: 6.5
//         });
//     }

//     userActionSaloMarketPlaceFast() {
//         console.log("SMP clicked");
//         this.kartta.flyTo([60.385288, 23.128452], 17, {
//             animate: true,
//             duration: 1.5
//         });
//     }

//     render () {
//         console.log("renderistä: "); 
//         console.log(this.state.zoom);  // prints constructor value
//         console.log(this.state.center);  // prints constructor values
//         const markerPosition = [60.385288, 23.128452];
//         const myIcon = L.icon({
//             iconUrl: importOmastaFolderista,
//             iconSize: [35, 35]
//         });

//         return (
//             <div>
//                 <div>
//                     <Map className="karttaruutucss"
//                         ref={e => { this.mapInstance = e }}
//                         center={this.state.center} 
//                         zoom={this.state.zoom}
//                     >
//                         <TileLayer
//                             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                             url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//                         >
//                         </TileLayer> 

//                         <Marker position={markerPosition} icon={myIcon} >
//                             <Popup>
//                                 <span>Torikuppila <br/> Kahvia tunnelmalla.</span>
//                             </Popup>
//                         </Marker >

//                         <Marker position={[60.388845, 23.101791]} icon={myIcon} >
//                             <Popup>
//                                 <span>IoT Campus canteen. <br/> Nutrition available.</span>
//                             </Popup>   
//                         </Marker>
                      
//                         <Marker position={[60.389890, 23.084035]} icon={myIcon} >
//                             <Popup>
//                                 <span>Field. <br/> Fresh food available.</span>
//                             </Popup>   
//                         </Marker>

              


//                         Nämä näkyy vain kartan alla:
//                         <div position={[60.389890, 23.084035]} icon={myIcon} >
//                             <button onClick={e => {this.userActionIotCampusSADE15()}}>Sponsored ad </button>
//                             <br></br> <small>longitude on: {this.state.longitude}</small> 
//                             <br></br> <small>latitude on: {this.state.latitude}</small>
//                             <br></br> <small>name: {this.state.NAME} </small>
//                             <br></br> <small>desc: {this.state.DESCRIPTIO} </small>
//                         </div>

//                         <Marker ref={e => { this.mapInstance = e }} position={markerPosition} >
//                             <button className="marker-btncss" onClick={e => {e.preventDefault(); this.userActionIotCampusSADE15();}}  >
//                             <img src="/img/foodicon.png" alt="Food Icon" />  
//                             </button>     
//                         </Marker>

//                     </Map>
//                 </div>
                
//                 <div>
//                     <br></br>
//                     <button onClick={e => this.userActionIotCampusSADE15()}> Zoom on SADE (Salo IoT Campus), zoom 15</button>
//                      &nbsp; &nbsp; 
//                      <button onClick={e => this.userActionDefaultView()}> Back to default view, zoom 6 </button>
//                      &nbsp; &nbsp; 
//                     <button onClick={e => this.userActionSaloMarketPlace()}> Zoom on the beautiful, beautiful Salo Market Place, and FLY there! (zoom 17) </button>
//                      &nbsp; &nbsp; 
//                     <button onClick={e => this.userActionSaloMarketPlaceFast()}> ...or FLY there FAST! (zoom 17) </button>
//                 </div>

//             </div>

//         );
//     }


// }