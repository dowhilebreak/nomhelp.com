import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../styles/components/Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header-container col-md-12">
                <div className="row">
                    <div className="col">
                        <div className="logo-container">
                            <a className="logo" href="/">
                                <img className="logo" src={logo} alt="NOM Help Logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;