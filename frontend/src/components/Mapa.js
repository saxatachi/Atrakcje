import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';

class Mapa extends Component {
    constructor() {
        super()
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13
        }
      }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            
            <div>
        <Map center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        </Map>
            </div>
        );
    }
}

export default Mapa;