import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../header/Header.css'

export default function ModeloBHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='lambretta'>Voltar</Link> </li>
                    <li> <Link to='Lambretta125M'>Lambretta125B</Link> </li>
                </ul>
            </nav>
        </header>
    )
}