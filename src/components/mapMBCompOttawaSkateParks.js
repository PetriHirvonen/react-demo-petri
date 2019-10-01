import React, { Component } from "react";
import  ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as parkData from "../data_skateboard-parks.json";


class MapMBCompOttawaSkateParks extends Component {

  constructor(props) {
      super(props);
      this.state = {
            viewport: {
              width: "90vw",
              height: "70vh",
              latitude: 45.4211,
              longitude: -75.6903,
              zoom: 8,
              count2: 1,
              //NAME: 222
            },
            selectedPark: null,
            
      };
      this.handleClick = this.handleClick.bind(this)
      this.handleClick2 = this.handleClick2.bind(this)
      this.handleClick4 = this.handleClick4.bind(this)
  }

  //Hakee datan json filestä:
  handleClick(park) {    
    console.log("Marker icon clicked")
    const {selectedPark} = this.state;
    //console.log('konsolistahandleclick1 ' + this.state); // prints [object Object]
    this.setState({park: selectedPark});
    this.setState({longitude: park.geometry.coordinates[0]})
    this.setState({latitude: park.geometry.coordinates[1]})
    this.setState({NAME: park.properties.NAME})
    this.setState({DESCRIPTIO: park.properties.DESCRIPTIO})
    //Tämä breikkaa "cannot convert object to primitive value".... :
      //console.log('konsolista5 ' + selectedPark);
    // Tämä tuo pop-upin:
    this.setState({selectedPark: parkData})
    // alert('Hienoa ');
    //console.log('konsolistahandleclick2 ' + this.state.parkData); // prints undefined
    console.log('konsolistahandleclick3 ' + this.state.NAME); // printtaa painetun puiston TOISEN painalluksen jälkeen
  }

   //Kovakoodattua dataa napin takana, nappi nro2:  
  handleClick2 (){
    console.log("Testaa-button clicked")
    this.setState({ count2: 2})
   } 
     
  //Kovakoodattua dataa napin takana, nappi nro 4:  
  handleClick4 (){
    console.log("PARK ID 960 button clicked")
    this.setState({longitude: -75.3372987731628 })
    this.setState({latitude: 45.383321536272049})
    this.setState({NAME: "Bearbrook Skateboard Park"})
    this.setState({DESCRIPTIO: "Ei oo" })
    this.setState({selectedPark: parkData})
    console.log(this.state);
  } 

  render() {
    const toukkeni = process.env.REACT_APP_MAPBOX_TOKEN;
    const {selectedPark} = this.state;
    console.log('konsolista renderistä ' + this.state.NAME); // printtaa painetun puiston
    
    return (
      <div>
        <div>
         
          <ReactMapGL
              {...this.state.viewport}
              mapboxApiAccessToken={toukkeni}
              //tässä otetaan tyyli sivulta https://studio.mapbox.com :
              mapStyle="mapbox://styles/petrihirvonen/ck0yz13o001c01cuk6nd8i709"  // Streets
              //mapStyle="mapbox://styles/petrihirvonen/ck0yz0auf0tq71cpf9b2ws9x4"  // Satellite streets
              //mapStyle="mapbox://styles/petrihirvonen/ck0yyxznl01uw1cmnwpyld0rv"  // Basic Template
              //tämä mahdollistaa kartan liikuttelun, zoomailun, jne:
              onViewportChange={(viewport) => this.setState({viewport})}
          >
              {/* parkData.features antaa arrayn, sitten se mapataan,ja jokainen niistä on "park" => joka palauttaa Markerin */}
              {parkData.features.map(park => (
                <Marker 
                    key={park.properties.PARK_ID} 
                    longitude={park.geometry.coordinates[0]} 
                    latitude={park.geometry.coordinates[1]} 
                >
                    {/* <div>SKATE</div> */}
                    <button className="marker-btncss" onClick={e => {e.preventDefault(); this.handleClick(park);}}  >
                        <img src="/img/skateboarding.png" alt="Skate Park Icon" />  
                    </button>              
                </Marker>
              ))}

              <div>
                  <small>...</small>
                  <button onClick={this.handleClick2}>Testaa!</button>
                  <p>printtaa nro 2: {this.state.count2}</p>
              </div>

              <div>
                  <button onClick={e => {this.handleClick4()}}>Testaa ParkID 960 </button>
                  <br></br> <small>longitude on: {this.state.longitude}</small> 
                  <br></br> <small>latitude on: {this.state.latitude}</small>
                  <br></br> <small>name: {this.state.NAME} </small>
                  <br></br> <small>desc: {this.state.DESCRIPTIO} </small>
              </div>
              
              {/* "{selectedPark && " = Jos on olemassa selectedPark, tee seuraava (ts. näytä Popup): */}
              {selectedPark && 
                  <Popup
                      //key={park.properties.PARK_ID}  // tällä breikkaa
                      //tipSize={5} // tällä ei vaikutusta miten näkyy!?
                      //anchor="top"  // tämä vie popup boxin eri kohtaan
                      longitude= {this.state.longitude}
                      latitude= {this.state.latitude}
                      closeOnClick={false}
                      onClose={() => this.setState({selectedPark: null})}
                  >
                        
                        <div>
                            {/* {parkData.features.map(park =>  */}
                              <div>
                                  <h5>Nimi: {this.state.NAME} </h5>
                                  <p>Kuvaus: {this.state.DESCRIPTIO}</p>
                                  <small>Longitude: {this.state.longitude}</small> , 
                                  <small> Latitude: {this.state.latitude}</small>
                              </div>
                            {/* )}  */}
                        </div>
                  </Popup>
              } 

          </ReactMapGL>

        </div>
      </div>

    );

  }
}

export default MapMBCompOttawaSkateParks;


//Ei toiminut:
//import React, { useState } from 'react';
// function mapMBCompOttawaSkateParks() {
//   const [viewport, setViewport] = useState ({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     width: "100vw",
//     height: "100vh",
//     zoom: 10
//   });

//   return (
//     <div>
//       <ReactMapGL {...viewport} 
//       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//       onViewportChange={viewport => {setViewport(viewport);}}
//       > 
//       markers here
//       </ReactMapGL>
//     </div>
//   );
// }
// export default mapMBCompOttawaSkateParks;



//Ei toiminut jos oli render´in ulkopuolella:
    // return (
    //   <div> ddddddddddddddddddd
    //   <ReactMapGL>
    //             {parkData.features.map(park => (
    //     <Popup 
    //         key={park.properties.PARK_ID} 
    //         tipSize={5}
    //         //anchor="top"
    //         longitude={park.geometry.coordinates[0]}
    //         latitude={park.geometry.coordinates[1]}
    //         closeOnClick={false}
    //         onClose={() => this.setState({selectedPark: null})}
    //     >
    //         <div> nnnn
    //             {/* <h2>{park.properties.NAME}</h2>
    //             <p>{park.properties.DESCRIPTIO}</p> */}
    //         </div>
    //     </Popup>
    //   ))}
    //   </ReactMapGL>
    //   </div>
    // )
