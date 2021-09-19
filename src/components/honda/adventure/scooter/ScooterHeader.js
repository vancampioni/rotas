import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../header/Header.css'

export default function ScooterHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='adventure'>Voltar</Link> </li>
                    <li> <Link to='HondaADV'>HondaADV</Link> </li>
                    <li> <Link to='XADV'>XADV</Link> </li>
                </ul>
            </nav>
        </header>
    )
}