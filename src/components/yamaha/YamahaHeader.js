import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../header/Header.css'

export default function YamahaHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='/'>Voltar</Link> </li>
                    <li> <Link to='urbano'>Urbano</Link> </li>
                </ul>
            </nav>
        </header>
    )
}