import React, { Component, useState } from 'react';
import {Map, Marker, Popup, TileLayer, GeoJSON, LayersControl,LayerGroup,withLeaflet,MapControl,FeatureGroup, Circle } from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import {getGeojson,addSuggestionTrue,addSuggestionFalse,addLatLng,routing,routingon,routingoff} from '../actions/geojson'
import {connect} from 'react-redux';
const { BaseLayer, Overlay } = LayersControl
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
          routing: false,
          featureappear: false,
          latitude_marker: '',
          longitude_marker: '',
          add: false,
          leaflet_id: '',
          plan: null
        }
      }
      callbackplan= (element)=>{
        this.setState({
          plan: element
        })
      }
      callbackadd = () =>{
        this.setState({

        })
      }
      callbackroad = () =>{
        this.setState({
          featureappear: false
        })
      }
      callbacksuggestions = () => {
        this.setState({
          featureappear: true
        })
      }
      callbackcoords = (data1,data2,data3,data4) =>{
        if(this.props.routingvar !== null){
          let array = []
          console.log(this.props.routingvar.getWaypoints())
          if(data1[0] !== undefined && data1[1] !== undefined){
            array.push(L.latLng([data1[1],data1[0]]))
          }
          if(data2[0] !== undefined && data2[1] !== undefined){
            array.push(L.latLng([data2[1],data2[0]]))
          }
          if(data3[0] !== undefined && data3[1] !== undefined){
            array.push(L.latLng([data3[1],data3[0]]))
          }
          if(data4[0] !== undefined && data4[1] !== undefined){
            array.push(L.latLng([data4[1],data4[0]]))
          }
          this.props.routingvar.setWaypoints(array)
        }
        let pop1 = `L.latLng(${data1[1]}, ${data1[0]})`
        let pop2 = `L.latLng(${data2[1]}, ${data2[0]})`
        let pop3 = `L.latLng(${data3[1]}, ${data3[0]})`
        let pop4 = `L.latLng(${data4[1]}, ${data4[0]})`
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
        let correct = pop
        this.setState({
          coord1: data1,
          coord2: data2,
          coord3: data3,
          coord4: data4,
          routing: true
        })
        this.props.routingon()
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
        
        const { lat, lng, zoom } = this.state;
        const position = [lat,lng];
        return (
            
            <div className="body__elements__frame__main">
            <div className="body__elements__frame__options">
                <div className="body__elements__option__road"><Road add={this.state.add} name={this.state.name} callbacksuggestions={this.callbacksuggestions} callbackroad={this.callbackroad} coordinates={this.state.coordinates} callbackcoords={this.callbackcoords} latitude_marker={this.state.latitude_marker} longitude_marker={this.state.longitude_marker} map={this.map} /></div>
            </div>
            <div className="body__elements__frame__map">
        <Map center={position} zoom={zoom} ref={this.saveMap}>
        <LayersControl position="topright">
        
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.featureappear ? 
        <FeatureGroup>
          <EditControl
      position='topleft'
      onEdited={e =>{ 
        this.setState({
          latitude_marker: e.layers._layers[this.state.leaflet_id]._latlng.lat,
          longitude_marker: e.layers._layers[this.state.leaflet_id]._latlng.lng,
          add: true,
        })
        this.props.addSuggestionTrue()
        let data = {
          latidute: e.layers._layers[this.state.leaflet_id]._latlng.lat,
          longitude: e.layers._layers[this.state.leaflet_id]._latlng.lng
        }
        this.props.addLatLng(data)
        }
      }
      onCreated={
        e =>{
          let number = e.layer._leaflet_id
      this.setState({
        latitude_marker: e.layer._latlng.lat,
        longitude_marker: e.layer._latlng.lng,
        add: true,
        leaflet_id: e.layer._leaflet_id
      })
      let data = {
        latidute: e.layer._latlng.lat,
        longitude: e.layer._latlng.lng
      }
      this.props.addLatLng(data)
      this.props.addSuggestionTrue()
      
      
      }}
      onDeleted={e=>{
        let data = {
          latidute: "",
          longitude: ""
        }
        this.props.addLatLng(data)
      }}
      draw={{
        rectangle: false,
        polyline: false,
        circle: false,
        circlemarker: false,
        polygon: false,
      }}
    />
    
  </FeatureGroup>: null}
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
        <Overlay name="Kina">
          <GeoJSONWithPomnik callbackfunc={this.callback} data={this.props.kina}/>
        </Overlay>
        {this.state.routing ? <Routing map={this.map} proba1 = {this.state.coord1} proba2={this.state.coord2} proba3={this.state.coord3} proba4={this.state.coord4}pop={pop} callbackplan={this.callbackplan} routing={this.props.routing} />: null}
        {/* {this.props.addrouting === true ? <Routing map={this.map} proba1 = {this.state.coord1} proba2={this.state.coord2} proba3={this.state.coord3} proba4={this.state.coord4}pop={pop} callbackplan={this.callbackplan} routing={this.props.routing} />: console.log(null)} */}
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
  if(key === "strona_internetowa" && properties[key] !== '-'){
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
        if(feature_of_geometry[1] === undefined ){
          
          props.callbackfunc(properties.nazwa,feature_of_geometry_clear)
        }
        else{
          props.callbackfunc(properties.nazwa,feature_of_geometry)
        }
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
  routingvar: state.geojson.routing,
  addrouting: state.geojson.routingon
})
export default connect(mapStateToProps,{getGeojson,addSuggestionFalse,addSuggestionTrue,addLatLng,routing,routingon,routingoff})(Mapa);