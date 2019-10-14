import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Viewport } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
// import { render } from 'react-dom';
// // import styled from 'styled-components';
// // import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import importOmastaFolderista from '../icons/foodicon3.PNG'
import L from 'leaflet';

// Leaflet webbisivu: https://www.npmjs.com/package/leaflet
  
export default class MapLeaflet5 extends Component {
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
            Esimerkki-popup5. <br /> Omasta hakemistosta.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

