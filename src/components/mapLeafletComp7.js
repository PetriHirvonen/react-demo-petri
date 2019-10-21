import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Viewport } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
// import { render } from 'react-dom';
// // import styled from 'styled-components';
// // import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import importOmastaFolderista from '../icons/foodicon3.PNG'
import L from 'leaflet';

// Leaflet webbisivu: https://www.npmjs.com/package/leaflet
  
export default class MapLeaflet7 extends Component {
    constructor() {
        super();
        this.state = {
          animate: false, 
          latlng:{
            lat: 60.389487, 
            lng: 23.102628,
          },
          zoom: 13,
        };
     
        console.log("super zoom: " + this.state.zoom);
        console.log(this.state.latlng);
    };


  handleClick = (e) => {
    this.setState({
      latlng: e.latlng,
    })
  }

  toggleAnimate = (e) => {
    this.setState({
      animate: !this.state.animate,
    })
  }

  render() {
    console.log(this.state.latlng);
    return (
      <div style={{ textAlign: 'center' }}>
        <label>
          <input
            checked={this.state.animate}
            onChange={this.toggleAnimate}
            type="checkbox"
          />
          Animate panning
        </label>
        <Map className="karttaruutucss"
          animate={this.state.animate}
          center={this.state.latlng}
          length={4}
          onClick={this.handleClick}
          zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    )
  }
}

