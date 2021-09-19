import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Header/Header.css'

export default function CruiserHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='harley'>Voltar</Link> </li>
                    <li> <Link to='lowrider'>Lowrider</Link> </li>
                    <li> <Link to='sportglide'>Sportglide</Link> </li>
                </ul>
            </nav>
        </header>
    )
}