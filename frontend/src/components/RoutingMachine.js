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
    console.log("popup")
    console.log(popuprouting)
    console.log(L.latLng(this.props.proba2[1],this.props.proba2[0]))
    
    
    let leafletElement = L.Routing.control({
      waypoints: popuprouting,
      
        // this.props.pop
        // L.latLng(this.props.proba1[1],this.props.proba1[0]),L.latLng(this.props.proba2[1],this.props.proba2[0])
        // L.latLng(51.2565355, 22.5648726),L.latLng(51.2416419, 22.5065198),L.latLng(51.2356221, 22.5236389),L.latLng(51.2328177, 22.5357899)
        // L.latLng(51.2617174, 22.5315643),L.latLng(51.2435915, 22.5136702),L.latLng(51.2416419, 22.5065198),L.latLng(51.2360797, 22.5231075)
      
      // router: new L.Routing.Google(),
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      language: 'pl',
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
