import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Source, Layer, NavigationControl} from 'react-map-gl';
import ControlPanel from './mapMBComp3control-panel.js';
import {json as requestJson} from 'd3-request';
import {heatmapLayer} from './mapMBComp3map-style.js';

//const toukkeni = process.env.REACT_APP_MAPBOX_TOKEN;

function filterFeaturesByDay(featureCollection, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const features = featureCollection.features.filter(feature => {
    const featureDate = new Date(feature.properties.time);
    return (
      featureDate.getFullYear() === year &&
      featureDate.getMonth() === month &&
      featureDate.getDate() === day
    );
  });
  return {type: 'FeatureCollection', features};
}


export default class MapMBComp3 extends Component {
  constructor(props) {
    super(props);
    const current = new Date().getTime();

    this.state = {
      viewport: {
        width: 1280,
        height: 720,
        latitude: 40,
        longitude: -100,
        zoom: 3,
        bearing: 0,
        pitch: 0
      },
      allDay: true,
      startTime: current,
      endTime: current,
      selectedTime: current,
      earthquakes: null
    };

    this._handleChangeDay = this._handleChangeDay.bind(this);
    this._handleChangeAllDay = this._handleChangeAllDay.bind(this);
  }

  componentDidMount() {
    requestJson(
      'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
      (error, response) => {
        if (!error) {
          // Note: In a real application you would do a validation of JSON data before doing anything with it,
          // but for demonstration purposes we ignore this part here and just try to select needed data...
          const features = response.features;
          const endTime = features[0].properties.time;
          const startTime = features[features.length - 1].properties.time;

          this.setState({
            data: response,
            earthquakes: response,
            endTime,
            startTime,
            selectedTime: endTime
          });
        }
      }
    );
  }

  _handleChangeDay = time => {
    this.setState({selectedTime: time});
    if (this.state.earthquakes) {
      this.setState({data: filterFeaturesByDay(this.state.earthquakes, time)});
    }
  };

  _handleChangeAllDay = allDay => {
    this.setState({allDay});
    if (this.state.earthquakes) {
      this.setState({
        data: allDay
          ? this.state.earthquakes
          : filterFeaturesByDay(this.state.earthquakes, this.state.selectedTime)
      });
    }
  };

  _onViewportChange = viewport => this.setState({viewport});

  //Zoom plus & miinus -nappien kautta:
  _updateViewport = (viewport) =>{
    this.setState({viewport});
     console.log("viewport updeittantuu");
     console.log(this.state);
     console.log("uusi zoom taso:" + this.state.viewport.zoom);
     console.log("uusi width taso:" + this.state.viewport.width);
     console.log("uusi height taso:" + this.state.viewport.height);
  }


  render() {
    const {viewport, data, allDay, selectedTime, startTime, endTime} = this.state;
    const toukkeni = process.env.REACT_APP_MAPBOX_TOKEN;
    
    return (
      <div style={{height: '100%'}}>
        <MapGL
            {...this.state.viewport}
            mapboxApiAccessToken={toukkeni}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            //onViewportChange={(viewport) => this.setState({viewport})}  // alkuperäinen (mahdollistaa kartan liikuttelun ja zoomailun jne)
            onViewportChange={this._updateViewport}                       // mahdollistaa zoominapit +/-
           // Toimii myös näillä:
            // {...viewport}
            // onViewportChange={this._onViewportChange}
        >
            {data && (
              <Source type="geojson" data={data}>
                <Layer {...heatmapLayer} />
              </Source>
            )}

            <div className="nav" >
              <NavigationControl onViewportChange={this._updateViewport} > </NavigationControl>
            </div>
        </MapGL>

        <ControlPanel
          containerComponent={this.props.containerComponent}
          startTime={startTime}
          endTime={endTime}
          selectedTime={selectedTime}
          allDay={allDay}
          onChangeDay={this._handleChangeDay}
          onChangeAllDay={this._handleChangeAllDay}
        > Tämä om Control Panel.
        </ControlPanel>
      </div>
    );
  }
}

export function renderToDom(container) {
  render(<MapMBComp3 />, container);
}



// import React, { Component } from "react";
// import  ReactMapGL, { NavigationControl }  from 'react-map-gl';
// //Fly transition:
// import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
// // Fly transition:, 3rd-party easing functions:
// //import d3 from 'd3-ease';
// //import * as treeData from "../data_trees.geojson";
// import treeData from "../data_trees.geojson";
// //import { render } from "react-dom";
// import ReactMapboxGl, { Source, Layer, Feature } from 'react-mapbox-gl';
// //import ControlPanel from './control-panel';
// //import {json as requestJson} from 'd3-request';
// //import {heatmapLayer} from './map-style';


