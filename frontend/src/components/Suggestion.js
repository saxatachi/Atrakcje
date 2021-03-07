import React, { Component } from 'react'

export default class Suggestion extends Component {
    constructor(props){
        super(props)
        props.callbacksuggestions()
        this.latitudeinputRef = React.createRef()
        this.longitudeinputRef = React.createRef()
        
    }
    render() {
        const handlesendtodb = () => {
            console.log("wysłanie punktu do bazy")
            alert("wysłano punkt z propozycją do zatwierdzenia")
        }
        console.log("martker")
        console.log(this.props.longitude_marker)
        console.log(this.props.latitude_marker)
        if(this.props.add == true){
            this.handleLatLng(this.props.latitude_marker,this.props.longitude_marker)
        }
        return (
            // <div className="suggestions__options">
                <div className="suggestion__options">
                    <div className="suggestion__options__element">
                    <label>Nazwa obiektu</label>
                    <div className="suggestion__options__element__input">
                    <input placeholder="Nazwa obiektu"></input>
                    </div>
                    </div>
                    <div className="suggestion__options__element">
                    <label>Opis obiektu</label>
                    <div className="suggestion__options__element__input">
                    <textarea placeholder="Opis obiektu"></textarea>
                    </div>
                    </div>
                    <div className="suggestion__options__element">
                    <label>Współrzędne obiektu (aktualizowanie po użyciu znacznika na mapie)</label>
                    <div className="suggestion__options__element__input">
                    <input  ref={this.latitudeinputRef}  placeholder="szerokość geograficzna"></input>
                    </div>
                    <div className="suggestion__options__element__input">
                    <input  ref={this.longitudeinputRef}  placeholder="długość geograficzna"></input>
                    </div>
                    <div className="suggestion__options__element__button">
                    <button onClick={handlesendtodb}>Wyślij propozycje do moderatora</button>
                    </div>
                    </div>
                    
                </div>
            // </div>
        )
    }
    handleLatLng = (lat , lng)=>{
        this.latitudeinputRef.current.value = lat
        this.longitudeinputRef.current.value = lng
    }
}
