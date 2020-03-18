import React, { Component, useState } from 'react';
import {Map, Marker, Popup, TileLayer, GeoJSON, LayersControl,LayerGroup,withLeaflet,MapControl} from 'react-leaflet'
import {getGeojson} from '../actions/geojson'
import {connect} from 'react-redux';
const { BaseLayer, Overlay } = LayersControl
import MapInfo from "./MapInfo";
import Routing from "./RoutingMachine";
import Road from './Road'
class Mapa extends Component {
    constructor(props) {
      
        super(props)
        this.state = {
          lat: 51.246452,
          lng: 22.568445,
          zoom: 12,
          isMapInit: false,
          name: '',
          coordinates: [],
          coord1: [],
          coord2: [],
          coord3: [],
          coord4: [],
        }

        
      }
      callbackcoords = (data1,data2,data3,data4) =>{
        this.setState({
          coord1: data1,
          coord2: data2,
          coord3: data3,
          coord4: data4,
        })
      }
      callback = (data,datacord)=> {
        this.setState({
          name: data,
          coordinates: datacord

        })
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
        
        const { lat, lng, zoom } = this.state;
        const position = [lat,lng];
        let name_mapa = 'dasdsa'
        return (
            
            <div className="body__elements__frame__main">
            <h1>{name_mapa}</h1>
            <div className="body__elements__frame__options">
                <div className="body__elements__option__road"><Road name={this.state.name} coordinates={this.state.coordinates} callbackcoords={this.callbackcoords}/></div>
            </div>
            <div className="body__elements__frame__map">
        <Map center={position} zoom={zoom} ref={this.saveMap}>
        <LayersControl position="topright">
        
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {/* <Routing map={this.map} /> */}
        <Overlay name="Pomniki">
          <GeoJSONWithPomnik callbackfunc={this.callback} data={this.props.pomniki} 
           />
        </Overlay>
        <Overlay name="Siłownie">
          <GeoJSONWithPomnik  setname={name_mapa} data={this.props.silownie}/>
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
const GeoJSONWithPomnik = (props) => {
  const [name, setName] = useState("")
  const [coordinates, setCoordinates] = useState([])
  
  function increment(name1,coordinates1) {
    setName(name1);
    setCoordinates(coordinates1);
  }
  const handleOnEachFeature = (feature, layer) => {
    
    let feature1 = layer.feature.geometry.coordinates
    let properties= layer.feature.properties
    let table = "<table>"  
    let table1 = "</table>" 
    let index = ""
    let submit = ""
    let submit1 = ""
    let submit2 = ""
    let submit3 = ""
    let submit4 = ""

for (let key of Object.keys(properties)) {
  
  if(key === "pk"){
    continue
  }
  if(key === "strona_internetowa"){
    submit = `<form action="${properties[key]}"><input type="submit" value="Przejdź do strony internetowej" /></form>`
    
  }
  index += `<tr><td>${key}:</td><td>${properties[key]}</td></tr>`
  submit1 = `<form action="${properties[key]}"><input type="submit" onClick={() =>setCount(count+1)} value="Dodaj punkt do wyznaczania trasy nr 1" /></form>`
  submit2 = `<form action="${properties[key]}"><input type="submit" value="Dodaj punkt do wyznaczania trasy nr 2" /></form>`
  submit3 = `<form action="${properties[key]}"><input type="submit" value="Dodaj punkt do wyznaczania trasy nr 3" /></form>`
  submit4 = `<form action="${properties[key]}"><input type="submit" value="Dodaj punkt do wyznaczania trasy nr 4" /></form>`
  
}
let tabela = table + index  + table1 + submit 
let name_of_properties = properties.nazwa
let feature_of_geometry = feature1[0]
let popupContent = tabela;
    layer.bindPopup(popupContent);
    layer.on({
      mouseover: e => {
        
        layer.openPopup();
        console.log(properties.nazwa)
        props.callbackfunc(properties.nazwa,feature_of_geometry)
        console.log(feature_of_geometry)
        console.log(name_of_properties)
        // props.setName = name_of_properties
        increment(name_of_properties)
      },
      mouseclick: e=>{
        layer.closePopup
      }
    });
  };
  return (
  <>
  <GeoJSON {...props} onEachFeature={handleOnEachFeature} />
 
  </>      
    );
}
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