import React, { Component } from 'react';
import '../css/Road.min.css'
class Road extends Component {
    render() {
        return (
            <div className="road__suggestions">
            <div className="road">Wyznaczanie trasy</div>
            <div className="suggestions">Propozycje punktów</div>
                <div className="road__options">
                    <div className="road__options__point">
                        <a>Podaj punkt początkowy</a>
                        <input placeholder="Pierwszy punkt" ></input><button>Dodaj</button><br />
                    </div>
                    <div className="road__options__point">
                    <a>Podaj punkt kolejny</a>
                    <input  placeholder="Drugi punkt"></input><button>Dodaj</button>
                    </div>
                    <div onClick={}><a href="saddsa">+ Dodaj kolejne punkty</a></div>
                    <button id="submit">Wyznacz trasę</button>
                
            </div>
            </div>
        );
    }
}

export default Road;