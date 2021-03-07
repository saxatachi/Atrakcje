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
                    {/* <div className="header__elements__search__bar">
                            <i className="fa fa-search"></i>
                            <input className="header__elements__search__bar__input" type="text" placeholder="Search.." name="search" />
                        </div> */}
                    </div>
            </div>
        );

    }

}

export default Header;