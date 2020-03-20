import React, { Component, useState } from 'react';
import {Map, Marker, Popup, TileLayer, GeoJSON, LayersControl,LayerGroup,withLeaflet,MapControl,FeatureGroup, Circle } from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import {getGeojson} from '../actions/geojson'
import {connect} from 'react-redux';
const { BaseLayer, Overlay } = LayersControl
import MapInfo from "./MapInfo";
import Routing from "./RoutingMachine";
import ComponentDraw from "./Draw"
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
          routing: false,
        }

        
      }
      
      callbackcoords = (data1,data2,data3,data4) =>{
        this.setState({
          coord1: data1,
          coord2: data2,
          coord3: data3,
          coord4: data4,
          routing: true
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
        let pop1 = `L.latLng(${this.state.coord1[1]}, ${this.state.coord1[0]})`
        let pop2 = `L.latLng(${this.state.coord2[1]}, ${this.state.coord2[0]})`
        let pop3 = `L.latLng(${this.state.coord3[1]}, ${this.state.coord3[0]})`
        let pop4 = `L.latLng(${this.state.coord4[1]}, ${this.state.coord4[0]})`
        let pop
        
        if(this.state.coord1.length > 0){
          pop = pop1 + ","
          
        }
        if(this.state.coord2.length > 0){
          pop += pop2 + ","
        }
        if(this.state.coord3.length > 0){
          pop += pop3 + ","
        }
        if(this.state.coord4.length > 0){
          pop += pop4 
        }
        const correct = pop
        console.log("correct")
        console.log(correct)
        const { lat, lng, zoom } = this.state;
        const position = [lat,lng];
        return (
            
            <div className="body__elements__frame__main">
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

        <FeatureGroup>
          <EditControl
      position='topleft'
      onEdited={this._onEditPath}
      onCreated={e => console.log(e)}
      onDeleted={this._onDeleted}
      draw={{
        rectangle: false
      }}
    />
    
  </FeatureGroup>
        <Overlay name="Pomniki">
          <GeoJSONWithPomnik callbackfunc={this.callback} data={this.props.pomniki} 
           />
        </Overlay>
        <Overlay name="Siłownie">
          <GeoJSONWithPomnik callbackfunc={this.callback}  data={this.props.silownie}/>
        </Overlay>
        <Overlay name="Teatry">
          <GeoJSONWithPomnik callbackfunc={this.callback} data={this.props.teatry}/>
        </Overlay>
        <Overlay name="Muzea">
          <GeoJSONWithPomnik callbackfunc={this.callback}  data={this.props.muzea}/>
        </Overlay>
        <Overlay name="Cmentarze">
          <GeoJSONWithPomnik callbackfunc={this.callback} data={this.props.cmentarze}/>
        </Overlay>
        <Overlay name="Kluby">
          <GeoJSONWithPomnik callbackfunc={this.callback} data={this.props.kluby}/>
        </Overlay>
        <Overlay name="Festiwale">
          <GeoJSONWithPomnik callbackfunc={this.callback} data={this.props.festiwale}/>
        </Overlay>
        {this.state.routing ? <Routing map={this.map} proba1 = {this.state.coord1} proba2={this.state.coord2} proba3={this.state.coord3} proba4={this.state.coord4}pop={pop}/>: null}
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
let feature_of_geometry_clear = feature1
let popupContent = tabela;
    layer.bindPopup(popupContent);
    layer.on({
      mouseover: e => {
        
        layer.openPopup();
        console.log(properties.nazwa)
        console.log("feature geometria")
        console.log(feature_of_geometry[1])
        if(feature_of_geometry[1] === undefined ){
          console.log("undefined")
          console.log(feature_of_geometry)
          props.callbackfunc(properties.nazwa,feature_of_geometry_clear)
        }
        else{
          console.log(" nie undefined")
          console.log(feature_of_geometry)
          props.callbackfunc(properties.nazwa,feature_of_geometry)
        }
        // props.callbackfunc(properties.nazwa,feature_of_geometry)
        console.log("to jest geometria punktu")
        console.log(feature_of_geometry_clear)
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