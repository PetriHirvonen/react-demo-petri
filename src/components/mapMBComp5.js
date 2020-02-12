import React, { Component } from "react";
import  ReactMapGL, { NavigationControl}  from 'react-map-gl';
//Fly transition:
//import {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import {FlyToInterpolator} from 'react-map-gl';
// Fly transition:, 3rd-party easing functions:
//import d3 from 'd3-ease';


// HUOM. Jostain syystä Mapbox ei tykkää siitä että lentää ja muuttaa tyyliä samaan aikaan -> pitää painaa k.o. napeista 2 kertaa...!!

class MapMBComp5 extends Component {

  constructor() {
    super();
    this.state = {
      viewport: {
        // width: "80vw",
        height: "45vh",
        width: 1280,
        // height: 720,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 0,
        bearing: 0,
        //mapStyle: 'mapbox://styles/mapbox/light-v8',
        //y.o. on Mapboxin default style joka tulee näkyviin jos ei määritä mitään. 
        //Paitsi consructorissa tyyliä ei voi määrittää anyway: ei vaikuta mihinkään:
        // Pitää määrittää componentDidMountissa (tai renderissä) jos haluaa määrittää landing page stylen.
      }
    };
    // this.userActionIotCampusSADE15 = this.userActionIotCampusSADE15.bind(this)
    // this.userActionDefaultView = this.userActionDefaultView.bind(this)
    // this.userActionSaloMarketPlace = this.userActionSaloMarketPlace.bind(this)
    // this.userActionSaloMarketPlaceFast = this.userActionSaloMarketPlaceFast.bind(this)
    console.log(this.state);
    console.log(this.state.viewport.mapStyle);  // printtaa aina undefined jossa ei määritelty constructorissa, ja jos määritelty,
                                                // printttaa sen määritellyn MUTTA EI VAIKUTA siihen mitä näkyy!
  }

  //Koko ComponentDidMount on optionaalinen jos ei halua ländätä muulle kuin default stylelle, mutta
  //jos haluaa ländätä jollekin muulle stylelle, sitten tähän ko. style:
  componentDidMount () {
    this.setState ( {
      viewport: {
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        longitude: this.state.viewport.longitude,
        latitude: this.state.viewport.latitude,
        zoom: this.state.viewport.zoom,
        pitch: this.state.viewport.pitch,
        bearing: this.state.viewport.bearing,
        mapStyle: 'mapbox://styles/mapbox/light-v8', // Ei pakko määritellä tässä defaulttia, näyttää defaultin anyway
        //mapStyle: 'mapbox://styles/mapbox/dark-v10',
        //mapStyle: 'mapbox://styles/mapbox/streets-v11',
      }
    });
    console.log(this.state);
    console.log(this.state.viewport.zoom);
    console.log(this.state.viewport.mapStyle);  // printtaa undefined MUTTA renderöi silti mitä yllä määritelty (ja renderin console.log printtaa määritellyn)
  }

