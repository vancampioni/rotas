import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Header/Header.css'

export default function GrandAmericanTouringHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='harley'>Voltar</Link> </li>
                    <li> <Link to='roadglide'>Lowrider</Link> </li>
                    <li> <Link to='roadking'>Sportglide</Link> </li>
                </ul>
            </nav>
        </header>
    )
}