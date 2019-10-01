import React, { Component } from "react";
import  ReactMapGL, { NavigationControl}  from 'react-map-gl';



class MapMBComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "80vw",
        height: 600,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6
      }
    };
    //this.userActionIotCampusSADE = this.userActionIotCampusSADE.bind(this)
    this.userActionIotCampusSADE15 = this.userActionIotCampusSADE15.bind(this)
  }

  //Kovakoodattua dataa napin takana, nappi nro 15:  
  userActionIotCampusSADE15() {
    console.log("Zoom on SADE clicked")
    this.setState ( {
      viewport: {
        width: "80vw",
        height: 600,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 15
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  //Kovakoodattua dataa napin takana, nappi nro 17:  
  //https://epsg.io/map#srs=4326&x=23.128452&y=60.385288&z=17&layer=streets
  userActionSaloMarketPlace() {
    console.log("Zoom on Salo Market Place clicked")
    this.setState ( {
      viewport: {
        width: "80vw",
        height: 600,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  //Zoom plus & miinus -nappien kautta:
  _updateViewport = (viewport) =>{
    this.setState({viewport});
     console.log("viewport updeittantuu");
     console.log(this.state);
     console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  render() {

    const toukkeni = process.env.REACT_APP_MAPBOX_TOKEN;

    return (
      <div>

        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={toukkeni}
          //mapboxApiAccessToken={"pk.eyJ1IjoicGV0cmloaXJ2b25lbiIsImEiOiJjazB4bmkzOHgwNW9sM3BtdThpMGQ1emZrIn0._rcD7TSQdffTXwH4RhGtLw"}
          //tässä otetaan tyyli sivulta https://studio.mapbox.com :
          //mapStyle="mapbox://styles/petrihirvonen/ck0yz13o001c01cuk6nd8i709"  // Streets
          mapStyle="mapbox://styles/petrihirvonen/ck0yz0auf0tq71cpf9b2ws9x4"  // Satellite streets
          // mapStyle="mapbox://styles/petrihirvonen/ck0yyxznl01uw1cmnwpyld0rv"  // Basic Template
          //mapStyle="mapbox://styles/petrihirvonen/ck16dblx809001cnyyj8hf75m"    // Nav Guidance Night
          //tämä mahdollistaa kartan liikuttelun, zoomailun, jne:
          //onViewportChange={(viewport) => this.setState({viewport})}  // alkuperäinen
          onViewportChange={this._updateViewport}                       // mahdollistaa zoominapit +/-
        >
          <div className="nav" >
              <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </ReactMapGL>
        
        <div>
           <br></br>
           <button onClick={e => this.userActionIotCampusSADE15()}> Zoom on SADE (Salo IoT Campus), zoom 15</button>
           <br></br>    <br></br>
           <button onClick={e => this.userActionSaloMarketPlace()}> Zoom on the beautiful, beautiful Salo Market Place, zoom 17</button>
        </div>

      </div>
      
    );

  }
}

export default MapMBComp;


