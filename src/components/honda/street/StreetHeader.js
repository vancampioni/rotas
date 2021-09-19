import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../header/Header.css'

export default function StreetHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='Honda'>Voltar</Link> </li>
                    <li> <Link to='City'>City</Link> </li>
                    <li> <Link to='Naked'>Naked</Link> </li>
                </ul>
            </nav>
        </header>
    )
}