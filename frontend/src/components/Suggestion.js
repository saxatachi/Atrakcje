import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendPoint,addLatLng} from '../actions/geojson'
class Suggestion extends Component {
    constructor(props){
        super(props)
        props.callbacksuggestions()
        this.latitudeinputRef = React.createRef()
        this.longitudeinputRef = React.createRef()
        this.objectnameRef = React.createRef()
        this.objectdescriptionRef = React.createRef()
    }
    render() {
        const handlesendtodb = () => {
            
            if(this.latitudeinputRef.current.value !== "" && this.longitudeinputRef.current.value != "" && this.objectnameRef.current.value != ""){
                let data = {
                    szerokosc:this.latitudeinputRef.current.value,
                    dlugosc: this.longitudeinputRef.current.value,
                    nazwa: this.objectnameRef.current.value,
                    opis: this.objectdescriptionRef.current.value
                }
                this.props.sendPoint(data)
                alert("wysłano punkt z propozycją do zatwierdzenia w celu weryfikacji")
                this.objectnameRef.current.value = ""
                this.objectdescriptionRef.current.value = ""
                let data2 = {
                    latidute: "",
                    longitude: ""
                  }
                this.props.addLatLng(data2)
            }else{
                alert("wystąpił błąd. Sprawdź dane lub spróbuj później")
            }
        }
        return (
                <div className="suggestion__options">
                    <div className="suggestion__options__element">
                    <label>Nazwa obiektu</label>
                    <div className="suggestion__options__element__input">
                    <input ref={this.objectnameRef} placeholder="Nazwa obiektu"></input>
                    </div>
                    </div>
                    <div className="suggestion__options__element">
                    <label>Opis obiektu</label>
                    <div className="suggestion__options__element__input">
                    <textarea ref={this.objectdescriptionRef} placeholder="Opis obiektu"></textarea>
                    </div>
                    </div>
                    <div className="suggestion__options__element">
                    <label>Współrzędne obiektu (aktualizowanie po użyciu znacznika na mapie)</label>
                    <div className="suggestion__options__element__input">
                    <input  ref={this.latitudeinputRef} value={this.props.latidute_redux}  disabled placeholder="szerokość geograficzna"></input>
                    </div>
                    <div className="suggestion__options__element__input">
                    <input  ref={this.longitudeinputRef} value={this.props.longitude_redux} disabled  placeholder="długość geograficzna"></input>
                    </div>
                    <div className="suggestion__options__element__button">
                    <button onClick={handlesendtodb}>Wyślij propozycje do moderatora</button>
                    </div>
                    </div>
                    
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        latidute_redux: state.geojson.latidute,
        longitude_redux: state.geojson.longitude    
    }
}
export default connect(mapStateToProps,{sendPoint,addLatLng})(Suggestion);