import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

// Leaflet webbisivu: https://www.npmjs.com/package/leaflet

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class MapLeaflet1 extends React.Component {

    componentDidMount () {
        this.map = L.map('mapLeaf1', {
            //Ei toimi:
              //longitude: [23.128452],
              //latitude: [60.385288],
            //Vaan pitää käyttää muotoa:
              //center: [latitude, longitude],
            center: [60.389487, 23.102628],
            zoom: 6,
            //zoomControl: false  // tämä poistaisi defaulttina tulevat + ja - zoomausnapit
        });
    
        // Leaflet provider menu, i.e. tyylit:
        // https://leaflet-extras.github.io/leaflet-providers/preview/
        // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
        // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);
        console.log("componentDidMount, zoom: 6, this.map:");
        console.log(this.map);  
        console.log("componentDidMount, this.map._zoom ja -lastCenter:");
        console.log(this.map._zoom);  
        console.log(this.map._lastCenter);  
    }


    render () {

        console.log("renderistä this.map: "); 
        console.log(this.map ); 

        return (
        
            <div>
                <div>
                    <Wrapper width="1280px" height="720px" id="mapLeaf1"
                    >
                    </Wrapper>
                </div>
                
                <div>
                    <br></br>
                    <button > Test button, ei funktionaliteettia </button>
                    <br></br>    <br></br>
                </div>

            </div>

        );

    }

}