import React, {Component} from 'react';
const bitpassLogo = require('../../assets/img/bitpassLogo.svg');

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <img className="logo" src={bitpassLogo} ref="Bitpass Logo"/>
                <div className="logo-text">
                    Bit<strong>Pass</strong>
                </div>
            </div>
        );
    }
}
