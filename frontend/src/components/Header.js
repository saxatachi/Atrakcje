import React, { Component } from 'react';
import '../css/Header.min.css'
class Header extends Component {
    render() {
        return (
            <div className="header__elements">
                <div className="header__elements__title">
                    <a>Atrakcje turystyczne miasta Lublin</a>
                </div>
                <div className="header__elements__search" >
                    </div>
            </div>
        );

    }

}

export default Header;