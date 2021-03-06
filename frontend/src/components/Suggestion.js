import React, { Component } from 'react'

export default class Suggestion extends Component {
    constructor(props){
        super(props)
        props.callbacksuggestions()
        this.latitudeinputRef = React.createRef()
        this.longitudeinputRef = React.createRef()
        
    }
    render() {
        console.log("martker")
        console.log(this.props.longitude_marker)
        console.log(this.props.latitude_marker)
        if(this.props.add == true){
            this.handleLatLng(this.props.latitude_marker,this.props.longitude_marker)
        }
        return (
            <div className="suggestions__options">
                <div className="suggestions__options__name">
                    <label>Nazwa obiektu</label>
                    <input placeholder="Nazwa obiektu"></input>
                    <label>Opis obiektu</label>
                    <textarea placeholder="Opis obiektu"></textarea>
                    <label>Współrzędne obiektu (aktualizowanie po użyciu znacznika na mapie)</label>
                    <input  ref={this.latitudeinputRef}  placeholder="szerokość geograficzna"></input>
                    <input  ref={this.longitudeinputRef}  placeholder="długość geograficzna"></input>
                </div>
            </div>
        )
    }
    handleLatLng = (lat , lng)=>{
        this.latitudeinputRef.current.value = lat
        this.longitudeinputRef.current.value = lng
    }
}
