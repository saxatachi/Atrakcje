import React, { Component } from 'react'

export default class Suggestion extends Component {
    render() {
        return (
            <div className="suggestions__options">
                <div className="suggestions__options__name">
                    <label>Nazwa obiektu</label>
                    <input placeholder="Nazwa obiektu"></input>
                    <label>Opis obiektu</label>
                    <textarea placeholder="Opis obiektu"></textarea>
                    <label>Współrzędne obiektu (aktualizowanie po użyciu znacznika na mapie)</label>
                    <input placeholder="szerokość geograficzna"></input>
                    <input placeholder="długość geograficzna"></input>
                </div>
            </div>
        )
    }
}