  userActionDefaultView() {
    console.log("Default View button clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 0,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/light-v8',
      }
    });
    console.log(this.state);
    console.log(this.state.viewport.zoom);
    console.log(this.state.viewport.mapStyle); // printtaa staten aina yhden näppäinpainalluksen myöhässä MUTTA renderöi silti mitä yllä määritelty (ja renderin console.log printtaa määritellyn)
  }

  userActionDefaultViewFly() {
    console.log("Default View buttonFly clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 0,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/light-v8',
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionDefaultView60() {
    console.log("Default View button clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 60,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/light-v8',
      }
    });
    console.log(this.state);
    console.log(this.state.viewport.zoom);
    console.log(this.state.viewport.mapStyle); // printtaa staten aina yhden näppäinpainalluksen myöhässä MUTTA renderöi silti mitä yllä määritelty (ja renderin console.log printtaa määritellyn)
  }

  userActionDefaultViewFly60() {
    console.log("Default View buttonFly clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 6,
        pitch: 60,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/light-v8',
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  //Kovakoodattua dataa napin takana, nappi nro 15:  
  userActionIotCampusSADE15() {
    console.log("Zoom on SADE clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 15,
        pitch: 60,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
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
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.102628,
        latitude: 60.389487,
        zoom: 17,
        pitch: 60,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
    console.log("uusi width taso:" + this.state.viewport.width);
    console.log("uusi height taso:" + this.state.viewport.height);
  }

  //https://epsg.io/map#srs=4326&x=23.128452&y=60.385288&z=17&layer=streets
  userActionSaloMarketPlace17() {
    console.log("Zoom on Salo Market Place clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 60,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }
  
  userActionSaloMarketPlaceFly17Pitch10() {
    console.log("Zoom on Salo Market Place clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 10,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
       }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionSaloMarketPlaceFly17Pitch60() {
    console.log("Zoom on Salo Market Place clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 60,
        bearing: 0,
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
       }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }
  
  userActionSaloMarketPlace3D() {
    console.log("Zoom on Salo Market Place clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 60,
        bearing: 0,
        //mapStyle: 'mapbox://styles/mapbox/streets-v11', 
        mapStyle: 'mapbox://styles/petrihirvonen/ck1qaxxps074t1cnqdik2hjc9',
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }


  userActionSaloMarketPlaceFast10() {
    console.log("Zoom on Salo Market Place FAST clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 10,
        //mapStyle: 'mapbox://styles/mapbox/streets-v11', 
        mapStyle: 'mapbox://styles/petrihirvonen/ck1qaxxps074t1cnqdik2hjc9',
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator(),
      }
    });
    console.log("viewport updeitattu");
    console.log(this.state);
    console.log("uusi zoom taso:" + this.state.viewport.zoom);
  }

  userActionSaloMarketPlaceFast60() {
    console.log("Zoom on Salo Market Place FAST clicked")
    this.setState ( {
      viewport: {
        width: 1280,
        height: this.state.viewport.height,
        longitude: 23.128452,
        latitude: 60.385288,
        zoom: 17,
        pitch: 60,
        //mapStyle: 'mapbox://styles/mapbox/streets-v11', 
        mapStyle: 'mapbox://styles/petrihirvonen/ck1qaxxps074t1cnqdik2hjc9',
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator(),
        
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
    console.log(this.state);
    console.log(this.state.viewport.zoom);
    console.log(this.state.viewport.mapStyle);  // printtaa vallitsevan stylen oikein
    
    const toukkeni = process.env.REACT_APP_MAPBOX_TOKEN;
    //const karttatyyli = "mapbox://styles/petrihirvonen/ck1qaxxps074t1cnqdik2hjc9";
    const karttatyyli = this.state.viewport.mapStyle;

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
          //mapStyle="mapbox://styles/petrihirvonen/ck1qaxxps074t1cnqdik2hjc9"  // 3D prod, cached
          //mapStyle="mapbox://styles/mapbox/light-v10"
          //mapStyle="mapbox://styles/mapbox/dark-v10"
          mapStyle={karttatyyli}

          //tämä mahdollistaa kartan liikuttelun, zoomailun, jne:
          //onViewportChange={(viewport) => this.setState({viewport})}  // alkuperäinen
          onViewportChange={this._updateViewport}                       // mahdollistaa zoominapit +/-
        >
          <div className="nav" >
              <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </ReactMapGL>
        
        <div>
            <br></br> &nbsp; &nbsp; 
            <button onClick={e => this.userActionDefaultView()}> Back to default view and Mapbox default style, pitch, and bearing (zoom 6) </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionDefaultViewFly()}> Fly to default view and Mapbox default style, pitch, and bearing (zoom 6) </button>
              &nbsp; &nbsp; 
            <br></br>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <button onClick={e => this.userActionDefaultView60()}>  Go  -->  As above except with the pitch value of 60 </button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <button onClick={e => this.userActionDefaultViewFly60()}> Fly --> As above except with the pitch value of 60  </button>
              &nbsp; &nbsp; 
            <br></br>
            <button onClick={e => this.userActionIotCampusSADE15()}> Zoom on SADE (Salo IoT Campus), zoom 15, pitch 60</button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionIotCampusSADE17()}> Zoom on SADE (Salo IoT Campus), zoom 17, pitch 60</button>
              &nbsp; &nbsp; 
            <br></br>
            <button onClick={e => this.userActionSaloMarketPlace17()}> Zoom on the beautiful, beautiful Salo Market Place. (zoom 17, pitch 60) </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionSaloMarketPlaceFly17Pitch10()}> Fly to Salo Market Place. (zoom 17, pitch 10) </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionSaloMarketPlaceFly17Pitch60()}> Fly to Salo Market Place. (zoom 17, pitch 60) </button>
              &nbsp; &nbsp; 
            <br></br>
            <button onClick={e => this.userActionSaloMarketPlace3D()}> Zoom on the beautiful, beautiful Salo Market Place in 3D. (zoom 17, pitch 60) </button>
              &nbsp; &nbsp; 
            <button onClick={e => this.userActionSaloMarketPlaceFast10()}> ...or FLY there FAST, in 3D! (zoom 17, pitch 10) </button>
            &nbsp; &nbsp; 
            <button onClick={e => this.userActionSaloMarketPlaceFast60()}> ...or FLY there FAST, in 3D! (zoom 17, pitch 60) </button>
            &nbsp; &nbsp; 
            
        </div>

      </div>
      
    );

  }
}

export default MapMBComp5;


