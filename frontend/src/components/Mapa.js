import React, { Component } from 'react';
import {Map, Marker, Popup, TileLayer, GeoJSON, LayersControl,LayerGroup,withLeaflet,MapControl} from 'react-leaflet'
import {getGeojson} from '../actions/geojson'
import {connect} from 'react-redux';
const { BaseLayer, Overlay } = LayersControl
import MapInfo from "./MapInfo";
import Routing from "./RoutingMachine";
class Mapa extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
          lat: 51.246452,
          lng: 22.568445,
          zoom: 12,
          isMapInit: false,
        }

        
      }
      saveMap = map => {
        this.map = map;
        this.setState({
          isMapInit: true
        });
      };
      onEachFeature(feature, layer) {
        layer.on({
          click: this.clickToFeature.bind(this)
        });
      }
    
      clickToFeature(e) {
        
        const position = [this.state.lat, this.state.lng];
        var layer = e.target;
        console.log(layer.feature.properties)
        console.log(layer.feature.geometry)
        console.log("I clicked on " + layer.feature.properties.name);
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
   
     }
      render() {
        // const geo = this.props.geojson;
        const { lat, lng, zoom } = this.state;
        const position = [lat,lng];
        return (
            
            <div>
        <Map center={position} zoom={zoom} ref={this.saveMap}>
        <LayersControl position="topright">
        
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {/* <Routing map={this.map} /> */}
        <Overlay name="Pomniki">
          <GeoJSONWithPomnik  data={this.props.pomniki} 
          // onEachFeature={this.onEachFeature.bind(this)}
           />
          {/* this.props.kina, this.props.silownie, this.props.cmentarze, this.props.festiwale,this.props.kluby,this.props.muzea,this.props.teatry */}
        </Overlay>
        <Overlay name="Siłownie">
          <GeoJSONWithPomnik  data={this.props.silownie}/>
        </Overlay>
        <Overlay name="Teatry">
          <GeoJSONWithPomnik  data={this.props.teatry}/>
        </Overlay>
        <Overlay name="Muzea">
          <GeoJSONWithPomnik  data={this.props.muzea}/>
        </Overlay>
        <Overlay name="Cmentarze">
          <GeoJSONWithPomnik  data={this.props.cmentarze}/>
        </Overlay>
        <Overlay name="Kluby">
          <GeoJSONWithPomnik  data={this.props.kluby}/>
        </Overlay>
        <Overlay name="Festiwale">
          <GeoJSONWithPomnik  data={this.props.festiwale}/>
        </Overlay>
        </LayersControl>
        </Map>
            </div>
        );
    }
}
const mapa = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.71875,
          49.61070993807422
        ]
      }
    }
  ]
}
const GeoJSONWithPomnik = props => {
  const handleOnEachFeature = (feature, layer) => {
    
    let properties= layer.feature.properties
    
    let table = "<table>"  
    let table1 = "</table>" 
    let index = ""
    let submit = ""

for (let key of Object.keys(properties)) {
  
  if(key === "pk"){
    continue
  }
  if(key === "strona_internetowa"){
    submit = `<form action="${properties[key]}"><input type="submit" value="Przejdź do strony internetowej" /></form>`
    
  }
  index += `<tr><td>${key}:</td><td>${properties[key]}</td></tr>`
  
}
let tabela = table + index  + table1 + submit

let popupContent = tabela;
    layer.bindPopup(popupContent);
    layer.on({
      mouseover: e => {
        layer.openPopup();
      },
      mouseclick: e=>{
        layer.closePopup
      }
      // mouseout: e => {
      //   layer.closePopup();
      // }
    });
  };
  return <GeoJSON {...props} onEachFeature={handleOnEachFeature} />;
}


// GeoJSONWithLayer.defaultProps = {
//   popupContent: 'brak danych',
// }
const mapStateToProps = state =>({
    
  isLoading: state.geojson.isLoading,
  isLoaded: state.geojson.isLoaded,
  muzea: state.geojson.muzea,
  kina: state.geojson.kina,
  cmentarze: state.geojson.cmentarze,
  festiwale: state.geojson.festiwale,
  kluby: state.geojson.kluby,
  pomniki: state.geojson.pomniki,
  silownie: state.geojson.silownie,
  teatry: state.geojson.teatry,
})
export default connect(mapStateToProps,{getGeojson})(Mapa);