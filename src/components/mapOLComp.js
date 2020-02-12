import React, { Component } from "react";
import Map from "ol/Map";
import View from "ol/View";
// import {Map, View} from 'ol';
import LayerTile from "ol/layer/Tile";
import SourceOSM from "ol/source/OSM";
//UUSI Vector layers imports: (3pcs):
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
//UUSI XYZ kartta:
//import XYZ from 'ol/source/XYZ.js';

class MapOLComp extends Component {
  constructor(props) {
    super(props);

    //Aloituskeskipiste, alla Salo:
    this.state = { center: [2571757.257855, 8486953.735903], zoom: 1 };

    //UUSI KARTTA:
  //   var tileSize = 512;
  //   var urlTemplate = 'https://services.arcgisonline.com/arcgis/rest/services/' +
  // 'ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}';


    this.olmap = new Map({
      target: null,
      layers: [
        new LayerTile({
          source: new SourceOSM()
        }),

        // UUSI KARTTA:
        // new LayerTile({
        //   source: new XYZ({
        //     attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
        //     maxZoom: 16,
        //     projection: 'EPSG:4326',
        //     tileSize: tileSize,
        //     tileUrlFunction: function (tileCoord) {
        //       return urlTemplate.replace('{z}', (tileCoord[0] - 1).toString())
        //         .replace('{x}', tileCoord[1].toString())
        //         .replace('{y}', (-tileCoord[2] - 1).toString());
        //     },
        //     wrapX: true
        //   })
        // }),

        //UUSI Vector layer eli maiden ääriviivat:
        new VectorLayer({
          source: new VectorSource({
              url: 'https://raw.githubusercontent.com/bernardobelchior/openlayers-scratch-map-tutorial/start/countries.geojson',
              format: new GeoJSON(),
          })
        })
      ],
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      })

      //UUDEN KARTAN VIEW: 
      // view: new View({
      //   center: [0, 0],
      //   projection: 'EPSG:4326',
      //   zoom: 2,
      //   minZoom: 2
      // })
      
    });
  }

  updateMap() {
    this.olmap.getView().setCenter(this.state.center);
    this.olmap.getView().setZoom(this.state.zoom);
  }

  componentDidMount() {
    this.olmap.setTarget("map");

    // Listen to map changes
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

// Get coordinates:
// https://epsg.io/map#srs=3857&x=2571757.257855&y=8486953.735903&z=2&layer=streets

  userAction() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 5 });
  }
  userActionBackToDefault() {
    this.setState({ center: [0, 0], zoom: 1 });
  }
  userAction1() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 1 });
  }
  userAction2() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 2 });
  }
  userAction3() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 3 });
  }
  userAction6() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 6 });
  }
  userAction7() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 7 });
  }
  userAction8() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 8 });
  }
  userAction9() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 9 });
  }
  userActionIotCampusSalo() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 12 });
  }
  userActionIotCampusSADE() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 15 });
  }



  render() {
    this.updateMap(); // Update map on render?
    return (
        <div>
            <div id="map" style={{ width: "60%", height: "60%" }}>
                <button onClick={e => this.userAction1()}> Zoom level 1 </button>
                <button onClick={e => this.userAction2()}> Zoom level 2 </button>
                <button onClick={e => this.userAction3()}>setState on click (zoom 3)</button>
                <button onClick={e => this.userAction()}>setState on click (orig zoom 5) </button>
                <button onClick={e => this.userAction6()}> Zoom level 6 </button>
                <button onClick={e => this.userAction7()}> Zoom level 7 </button>
                <button onClick={e => this.userAction8()}> Zoom level 8 </button>
                <button onClick={e => this.userAction9()}> Zoom level 9 </button>
                <br></br>
                <button onClick={e => this.userActionIotCampusSalo()}> Zoom on Salo (a big city, zoom 12) </button>
                <button onClick={e => this.userActionIotCampusSADE()}> Zoom on SADE (Salo IoT Campus), zoom 15</button>
                <br></br>
                <button onClick={e => this.userActionBackToDefault()}>Open Layers Landing Default (zoom 1, Africa centered) </button>
              </div>
            <div className="tekstialascss">
                Salo IoT Campus coordinates:
                https://epsg.io/map#srs=3857&x=2571757.257855&y=8486953.735903&z=2&layer=streets
           </div>
      </div>
    );
  }
}

export default MapOLComp;


