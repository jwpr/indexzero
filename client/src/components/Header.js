import React, { Component } from 'react';
import './Header.css';
import brandIcon from '../images/brand.svg';

export default class Header extends Component {
    render () {
        return (
            <div className="header-bar">
                <div className="brand">
                    <img className="brand__logo" src={brandIcon} alt="Index 0"></img>
                    <span className="brand__text">Index[0]</span>
                </div>
                <input className="input__text-box title-search" placeholder="Search"></input>
                <div className="login-signup">
                    <button className="button login__button" onClick={this.showLogin}>Login</button>
                </div>
            </div>
        )
    }
}