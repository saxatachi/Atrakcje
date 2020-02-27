import React, { Component } from 'react';
import '../css/Body.min.css'
import Mapa from './Mapa'
class Body extends Component {
    render() {
        return (
            <div className="body__elements">
                <div className="body__elements__red"></div>
                <div className="body__elements__options"></div>
                <div className="body__elements__frame"><Mapa /></div>
            </div>
        );
    }
}

export default Body;