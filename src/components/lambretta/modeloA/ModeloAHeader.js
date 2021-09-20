import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../header/Header.css'

export default function ModeloAHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to='lambretta'>Voltar</Link> </li>
                    <li> <Link to='Lambretta125M'>Lambretta125M</Link> </li>
                </ul>
            </nav>
        </header>
    )
}