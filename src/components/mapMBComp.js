import React, { Component } from "react";
import  ReactMapGL from 'react-map-gl';


class MapMBComp extends Component {

   state = {
     viewport: {
       width: "80vw",
       height: 600,
       latitude: 45.4211,
       longitude: -75.6903,
       zoom: 8
     }
   };

   userActionIotCampusSADE() {
    this.setState({ center: [2571757.257855, 8486953.735903], zoom: 15 });
  }

   render() {

    const toukkeni = process.env.REACT_APP_MAPBOX_TOKEN;

    return (
       <div>
         <div>
                <button onClick={e => this.userActionIotCampusSADE()}> Zoom on SADE (Salo IoT Campus), zoom 15..</button>
                <br></br>
         </div>

        <ReactMapGL
         {...this.state.viewport}
         mapboxApiAccessToken={toukkeni}
         //mapboxApiAccessToken={"pk.eyJ1IjoicGV0cmloaXJ2b25lbiIsImEiOiJjazB4bmkzOHgwNW9sM3BtdThpMGQ1emZrIn0._rcD7TSQdffTXwH4RhGtLw"}
         onViewportChange={(viewport) => this.setState({viewport})}
       />

       </div>
       
      
     );
   }
 }

export default MapMBComp;




//Ei toiminut:
//import React, { useState } from 'react';
// function mapMBComp() {
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
// export default mapMBComp;
