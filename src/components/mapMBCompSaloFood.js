import React, { Component } from "react";
import  ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as foodData from "../data_salorestaurants.json";


class MapMBCompSaloFood extends Component {

  constructor(props) {
      super(props);
      this.state = {
            viewport: {
              width: "90vw",
              height: "70vh",
              longitude: 23.102628,
              latitude: 60.389487,
              zoom: 13.5,
              count2: 1,
            },
            selectedFood: null,
            
      };
      this.handleClick = this.handleClick.bind(this)
      this.handleClick4 = this.handleClick4.bind(this)
  }

  //Hakee datan json filestä:
  handleClick(food) {    
    console.log("Marker icon clicked")
    const {selectedFood} = this.state;
    //console.log('konsolistahandleclick1 ' + this.state); // prints [object Object]
    this.setState({food: selectedFood});
    this.setState({longitude: food.geometry.coordinates[0]})
    this.setState({latitude: food.geometry.coordinates[1]})
    this.setState({NAME: food.properties.NAME})
    this.setState({DESCRIPTIO: food.properties.DESCRIPTIO})
    // Tämä tuo pop-upin:
    this.setState({selectedFood: foodData})
    console.log('konsolistahandleclick3 ' + this.state.NAME); // printtaa painetun puiston TOISEN painalluksen jälkeen
  }
   
  //Kovakoodattua dataa napin takana, nappi nro 4:  
  handleClick4 (){
    console.log("RESTAURANT ID 1 button clicked")
    this.setState({longitude: 23.102628 })
    this.setState({latitude: 60.389487})
    this.setState({NAME: "SADE Canteen"})
    this.setState({DESCRIPTIO: "Try out the kvarg!" })
    this.setState({selectedFood: foodData})
    console.log(this.state);
  } 

  render() {
    const toukkeni = process.env.REACT_APP_MAPBOX_TOKEN;
    const {selectedFood} = this.state;
    console.log('konsolista renderistä ' + this.state.NAME); // printtaa painetun puiston
    
    return (
      <div>
        <div>
         
          <ReactMapGL
              {...this.state.viewport}
              mapboxApiAccessToken={toukkeni}
              //tässä otetaan tyyli sivulta https://studio.mapbox.com :
              //mapStyle="mapbox://styles/petrihirvonen/ck0yz13o001c01cuk6nd8i709"  // Streets
              //mapStyle="mapbox://styles/petrihirvonen/ck0yz0auf0tq71cpf9b2ws9x4"  // Satellite streets
              mapStyle="mapbox://styles/petrihirvonen/ck0yyxznl01uw1cmnwpyld0rv"  // Basic Template
              //mapStyle="mapbox://styles/petrihirvonen/ck16dblx809001cnyyj8hf75m"    // Nav Guidance Night
              //tämä mahdollistaa kartan liikuttelun, zoomailun, jne:
              onViewportChange={(viewport) => this.setState({viewport})}
          >
              {/* foodData.features antaa arrayn, sitten se mapataan,ja jokainen niistä on "food" => joka palauttaa Markerin */}
              {foodData.features.map(food => (
                <Marker 
                    key={food.properties.RESTAURANT_ID} 
                    longitude={food.geometry.coordinates[0]} 
                    latitude={food.geometry.coordinates[1]} 
                >
                    <button className="marker-btncss" onClick={e => {e.preventDefault(); this.handleClick(food);}}  >
                        <img src="/img/foodicon.png" alt="Food Icon" />  
                    </button>              
                </Marker>
              ))}


              <div>
                  <button onClick={e => {this.handleClick4()}}>Sponsored ad </button>
                  <br></br> <small>longitude on: {this.state.longitude}</small> 
                  <br></br> <small>latitude on: {this.state.latitude}</small>
                  <br></br> <small>name: {this.state.NAME} </small>
                  <br></br> <small>desc: {this.state.DESCRIPTIO} </small>
              </div>
              
              {/* "{selectedFood && " = Jos on olemassa selectedFood, tee seuraava (ts. näytä Popup): */}
              {selectedFood && 
                  <Popup
                      //key={food.properties.RESTAURANT_ID}  // tällä breikkaa
                      //tipSize={5} // tällä ei vaikutusta miten näkyy!?
                      //anchor="top"  // tämä vie popup boxin eri kohtaan
                      longitude= {this.state.longitude}
                      latitude= {this.state.latitude}
                      closeOnClick={false}
                      onClose={() => this.setState({selectedFood: null})}
                  >
                        
                        <div>
                            {/* {foodData.features.map(food =>  */}
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

export default MapMBCompSaloFood;


  // Coordinates:
  // https://epsg.io/map#srs=4326&x=23.102628&y=60.389487&z=17&layer=streets

