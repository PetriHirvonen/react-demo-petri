import React, { Component } from 'react'
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup, Viewport } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
//import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import * as foodData from "../data_salorestaurants.json";

// Leaflet webbisivu: https://www.npmjs.com/package/leaflet

const Wrapper = styled.div`
    width: 1280px;
    height: 720px;
`;


export default class MapLeaflet3 extends Component {
    constructor() {
        super();
        this.state = {
            center: [60.389487, 23.102628],
            zoom: 13, 
            maxZoom: 20,
            //watch: false,
            //detectRetina: true,
            zoomControl: true,
            //width: 1280,
            //height: 720, 
            // layers: [
            //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            //     }),
            // ]
        };

        
        // this.userActionIotCampusSADE15 = this.userActionIotCampusSADE15.bind(this);
        // this.userActionIotCampusSADE17 = this.userActionIotCampusSADE17.bind(this);
        // this.userActionSaloMarketPlace = this.userActionSaloMarketPlace.bind(this);
        // this.userActionSaloMarketPlaceFast = this.userActionSaloMarketPlaceFast.bind(this);
      
        console.log("super zoom: " + this.state.zoom);
    };

    // componentDidMount () {
    //     this.kartta = L.map('karttaLeaf1', {
    //         center: this.state.center,
    //         zoom: this.state.zoom,
    //         maxZoom: this.state.maxZoom,
    //         zoomControl: this.state.zoomControl,
    //         //layers: this.state.layers,
           
    //     });
    
    //     // Leaflet provider menu, i.e. tyylit:
    //     // https://leaflet-extras.github.io/leaflet-providers/preview/
    //     // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
    //     // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
    //     // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        
    //     // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     // }).addTo(this.kartta);

    //     L.marker([60.389487, 23.102628])
    //     .addTo(this.kartta);

    //     console.log("componentDidMount, this.kartta:");
    //     console.log(this.kartta);  
    //     console.log("componentDidMount, this.kartta._zoom ja -lastCenter:");
    //     console.log(this.kartta._zoom);  
    //     console.log(this.kartta._lastCenter);  
    // }

    userActionIotCampusSADE15() {
        console.log("SADE15 clicked");
        this.kartta.setView([60.389487, 23.102628], 15);
        // Muoto:this.kartta.setView([latitude, longitude] zoom);
              
        console.log(this.state);          // prints constructor values
        console.log(this.state.zoom);      // prints constructor values
        console.log(this.kartta._zoom);     // prints 1st constructor value, then SADE15 values
        console.log(this.state.center);      // prints constructor values
        console.log(this.kartta._lastCenter); // prints 1st constructor value, then SADE15 values
    };

    userActionDefaultView() {
        console.log("Default view clicked");
        this.kartta.setView([60.389487, 23.102628], 13);
    }

    userActionSaloMarketPlace() {
        console.log("SMP clicked");
        this.kartta.flyTo([60.385288, 23.128452], 17, {
            animate: true,
            duration: 6.5
        });
    }

    userActionSaloMarketPlaceFast() {
        console.log("SMP clicked");
        this.kartta.flyTo([60.385288, 23.128452], 17, {
            animate: true,
            duration: 1.5
        });
    }

    render () {
        console.log("renderistä: "); 
        console.log(this.state.zoom);  // prints constructor value
        console.log(this.state.center);  // prints constructor values

        const position  = [60.389487, 23.102628]

        return (
        
            <div>
                <div>
                    {/* <Wrapper id="karttaLeaf1"  center={this.state.center} zoom={this.state.zoom}
                    >
                         */}

                        <Map     width="1280px" height="720px" id="karttaLeaf1"  center={this.state.center} zoom={this.state.zoom}>


                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                            </TileLayer>



                            {/* <Marker center={this.state.center}> */}
                            {/* <Marker position={position}> */}
                            <Marker position={this.state.center}>
                             <button onClick={e => {e.preventDefault(); }}  > 
                             {/* <button className="marker-btncss" onClick={e => {e.preventDefault(); }}  >  */}
                             TÄHÄN JÄIN. NÄYTTÄÄ SILTÄ ETTÄ BUTTON MÄÄRITTELEE KOKO KARTAN KORKEUDEN...
                              <img src="/img/foodicon.png" alt="Food Icon" />  
                             </button>      
                                <Popup>
                                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                                </Popup>
                            </Marker>
                        </Map> 


                    {/* </Wrapper> */}
                </div>
                
                <div>
                    <br></br>
                    <button onClick={e => this.userActionIotCampusSADE15()}> Zoom on SADE (Salo IoT Campus), zoom 15</button>
                     &nbsp; &nbsp; 
                     <button onClick={e => this.userActionDefaultView()}> Back to default view, zoom 13 </button>
                     &nbsp; &nbsp; 
                    <button onClick={e => this.userActionSaloMarketPlace()}> Zoom on the beautiful, beautiful Salo Market Place, and FLY there! (max. zoom 17) </button>
                     &nbsp; &nbsp; 
                    <button onClick={e => this.userActionSaloMarketPlaceFast()}> ...or FLY there FAST! (max. zoom 17) </button>
                </div>



            </div>

        );
    }


}