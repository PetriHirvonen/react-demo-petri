import React, { Component } from "react";
import  ReactMapGL, { NavigationControl}  from 'react-map-gl';
//Fly transition:
import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
// Fly transition:, 3rd-party easing functions:
//import d3 from 'd3-ease';


class MapMBComp4 extends Component {

  constructor() {
    super();
    this.state = {
      viewport: {
        // width: "80vw",
        // height: "50vh",
        width: 1280,
        //height: 720,
        height: "45vh",
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 60,
      }
    };
    // this.userActionIotCampusSADE15 = this.userActionIotCampusSADE15.bind(this)
    // this.userActionDefaultView = this.userActionDefaultView.bind(this)
    // this.userActionSaloMarketPlace = this.userActionSaloMarketPlace.bind(this)
    // this.userActionSaloMarketPlaceFast = this.userActionSaloMarketPlaceFast.bind(this)
  }

  //Kovakoodattua dataa napin takana, nappi nro 15:  
  userActionIotCampusSADE15() {
    console.log("Zoom on SADE clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 15,
        pitch: 60,
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
    console.log("uusi width taso:" + this.state.viewport.width);
    console.log("uusi height taso:" + this.state.viewport.height);
  }

  userActionIotCampusSADE17() {
    console.log("Zoom on SADE clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 17,
        pitch: 60,
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
    console.log("uusi width taso:" + this.state.viewport.width);
    console.log("uusi height taso:" + this.state.viewport.height);
  }


  userActionDefaultView() {
    console.log("Default View button clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 60,
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionDefaultView2() {
    console.log("Default View button2 clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 10,
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionDefaultViewFly() {
    console.log("Default View buttonFly clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 10,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
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
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 60,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        //transitionEasing: d3.easeCubic
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionSaloMarketPlaceFast() {
    console.log("Zoom on Salo Market Place FAST clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 60,
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator(),
        //transitionEasing: d3.easeCubic
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionSaloMarketPlaceFast2() {
    console.log("Zoom on Salo Market Place FAST clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 10,
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator(),
        //transitionEasing: d3.easeCubic
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionFlySeattleSpaceNeedleSlow() {
    console.log("Zoom on SeattleSN clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: -122.349308,
        latitude: 47.620513,
        zoom: 16,
        pitch: 30,
        transitionDuration: 13000,
        transitionInterpolator: new FlyToInterpolator(),
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionFlySeattleSpaceNeedleFast60() {
    console.log("Zoom on SeattleSN clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: -122.349308,
        latitude: 47.620513,
        zoom: 16,
        pitch: 60,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionFlySeattleSpaceNeedleFast() {
    console.log("Zoom on SeattleSN clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: -122.349308,
        latitude: 47.620513,
        zoom: 16,
        pitch: 30,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionFlySeattleSpaceNeedleFast10() {
    console.log("Zoom on SeattleSN clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: -122.349308,
        latitude: 47.620513,
        zoom: 16,
        pitch: 10,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionFlySeattleSpaceNeedleFast10Bearing() {
    console.log("Zoom on SeattleSN clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: -122.349308,
        latitude: 47.620513,
        zoom: 16,
        pitch: 10,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
        bearing: -48.6,
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionFlySeattleWaterfront() {
    console.log("Zoom on Seattle WF clicked")
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: -122.339405,
        latitude: 47.600875,
        zoom: 16,
        pitch: 30,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
        //transitionEasing: d3.easeCubic
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
     console.log("uusi width taso:" + this.state.viewport.width);
     console.log("uusi height taso:" + this.state.viewport.height);
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
          // mapStyle="mapbox://styles/petrihirvonen/ck0yz0auf0tq71cpf9b2ws9x4"  // Satellite streets
          //mapStyle="mapbox://styles/petrihirvonen/ck0yyxznl01uw1cmnwpyld0rv"  // Basic Template
          //mapStyle="mapbox://styles/petrihirvonen/ck16dblx809001cnyyj8hf75m"    // Nav Guidance Night
          //mapStyle="mapbox://styles/petrihirvonen/ck1qa0g8x06se1crnmidhjaxr"    // BUbble map
          //mapStyle="mapbox://styles/petrihirvonen/ck1qaxxps074t1cnqdik2hjc9/draft"  //3D draft, toimii heti
          mapStyle="mapbox://styles/petrihirvonen/ck1qaxxps074t1cnqdik2hjc9"  // 3D prod, cached
          //mapStyle="mapbox://styles/mapbox/light-v10"
          // mapStyle="mapbox://styles/mapbox/dark-v10"
          

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
            <button onClick={e => this.userActionIotCampusSADE15()}> Zoom on SADE (Salo IoT Campus), zoom 15, pitch 60</button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionIotCampusSADE17()}> Zoom on SADE (Salo IoT Campus), zoom 17, pitch 60</button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionDefaultView()}> Back to default view, zoom 6, pitch 60 </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionDefaultView2()}> Default view, zoom 6, pitch 10 </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionDefaultViewFly()}> Fly to Default view, zoom 6, pitch 10 </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionSaloMarketPlace()}> Zoom on the beautiful, beautiful Salo Market Place, and FLY there! (zoom 17, pitch 60) </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionSaloMarketPlaceFast()}> ...or FLY there FAST! (zoom 17, pitch 60) </button>
            &nbsp; &nbsp; 
            <button onClick={e => this.userActionSaloMarketPlaceFast2()}> ...or FLY there FAST! (zoom 17, pitch 10) </button>
            &nbsp; &nbsp; 
            <button onClick={e => this.userActionFlySeattleSpaceNeedleSlow()}> ...or FLY to Seattle Space Needle SLOW (zoom 16, pitch 30) </button>
            &nbsp; &nbsp; 
            <button onClick={e => this.userActionFlySeattleSpaceNeedleFast60()}> ...or FLY to Seattle Space Needle FAST (zoom 16, pitch 60) </button>
            &nbsp; &nbsp; 
            <button onClick={e => this.userActionFlySeattleSpaceNeedleFast()}> ...or FLY to Seattle Space Needle FAST (zoom 16, pitch 30) </button>
            &nbsp; &nbsp; 
            <button onClick={e => this.userActionFlySeattleSpaceNeedleFast10()}> ...or FLY to Seattle Space Needle FAST (zoom 16, pitch 10) </button>
             &nbsp; &nbsp; 
            <button onClick={e => this.userActionFlySeattleSpaceNeedleFast10Bearing()}> ...or FLY to Seattle Space Needle FAST (zoom 16, pitch 10, Bearing used) </button>
             &nbsp; &nbsp; 
            <button onClick={e => this.userActionFlySeattleWaterfront()}> ...or FLY to Seattle Waterfront FAST (zoom 16, pitch 30) </button>
        </div>

      </div>
      
    );

  }
}

export default MapMBComp4;


