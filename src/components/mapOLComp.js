import React, { Component } from "react";
import Map from "ol/Map";
import View from "ol/View";
// import {Map, View} from 'ol';
import LayerTile from "ol/layer/Tile";
import SourceOSM from "ol/source/OSM";

class MapOLComp extends Component {
  constructor(props) {
    super(props);

    this.state = { center: [0, 0], zoom: 1 };

    this.olmap = new Map({
      target: null,
      layers: [
        new LayerTile({
          source: new SourceOSM()
        })
      ],
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      })
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
            <div id="map" style={{ width: "100%", height: "460px" }}>
                <button onClick={e => this.userActionBackToDefault()}>setState to Landing Default (zoom 1) </button>
                <button onClick={e => this.userAction3()}>setState on click (zoom 3)</button>
                <button onClick={e => this.userAction()}>setState on click (orig zoom 5) </button>
                <button onClick={e => this.userAction6()}> Zoom level 6 </button>
                <button onClick={e => this.userAction7()}> Zoom level 7 </button>
                <button onClick={e => this.userAction8()}> Zoom level 8 </button>
                <button onClick={e => this.userAction9()}> Zoom level 9 </button>
                <button onClick={e => this.userActionIotCampusSalo()}> Zoom on Salo (a big city) </button>
                <button onClick={e => this.userActionIotCampusSADE()}> Zoom on SADE (Salo IoT Campus)</button>
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


