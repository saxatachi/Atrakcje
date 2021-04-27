import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";
class Routing extends MapLayer {
  
  createLeafletElement() {
    const { map } = this.props;
    let latlng1 = L.latLng(this.props.proba1[1],this.props.proba1[0])
    let latlng2 = L.latLng(this.props.proba2[1],this.props.proba2[0])
    let latlng3 = L.latLng(this.props.proba3[1],this.props.proba3[0])
    let latlng4 = L.latLng(this.props.proba4[1],this.props.proba4[0])
    let popuprouting = []
    popuprouting.push(latlng1)
    popuprouting.push(latlng2)
    if(this.props.proba3.length >0){
      popuprouting.push(latlng3)
    }
    if(this.props.proba4.length >0){
      popuprouting.push(latlng4)
    }
    
    var leafletElement = L.Routing.control({
      waypoints: popuprouting,
      lineOptions: {
        styles: [
          {
            color: "red",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      language: 'pl',
      addWaypoints: true,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false
    }).addTo(map.leafletElement);
    this.props.callbackplan(leafletElement.getPlan())
    this.props.routing(leafletElement)
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
